import { motion } from "motion/react";
import {
  HeartPulse,
  Activity,
  Baby,
  Stethoscope,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";

import imgt1 from "@/assets/img/g1.jpg";
import imgt2 from "@/assets/img/g2.jpg";
import imgt3 from "@/assets/img/g3.jpg";
import imgt4 from "@/assets/img/g4.jpg";

import imgt5 from "@/assets/img/g5.jpg";
import imgt6 from "@/assets/img/g6.jpg";


const Treatments = () => {

  const [selectedTreatment, setSelectedTreatment] = useState(0);

const treatments = [
  {
    icon: ClipboardCheck,
    title: "Women’s Health Checkups",
    description:
      "Regular checkups are essential for early detection and long-term wellbeing. We provide comprehensive evaluations including hormonal screening and reproductive health assessments.",
    image: imgt1, // doctor reviewing reports or health checkup concept
  },

  {
    icon: Activity,
    title: "PCOS Management",
    description:
      "PCOS requires structured and consistent care. Our management plans focus on cycle regulation, hormonal balance, weight guidance, and long-term reproductive health.",
    image: imgt2, // hormone / PCOS health monitoring concept
  },

  {
    icon: HeartPulse,
    title: "PCOS & Fertility Consultation",
    description:
      "Fertility concerns require personalised guidance. We provide targeted consultation to support conception planning and optimise reproductive health outcomes.",
    image: imgt3, // fertility / reproductive consultation concept
  },

  {
    icon: Baby,
    title: "Pregnancy Guidance",
    description:
      "From planning to delivery, we offer expert pregnancy care including prenatal monitoring, medical support, and maternal health guidance for a safe journey.",
    image: imgt4, // pregnancy care / prenatal concept
  },

  {
    icon: Stethoscope,
    title: "Reproductive Health Consultation",
    description:
      "Menstrual irregularities, hormonal imbalances, and other concerns are addressed through detailed evaluation and personalised treatment plans.",
    image: imgt5, // doctor consultation / reproductive health
  },

  {
    icon: ShieldCheck,
    title: "Preventive Gynaecology Services",
    description:
      "Preventive care helps reduce future health risks. We offer regular screenings and evaluations to ensure long-term women’s wellness and early diagnosis.",
    image: imgt6, // preventive screening concept
  },
];

  const selected = treatments[selectedTreatment];
  const Icon = selected.icon;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-8 pb-8">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
           Choose the Care You’re Looking For

          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
        Through gynaecology consultations, preventive screenings, and reproductive health care, our team supports a wide range of women’s health needs, including:

          </p>
        </motion.div>

        {/* Mobile: accordion-style list */}
        <div className="space-y-4 lg:hidden">
          {treatments.map((treatment, index) => {
            const isOpen = selectedTreatment === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTreatment(isOpen ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm">
                    {treatment.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border-t border-gray-100">
                    <div className="relative h-52 overflow-hidden rounded-xl mb-4">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {treatment.description}
                    </p>

                   <Button
                    asChild
                    className="cursor-pointer w-full !h-auto !whitespace-normal group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
                  >
                    <a
                      href="#doctor-card"
                      className="cursor-pointer w-full flex flex-wrap items-center justify-center gap-2 text-center !whitespace-normal break-words leading-snug px-4"
                    >
                      <span className="!whitespace-normal break-words">
                        Book an Appointment
                         {/* <span>for {treatment.title}</span> */}
                      </span>
                      <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                   
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Desktop: sidebar + details */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-5 max-w-8xl mx-auto">
          {/* Left Sidebar - Treatment List */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-2xl p-4 shadow-lg sticky top-44">
              <h3 className="font-bold text-gray-900 mb-4 px-2">Treatments and Procedures</h3>
              <div className="flex flex-col gap-2">
                {treatments.map((treatment, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTreatment(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedTreatment === index
                        ? "bg-[#00B4CC] text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm font-medium">{treatment.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Selected Treatment Details */}
          <motion.div
            key={selectedTreatment}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:flex-1"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Treatment Title - Full Width Top */}
<div className="px-4 py-2 bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 border-b border-gray-200">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4CC] to-[#A4D65E] flex items-center justify-center">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">
      {selected.title}
    </h3>
  </div>
</div>

{/* Content Section - Flex Layout */}
<div className="flex flex-col md:flex-row">

  {/* LEFT SIDE - TEXT */}
  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
    <p className="text-gray-700 leading-relaxed mb-6">
      {selected.description}
    </p>

    <Button
      asChild
      className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
    >
      <a href="#doctor-card" className="cursor-pointer">
        Book an Appointment
         {/* <span> for {selected.title} </span> */}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  </div>

  {/* RIGHT SIDE - IMAGE */}
  <div className="w-full md:w-1/2 relative min-h-[300px]">
    <img
      src={selected.image}
      alt={selected.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
  </div>

</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Treatments;