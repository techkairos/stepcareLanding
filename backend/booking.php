<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('Asia/Kolkata');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once "db.php";

/*
|--------------------------------------------------------------------------
| Support both application/x-www-form-urlencoded ($_POST)
| and application/json (php://input)
|--------------------------------------------------------------------------
*/
if (!empty($_POST)) {
    $data = $_POST;
} else {
    $data = json_decode(file_get_contents("php://input"), true) ?? [];
}

$full_name   = trim($data['full_name'] ?? '');
$phone       = trim($data['phone'] ?? '');
$email       = trim($data['email'] ?? '');
$doctor_id   = isset($data['doctor_id']) ? (int)$data['doctor_id'] : 0;
$service_id  = isset($data['service_id']) ? (int)$data['service_id'] : 0;
$date        = trim($data['day'] ?? '');
$start       = trim($data['start_time'] ?? '');
$end         = trim($data['end_time'] ?? '');
$message     = trim($data['message'] ?? '');

// UTM parameters
$utm_source  = trim($data['utm_source'] ?? '');
$utm_medium  = trim($data['utm_medium'] ?? '');
$utm_campaign = trim($data['utm_campaign'] ?? '');
$utm_content = trim($data['utm_content'] ?? '');
$utm_term    = trim($data['utm_term'] ?? '');
$referral_url = trim($data['referral_url'] ?? '');

/*
|--------------------------------------------------------------------------
| Basic validation
|--------------------------------------------------------------------------
*/
if ($doctor_id <= 0 || $service_id <= 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid doctor or service"
    ]);
    exit;
}

if (empty($date) || empty($start) || empty($end)) {
    echo json_encode([
        "success" => false,
        "message" => "Date and slot are required"
    ]);
    exit;
}

if (empty($full_name)) {
    echo json_encode([
        "success" => false,
        "message" => "Name is required"
    ]);
    exit;
}

if (!preg_match("/^[A-Za-z ]+$/", $full_name)) {
    echo json_encode([
        "success" => false,
        "message" => "Name should contain only letters and spaces"
    ]);
    exit;
}

if (!preg_match("/^[0-9]{10}$/", $phone)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid phone number"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email"
    ]);
    exit;
}

/*
|--------------------------------------------------------------------------
| Prevent past booking
|--------------------------------------------------------------------------
*/
$slotDateTime = strtotime($date . ' ' . $start);
$currentTime = time();

if (!$slotDateTime || $slotDateTime <= $currentTime) {
    echo json_encode([
        "success" => false,
        "message" => "Past date or time cannot be booked"
    ]);
    exit;
}

/*
|--------------------------------------------------------------------------
| Validate doctor exists
|--------------------------------------------------------------------------
*/
$doctorSql = "SELECT id, name FROM doctors WHERE id = ? AND status = 1 LIMIT 1";
$doctorStmt = $conn->prepare($doctorSql);
$doctorStmt->bind_param("i", $doctor_id);
$doctorStmt->execute();
$doctorResult = $doctorStmt->get_result();

if ($doctorResult->num_rows === 0) {
    echo json_encode([
        "success" => false,
        "message" => "Doctor not found or inactive"
    ]);
    exit;
}
$doctorRow  = $doctorResult->fetch_assoc();
$doctorName = $doctorRow['name'] ?? 'our specialist';

/*
|--------------------------------------------------------------------------
| Check if slot is still available
|--------------------------------------------------------------------------
*/
$checkSql = "SELECT id
             FROM bookings
             WHERE doctor_id = ?
               AND day = ?
               AND start_time = ?
               AND end_time = ?
             LIMIT 1";

$checkStmt = $conn->prepare($checkSql);
$checkStmt->bind_param("isss", $doctor_id, $date, $start, $end);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode([
        "success" => false,
        "message" => "This slot is already booked. Please choose another slot."
    ]);
    exit;
}

/*
|--------------------------------------------------------------------------
| Create booking ID
|--------------------------------------------------------------------------
*/
$bookingid = "STEP-" . date("Ymd") . "-" . rand(1000, 9999);

/*
|--------------------------------------------------------------------------
| Insert booking with UTM and referral data
|--------------------------------------------------------------------------
*/
$insertSql = "INSERT INTO bookings
              (bookingid, full_name, phone, email, service_id, doctor_id, day, start_time, end_time, message, utm_source, utm_medium, utm_campaign, utm_content, utm_term, referral_url)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$insertStmt = $conn->prepare($insertSql);
$insertStmt->bind_param(
    "ssssiissssssss",
    $bookingid,
    $full_name,
    $phone,
    $email,
    $service_id,
    $doctor_id,
    $date,
    $start,
    $end,
    $message,
    $utm_source,
    $utm_medium,
    $utm_campaign,
    $utm_content,
    $utm_term,
    $referral_url
);

if ($insertStmt->execute()) {
    echo json_encode([
        "success"   => true,
        "message"   => "Appointment booked successfully",
        "bookingid" => $bookingid,
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to save booking"
    ]);
}
?>
