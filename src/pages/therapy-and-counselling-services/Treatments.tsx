import { motion } from "motion/react";
import {
  Sparkles,
  Users,
  HeartPulse,
  Brain,
  
  Activity,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";

import imgt1 from "@/assets/img/t1.jpg";
import imgt2 from "@/assets/img/t2.jpg";
import imgt3 from "@/assets/img/t3.jpg";
import imgt4 from "@/assets/img/t4.jpg";
import imgt5 from "@/assets/img/t5.jpg";
import imgt6 from "@/assets/img/t6.jpg";

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(0);

 const treatments = [
  {
    icon: Sparkles,
    title: "Individual Counselling",
    description:
      "One-to-one therapy sessions provide a safe and confidential space to explore stress, anxiety, depression, trauma, and emotional concerns through structured psychological guidance.",
    image: imgt1,
  },
  {
    icon: Activity,
    title: "Behavioural Therapy",
    description:
      "Behavioural therapy focuses on identifying and modifying unhelpful thought and behaviour patterns, helping improve coping skills, emotional regulation, and daily functioning.",
    image: imgt2,
  },
  {
    icon: Users,
    title: "Relationship & Family Counselling",
    description:
      "Emotional challenges within relationships can impact wellbeing. We provide counselling for couples and families to improve communication, resolve conflicts, and strengthen connections.",
    image: imgt3,
  },
  {
    icon: Brain,
    title: "Experiential Therapy",
    description:
      "Experiential approaches use guided activities and reflective techniques to process emotions, trauma, and unresolved experiences in a structured and supportive environment.",
    image: imgt4,
  },
  {
    icon: HeartPulse,
    title: "Stress & Anxiety Counselling",
    description:
      "Stress and anxiety can affect everyday life. We help identify triggers, develop coping strategies, and restore emotional balance through practical and structured therapy sessions.",
    image: imgt5,
  },
  {
    icon: Sparkles,
    title: "Mindfulness-Based Therapy",
    description:
      "Mindfulness-based therapy promotes awareness, emotional regulation, and clarity, helping individuals develop calm thinking patterns and improved mental wellbeing.",
    image: imgt6,
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
            Choose the Support You’re Looking For

          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Through therapy sessions, counselling, and psychological support, our team helps address a wide range of emotional and mental health concerns, including:

          </p>
        </motion.div>

        {/* Mobile */}
        <div className="space-y-4 lg:hidden">
          {treatments.map((treatment, index) => {
            const MobileIcon = treatment.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(index)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition ${
                    selectedTreatment === index ? "bg-[#00B4CC]/5" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B4CC] to-[#A4D65E] flex items-center justify-center shrink-0">
                    <MobileIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">
                    {treatment.title}
                  </span>
                </button>

                {selectedTreatment === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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
                        className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300"
                      >
                        <a href="#doctor-card-1" className="cursor-pointer">
                          Book an Appointment
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-5 max-w-8xl mx-auto">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-2xl p-4 shadow-lg sticky top-44">
              <h3 className="font-bold text-gray-900 mb-4 px-2">
                Treatments and Procedures
              </h3>
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

          <motion.div
            key={selectedTreatment}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:flex-1"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selected.description}
                  </p>

                  <Button
                    asChild
                    className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
                  >
                    <a href="#doctor-card-1" className="cursor-pointer">
                      Book an Appointment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

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
};

export default Treatments;