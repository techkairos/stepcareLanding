import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import DoctorProfileModal from "./DoctorProfileModal";import { getUTMParams } from "../../utils/utm";import doctorImage from "@/assets/img/dr-arya.jpg";

type DateOption = {
  day: string;
  date: string;
  full: string;
  dateValue: string;
  monthYear?: string;
};

type SlotOption = {
  start_time: string;
  end_time: string;
  label: string;
};

type FormDataType = {
  name: string;
  contact: string;
  email: string;
};

type FormErrors = {
  name?: string;
  contact?: string;
  email?: string;
  date?: string;
  slot?: string;
  api?: string;
};

type ScrollDirection = "left" | "right";

const API_BASE = "https://stepcare.co.in/landing/api";
const DOCTOR_ID = 16;
const SERVICE_ID = 1;
const MAX_DATES = 28;

const DoctorCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const doctorDetails = {
    name: "Dr. Arya Prasad",
    image: doctorImage,
    specialization: "Evidence based treatment and holistic approach",
    qualifications: "MBBS, DNB (Family Medicine)",
    consult: "Family Medicine",
    price: "750",
    exp: "8",
    speaks: "English, Malayalam",
    interval: "15 Min.",
    weeklySchedule: [
      {
        days: "Mon, Tue, Wed, Fri",
        time: "8:00 AM to 4:00 PM",
      },
      {
        days: "Thu, Sat",
        time: "12:00 PM to 8:00 PM",
      },
    ],
    contact: (
      <>
        <p>
          Dr Arya Prasad is a Consultant Family Physician with over three years
          of experience in delivering comprehensive primary healthcare across all
          age groups. She manages a wide range of medical concerns, including
          acute illnesses, chronic conditions, and preventive healthcare needs.
        </p>

        <p>
          Holding an MBBS and DNB in Family Medicine, Dr Arya Prasad is trained
          in evidence-based clinical care and focuses on accurate diagnosis and
          structured treatment planning. She is a Life Member of the Academy of
          Family Physicians of India and the Indian Medical Association.
        </p>

        <p>
          Dr Arya follows a patient-centred approach to healthcare, ensuring
          that every treatment plan is tailored to the individual’s medical
          history, lifestyle, and long-term health goals.
        </p>

        <p>
          Committed to holistic and preventive care, she creates a supportive
          and approachable environment where patients feel comfortable discussing
          their concerns.
        </p>

        <p>
          With a strong focus on continuity of care and early intervention,
          Dr Arya works to help families maintain better health, prevent
          complications, and lead healthier, more balanced lives.
        </p>
      </>
    ),
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dateScrollRef = useRef<HTMLDivElement | null>(null);
  const slotScrollRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const expertiseTags = [
    "Acute illnesses",
    "Chronic and lifestyle diseases",
    "Preventive healthcare",
    "Minor surgical management",
    "Health checkups",
    "Health education",
  ];

  const [dateOptions, setDateOptions] = useState<DateOption[]>([]);
  const [slots, setSlots] = useState<SlotOption[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateOption | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SlotOption | null>(null);
  const [bookingStep, setBookingStep] = useState<"slots" | "form">("slots");
  const [loadingDates, setLoadingDates] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    contact: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const scrollDates = (direction: ScrollDirection) => {
    if (!dateScrollRef.current) return;
    dateScrollRef.current.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth",
    });
  };

  const scrollSlots = (direction: ScrollDirection) => {
    if (!slotScrollRef.current) return;
    slotScrollRef.current.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth",
    });
  };

  const visibleSlots = useMemo(() => {
    if (!selectedDate) return [];

    const now = new Date();
    const todayString = now.toISOString().slice(0, 10);

    return slots.filter((slot) => {
      if (selectedDate.dateValue !== todayString) return true;

      const slotDateTime = new Date(`${selectedDate.dateValue}T${slot.start_time}`);
      return slotDateTime.getTime() > now.getTime();
    });
  }, [slots, selectedDate]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        setLoadingDates(true);
        setErrors((prev) => ({ ...prev, api: "" }));

        const response = await fetch(
          `${API_BASE}/available-dates.php?doctor_id=${DOCTOR_ID}`
        );
        const data = await response.json();

        if (data.success) {
          const today = new Date().toISOString().slice(0, 10);

          const fetchedDates: DateOption[] = (data.dates || [])
            .filter((item: DateOption) => item.dateValue >= today)
            .slice(0, MAX_DATES)
            .map((item: DateOption) => ({
              ...item,
              monthYear:
                item.monthYear ||
                new Date(item.dateValue).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                }),
            }));

          setDateOptions(fetchedDates);

          if (fetchedDates.length > 0) {
            setSelectedDate(fetchedDates[0]);
          } else {
            setSelectedDate(null);
          }
        } else {
          setErrors((prev) => ({
            ...prev,
            api: data.message || "Unable to load dates",
          }));
        }
      } catch {
        setErrors((prev) => ({
          ...prev,
          api: "Failed to load available dates",
        }));
      } finally {
        setLoadingDates(false);
      }
    };

    fetchDates();
  }, []);

  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate?.dateValue) {
        setSlots([]);
        setSelectedSlot(null);
        return;
      }

      try {
        setLoadingSlots(true);
        setErrors((prev) => ({ ...prev, api: "", slot: "" }));

        const response = await fetch(
          `${API_BASE}/available-slots.php?doctor_id=${DOCTOR_ID}&date=${selectedDate.dateValue}`
        );
        const data = await response.json();

        if (data.success) {
          const fetchedSlots: SlotOption[] = data.slots || [];
          setSlots(fetchedSlots);
        } else {
          setSlots([]);
          setSelectedSlot(null);
          setErrors((prev) => ({
            ...prev,
            api: data.message || "Unable to load slots",
          }));
        }
      } catch {
        setSlots([]);
        setSelectedSlot(null);
        setErrors((prev) => ({
          ...prev,
          api: "Failed to load available slots",
        }));
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [selectedDate]);

  useEffect(() => {
    if (visibleSlots.length > 0) {
      const stillSelected = visibleSlots.find(
        (slot) =>
          slot.start_time === selectedSlot?.start_time &&
          slot.end_time === selectedSlot?.end_time
      );

      setSelectedSlot(stillSelected || visibleSlots[0]);
    } else {
      setSelectedSlot(null);
    }
  }, [visibleSlots]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "contact") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "name") {
      updatedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      api: "",
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!selectedDate) {
      newErrors.date = "Please select a date";
    }

    if (!selectedSlot) {
      newErrors.slot = "Please select a slot";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters and spaces";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Enter a valid 10-digit contact number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm() || !selectedDate || !selectedSlot) return;

    try {
      setSubmitting(true);
      setErrors((prev) => ({ ...prev, api: "" }));

      const utmData = getUTMParams();

      const response = await fetch(`${API_BASE}/book-appointment.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctor_id: DOCTOR_ID,
          service_id: SERVICE_ID,
          full_name: formData.name.trim(),
          phone: formData.contact.trim(),
          email: formData.email.trim(),
          day: selectedDate.dateValue,
          start_time: selectedSlot.start_time,
          end_time: selectedSlot.end_time,
          message: "",
          landing: "family-doctor-landing",
          utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          utm_content: utmData.utm_content,
          utm_term: utmData.utm_term,
          referral_url: utmData.referral_url,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const thankYouData = {
          bookingid: data.bookingid || "",
          name: formData.name.trim(),
          contact: formData.contact.trim(),
          email: formData.email.trim(),
          selectedDate: selectedDate.full,
          selectedDateValue: selectedDate.dateValue,
          selectedSlot: selectedSlot.label,
          startTime: selectedSlot.start_time,
          endTime: selectedSlot.end_time,
          doctorName: doctorDetails.name,
          serviceId: SERVICE_ID,
          doctorId: DOCTOR_ID,
          lastPage: "/family-doctor-services",
        };

        sessionStorage.setItem(
          "stepcareThankYouData",
          JSON.stringify(thankYouData)
        );

        navigate("/family-doctor-services/thank-you");
      } else {
        setErrors((prev) => ({
          ...prev,
          api: data.message || "Booking failed. Please try again.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        api: "Something went wrong while booking the appointment",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="doctor-card" className="bg-gradient-to-b from-gray-50 to-white pt-8 pb-8">
      <style>{`
        .date-scrollbar::-webkit-scrollbar {
          height: 4px;
        }

        .date-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .date-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #00B4CC, #A4D65E);
          border-radius: 999px;
        }

        .date-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #009BB3, #8FC04E);
        }

        .date-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #00B4CC transparent;
        }
      `}</style>

      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-8xl mx-auto rounded-[28px] border border-[#00B4CC]/20 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row rounded-[28px] border border-[#00B4CC]/20 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="w-full lg:w-[400px] p-4 lg:p-5">
              <div className="rounded-[24px] overflow-hidden bg-[#00B4CC]/5 h-[260px] sm:h-[320px] lg:h-[520px]">
                <img
                  src={doctorDetails.image}
                  alt={doctorDetails.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 px-4 pb-3 pt-2 lg:px-3 lg:py-4 flex flex-col h-full">
              <div className="flex h-full flex-col">
                <div className="mb-3 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="text-[1.5rem] sm:text-[1.5rem] leading-none font-bold text-gray-900">
                        {doctorDetails.name}
                      </h2>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex gap-2 items-center rounded-full bg-[#00B4CC]/10 px-2.5 py-1 text-xs font-semibold text-[#008CA1]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-languages w-5 h-5 mt-0.5 text-[#00B4CC]"
                        >
                          <path d="m5 8 6 6"></path>
                          <path d="m4 14 6-6 2-3"></path>
                          <path d="M2 5h12"></path>
                          <path d="M7 2h1"></path>
                          <path d="m22 22-5-10-5 10"></path>
                          <path d="M14 18h6"></path>
                        </svg>
                        {doctorDetails.speaks}
                      </span>
                      <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                        {doctorDetails.exp}+ years experience
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 border border-[#00B4CC]/20 rounded-xl px-4 py-3 shadow-sm">
                      <span className="text-2xl font-bold leading-none text-gray-900">
                        ₹ {doctorDetails.price}
                      </span>
                      <span className="text-sm text-gray-600 whitespace-nowrap">
                        per consultation
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-2 rounded-2xl border border-[#00B4CC]/15 bg-gradient-to-r from-[#00B4CC]/[0.05] to-[#A4D65E]/[0.05] p-2 shadow-sm">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/80 px-3 py-2 border border-white/70">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#008CA1] mb-1">
                        Qualifications
                      </h3>
                      <p className="text-sm font-medium text-gray-800 text-[.8rem]">
                        {doctorDetails.qualifications}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/80 px-3 py-2 border border-white/70">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6C9E28] mb-1">
                        Specialisation
                      </h3>
                      <p className="text-sm font-medium text-gray-800 text-[.8rem]">
                        {doctorDetails.specialization}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#00B4CC]/[0.03] p-2 shadow-sm">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#A4D65E]" />
                      <h3 className="text-sm font-semibold text-gray-800">
                        Weekly Availability
                      </h3>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-[#A4D65E]/30 bg-[#A4D65E]/10 px-3 py-1 text-xs font-semibold text-[#6C9E28] w-fit">
                      {doctorDetails.interval} consultation
                    </div>
                  </div>

                  <div className="space-y-3">
                    {doctorDetails.weeklySchedule.map((slot, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                            Days
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {slot.days}
                          </p>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                            Time
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {slot.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-4 h-px bg-gray-200" />

                <div className="mb-4 flex flex-wrap gap-2">
                  {expertiseTags.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00B4CC] hover:bg-[#00B4CC]/5 hover:text-[#00B4CC] transition-all duration-300 shadow-sm text-[12px]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <Button
                    onClick={handleButtonClick}
                    variant="default"
                    size="default"
                    className="w-full py-5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] shadow-lg"
                  >
                    View Profile
                  </Button>
                </div>

                {isModalOpen && (
                  <DoctorProfileModal
                    doctor={doctorDetails}
                    closeModal={closeModal}
                  />
                )}
              </div>
            </div>

            <div className="w-full lg:w-[460px] mt-6 lg:mt-0 p-4 lg:p-5 border-t lg:border-t-0 lg:border-l border-gray-200/80 bg-gradient-to-b from-white to-[#00B4CC]/[0.03]">
              <div className="rounded-[24px] border border-[#00B4CC]/20 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {bookingStep === "slots" && (
                    <motion.div
                      key="slots"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          Book Consultation
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Choose date and slot for your appointment
                        </p>
                      </div>

                      <div className="mb-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00B4CC]/25 px-4 py-2 bg-[#00B4CC]/[0.04]">
                          <MapPin className="w-4 h-4 text-[#00B4CC]" />
                          <span className="text-sm font-medium text-gray-700">
                            Whitefield Center
                          </span>
                        </div>
                      </div>

                      {errors.api && (
                        <div className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                          <p className="text-sm text-red-600">{errors.api}</p>
                        </div>
                      )}

                      <div className="mb-3">
                        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-500 mb-3">
                          Select Date
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => scrollDates("left")}
                            className="h-8 w-8 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00B4CC] hover:text-[#00B4CC] transition"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <div
                            ref={dateScrollRef}
                            className="date-scrollbar flex-1 overflow-x-auto"
                          >
                            <div className="flex gap-1 min-w-max pr-1 pb-1">
                              {loadingDates ? (
                                <div className="px-3 py-2 text-sm text-gray-500">
                                  Loading dates...
                                </div>
                              ) : dateOptions.length > 0 ? (
                                dateOptions.map((item) => {
                                  const active =
                                    selectedDate?.dateValue === item.dateValue;

                                  return (
                                    <button
                                      key={item.dateValue}
                                      type="button"
                                      onClick={() => {
                                        setSelectedDate(item);
                                        setErrors((prev) => ({
                                          ...prev,
                                          date: "",
                                          slot: "",
                                        }));
                                      }}
                                      className={`min-w-[56px] rounded-xl border px-2 py-2 text-center transition-all ${
                                        active
                                          ? "border-[#00B4CC] bg-[#00B4CC] text-white shadow-md"
                                          : "border-gray-200 bg-white text-gray-700 hover:border-[#00B4CC] hover:bg-[#00B4CC]/5"
                                      }`}
                                    >
                                      <div className="text-[11px] font-medium">
                                        {item.day}
                                      </div>
                                      <div className="text-lg font-bold leading-tight mt-1">
                                        {item.date}
                                      </div>
                                      <div
                                        className={`text-[9px] leading-tight mt-1 ${
                                          active ? "text-white/90" : "text-gray-500"
                                        }`}
                                      >
                                        {item.monthYear || ""}
                                      </div>
                                    </button>
                                  );
                                })
                              ) : (
                                <div className="px-3 py-2 text-sm text-gray-500">
                                  No dates available
                                </div>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => scrollDates("right")}
                            className="h-8 w-8 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00B4CC] hover:text-[#00B4CC] transition"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {errors.date && (
                          <p className="text-xs text-red-500 mt-2">{errors.date}</p>
                        )}
                      </div>

                      <div className="mb-5">
                        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-500 mb-3">
                          Available Slots
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => scrollSlots("left")}
                            className="h-8 w-8 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00B4CC] hover:text-[#00B4CC] transition"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <div
                            ref={slotScrollRef}
                            className="date-scrollbar flex-1 overflow-x-auto"
                          >
                            <div className="flex gap-2 min-w-max pr-1 pb-1">
                              {loadingSlots ? (
                                <div className="px-3 py-2 text-sm text-gray-500">
                                  Loading slots...
                                </div>
                              ) : visibleSlots.length > 0 ? (
                                visibleSlots.map((slot) => {
                                  const active =
                                    selectedSlot?.start_time === slot.start_time &&
                                    selectedSlot?.end_time === slot.end_time;

                                  return (
                                    <button
                                      key={`${slot.start_time}-${slot.end_time}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedSlot(slot);
                                        setErrors((prev) => ({
                                          ...prev,
                                          slot: "",
                                        }));
                                      }}
                                      className={`min-w-[96px] rounded-xl border px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all ${
                                        active
                                          ? "border-[#A4D65E] bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] text-white shadow-md"
                                          : "border-gray-200 bg-white text-gray-700 hover:border-[#00B4CC] hover:bg-[#00B4CC]/5"
                                      }`}
                                    >
                                      {slot.label}
                                    </button>
                                  );
                                })
                              ) : (
                                <div className="px-3 py-2 text-sm text-gray-500">
                                  No slots available
                                </div>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => scrollSlots("right")}
                            className="h-8 w-8 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00B4CC] hover:text-[#00B4CC] transition"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {errors.slot && (
                          <p className="text-xs text-red-500 mt-2">{errors.slot}</p>
                        )}
                      </div>

                      <div className="rounded-2xl bg-green-50 border border-green-200 px-4 py-3 mb-5">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-[#A4D65E] mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Next booking slot
                            </p>
                            <p className="text-sm text-gray-700">
                              {selectedDate?.full || "No date selected"} •{" "}
                              {selectedSlot?.label || "No slot selected"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button
                          onClick={() => {
                            const newErrors: FormErrors = {};
                            if (!selectedDate) newErrors.date = "Please select a date";
                            if (!selectedSlot) newErrors.slot = "Please select a slot";
                            setErrors((prev) => ({ ...prev, ...newErrors }));
                            if (Object.keys(newErrors).length === 0) {
                              setBookingStep("form");
                            }
                          }}
                          className="w-full py-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] shadow-lg"
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {bookingStep === "form" && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <button
                          type="button"
                          onClick={() => setBookingStep("slots")}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#00B4CC] hover:text-[#009BB3] transition"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          Enter Your Details
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Fill your details to confirm the appointment
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#00B4CC]/[0.04] border border-[#00B4CC]/20 px-4 py-3 mb-3">
                        <p className="text-sm font-semibold text-gray-900">
                          Selected Appointment
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {selectedDate?.full || "No date selected"} •{" "}
                          {selectedSlot?.label || "No slot selected"}
                        </p>
                      </div>

                      {errors.api && (
                        <div className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                          <p className="text-sm text-red-600">{errors.api}</p>
                        </div>
                      )}

                      <form onSubmit={handleBookingSubmit} className="flex flex-col h-full">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your name"
                              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                errors.name
                                  ? "border-red-400 focus:border-red-500"
                                  : "border-gray-200 focus:border-[#00B4CC]"
                              }`}
                            />
                            {errors.name && (
                              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                              Contact Number
                            </label>
                            <input
                              type="tel"
                              name="contact"
                              value={formData.contact}
                              onChange={handleInputChange}
                              placeholder="Enter 10-digit contact number"
                              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                errors.contact
                                  ? "border-red-400 focus:border-red-500"
                                  : "border-gray-200 focus:border-[#00B4CC]"
                              }`}
                            />
                            {errors.contact && (
                              <p className="text-xs text-red-500 mt-1">{errors.contact}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                errors.email
                                  ? "border-red-400 focus:border-red-500"
                                  : "border-gray-200 focus:border-[#00B4CC]"
                              }`}
                            />
                            {errors.email && (
                              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto pt-5">
                          <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] shadow-lg disabled:opacity-60"
                          >
                            {submitting ? "Booking..." : "Book Appointment"}
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorCard;