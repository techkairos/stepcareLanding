import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Languages,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";
import doctorImage from "../../assets/ae74600fa58248304e7446c3f03e69a7a9743d2c.png";

export function DoctorCard() {
  const dateScrollRef = useRef(null);
  const slotScrollRef = useRef(null);

  const expertiseTags = [
    "Anxiety",
    "Depression",
    "Bipolar Disorder",
    "Schizophrenia",
    "Stress Management",
    "Psychosexual Concerns"
  ];

  const dateOptions = [
    { day: "Thu", date: "06", full: "6 March, Thursday" },
    { day: "Fri", date: "07", full: "7 March, Friday" },
    { day: "Sat", date: "08", full: "8 March, Saturday" },
    { day: "Mon", date: "10", full: "10 March, Monday" },
    { day: "Tue", date: "11", full: "11 March, Tuesday" },
    { day: "Wed", date: "12", full: "12 March, Wednesday" },
    { day: "Thu", date: "13", full: "13 March, Thursday" },
    { day: "Fri", date: "14", full: "14 March, Friday" }
  ];

  const slotsByDate = {
    "06": ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM"],
    "07": ["11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "02:30 PM"],
    "08": ["10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM"],
    "10": ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    "11": ["11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM"],
    "12": ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"],
    "13": ["10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM"],
    "14": ["11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]
  };

  const [selectedDate, setSelectedDate] = useState(dateOptions[1]);
  const [selectedSlot, setSelectedSlot] = useState(slotsByDate["07"][0]);

  const [bookingStep, setBookingStep] = useState("slots"); // slots | form | success
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: ""
  });
  const [errors, setErrors] = useState({});

  const scrollDates = (direction) => {
    if (!dateScrollRef.current) return;
    dateScrollRef.current.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth"
    });
  };

  const scrollSlots = (direction) => {
    if (!slotScrollRef.current) return;
    slotScrollRef.current.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth"
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "contact") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setBookingStep("success");
  };

  useEffect(() => {
    let timer;
    if (bookingStep === "success") {
      timer = setTimeout(() => {
        setFormData({
          name: "",
          contact: "",
          email: ""
        });
        setErrors({});
        setBookingStep("form");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [bookingStep]);

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
            {/* Left Image */}
            <div className="w-full lg:w-[400px] p-4 lg:p-5">
              <div className="rounded-[24px] overflow-hidden bg-[#00B4CC]/5 h-[260px] sm:h-[320px] lg:h-[520px]">
                <img
                  src={doctorImage}
                  alt="Dr Kumari Richa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center Details */}
            <div className="flex-1 px-4 pb-3 pt-1 lg:px-2 lg:py-5 flex flex-col">
              <div>
                <div className="mb-3">
                  <h2 className="text-2xl lg:text-[2rem] leading-tight font-bold text-gray-900">
                    Dr Kumari Richa
                  </h2>
                  <p className="mt-1 text-base font-medium text-gray-800">
                    Consultant Psychiatrist
                  </p>
                  <p className="mt-1 text-sm text-gray-600">8+ years experience</p>
                </div>

                <div className="mb-3">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 border border-[#00B4CC]/20 rounded-xl px-4 py-2">
                    <span className="text-2xl font-bold text-gray-900 lg:text-[1.2rem]">
                      ₹ 1250
                    </span>
                    <span className="text-sm text-gray-600">per consultation</span>
                  </div>
                </div>

                <div className="space-y-2 text-gray-700">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      Qualifications
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600">
                      MBBS, Diploma in Psychiatric Medicine
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      Specialisation
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600">
                      Cognitive Behaviour Therapy (CBT), Psychosexual Medicine
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-gray-200" />

                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-3">
                    <Languages className="w-5 h-5 mt-0.5 text-[#00B4CC]" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Speaks</p>
                      <p className="text-sm text-gray-600">English / Hindi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-[#A4D65E]" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Available Time
                      </p>
                      <p className="text-sm text-gray-600">11:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="my-5 h-px bg-gray-200" />

                <div className="mb-5 flex flex-wrap gap-1">
                  {expertiseTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-2 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00B4CC] hover:bg-[#00B4CC]/5 hover:text-[#00B4CC] transition-all duration-300 shadow-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#00B4CC]/25 px-4 py-2 bg-white shadow-sm">
                    <MapPin className="w-4 h-4 text-[#00B4CC]" />
                    <span className="text-sm font-medium text-gray-700">
                      Brigade IRV Center, Whitefield
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Panel */}
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
                              {dateOptions.map((item) => {
                                const active = selectedDate.date === item.date;

                                return (
                                  <button
                                    key={item.date}
                                    type="button"
                                    onClick={() => {
                                      setSelectedDate(item);
                                      setSelectedSlot(slotsByDate[item.date][0]);
                                    }}
                                    className={`min-w-[42px] rounded-xl border px-2 py-2 text-center transition-all ${
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
                                  </button>
                                );
                              })}
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
                              {slotsByDate[selectedDate.date].map((slot) => {
                                const active = selectedSlot === slot;

                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`min-w-[96px] rounded-xl border px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all ${
                                      active
                                        ? "border-[#A4D65E] bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] text-white shadow-md"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-[#00B4CC] hover:bg-[#00B4CC]/5"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
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
                      </div>

                      <div className="rounded-2xl bg-green-50 border border-green-200 px-4 py-3 mb-5">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-[#A4D65E] mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Next booking slot
                            </p>
                            <p className="text-sm text-gray-700">
                              {selectedDate.full} • {selectedSlot}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <Button
                          onClick={() => setBookingStep("form")}
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
                          {selectedDate.full} • {selectedSlot}
                        </p>
                      </div>

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
                            className="w-full py-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] shadow-lg"
                          >
                            Book Appointment
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {bookingStep === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="h-full flex items-center justify-center"
                    >
                      <div className="text-center py-10 px-4">
                        <motion.div
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] shadow-lg"
                        >
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Thank You!
                        </h3>
                        <p className="text-sm text-gray-600 max-w-xs mx-auto">
                          Your appointment request has been submitted successfully.
                        </p>

                        <div className="mt-4 rounded-2xl bg-green-50 border border-green-200 px-4 py-3 inline-block">
                          <p className="text-sm font-semibold text-gray-900">
                            {selectedDate.full} • {selectedSlot}
                          </p>
                        </div>
                      </div>
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
}