import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [seconds, setSeconds] = useState(16);

  useEffect(() => {
    const savedData = sessionStorage.getItem("stepcareThankYouData");

    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/obstetrics-and-gynaecology-care");
    }, 16000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [data, navigate]);

  if (!data) return null;

  const handleBookAnother = () => {
    navigate("/obstetrics-and-gynaecology-care");
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#f3f4f4] px-4 py-16 flex items-center justify-center mt-20">
        <div className="w-full max-w-4xl rounded-[18px] bg-white p-6 sm:p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#d9ebe3]">
              <Check className="h-10 w-10 text-[#1f2937]" strokeWidth={3} />
            </div>

            {/* Heading font size reduced */}
            <h1 className="text-[24px] sm:text-[32px] font-bold leading-tight text-[#159570]">
              Appointment Request Submitted!
            </h1>

            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Thank you for booking with <span className="font-bold">Stepcare</span>.
              Our team will contact you shortly to confirm your appointment.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[14px] border border-gray-200">
            {[
              ["Booking ID", data.bookingid || "-"],
              ["Full Name", data.name || "-"],
              ["Phone", data.contact || "-"],
              ["Email", data.email || "-"],
              ["Doctor", data.doctorName || "-"],
              ["Date", data.selectedDate || "-"],
              ["Time", data.selectedSlot || "-"],
            ].map(([label, value], index, arr) => (
              <div
                key={label}
                className={`flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index !== arr.length - 1 ? "border-b border-dashed border-gray-200" : ""
                }`}
              >
                <span className="text-sm text-gray-600">{label}</span>
                <span className="text-sm sm:text-base font-bold text-gray-900 break-all sm:text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBookAnother}
              className="min-w-[220px] rounded-md bg-[#0b8f63] px-5 py-3 text-sm font-bold text-white hover:bg-[#087a55]"
            >
              Book Another Appointment
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Redirecting to Home in <span className="font-semibold">{seconds}</span> seconds...
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ThankYouPage;