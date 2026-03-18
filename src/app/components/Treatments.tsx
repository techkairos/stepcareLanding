import { motion } from "motion/react";
import {
  Brain,
  Cloud,
  Activity,
  Repeat,
  AlertCircle,
  Utensils,
  ArrowRight,
  Eye,
  Focus,
  Baby,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(0);

  const treatments = [
    {
      icon: AlertCircle,
      title: "Anxiety Disorders (Including Phobias, GAD, and OCD)",
      description:
        "Persistent worry, fear, or intrusive thoughts can affect daily functioning. We provide structured anxiety support through therapy, psychological consultation, and medication when required.",
      image: "https://images.unsplash.com/photo-1740645581682-bc1e8e37b0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnhpZXR5JTIwZGlzb3JkZXIlMjBzdXBwb3J0JTIwdGhlcmFweXxlbnwxfHx8fDE3NzI3MDA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Cloud,
      title: "Depression",
      description:
        "Ongoing sadness, loss of interest, fatigue, and reduced motivation may indicate depression. Our care includes therapy, medication management when appropriate, and continuous emotional wellness support.",
      image: "https://images.unsplash.com/photo-1590564310808-f93b5f8d662d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXByZXNzaW9uJTIwbWVudGFsJTIwaGVhbHRoJTIwdHJlYXRtZW50fGVufDF8fHx8MTc3MjcwMDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Activity,
      title: "Bipolar Disorder",
      description:
        "Shifts between elevated and low moods require structured long-term care. We offer mood-stabilising treatment, personalised therapy, psychoeducation, and consistent psychiatric monitoring.",
      image: "https://images.unsplash.com/photo-1665646458877-90669ce5ccd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXBvbGFyJTIwZGlzb3JkZXIlMjBwc3ljaGlhdHJpYyUyMGNhcmV8ZW58MXx8fHwxNzcyNzAwOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Repeat,
      title: "Obsessive-Compulsive Disorder (OCD)",
      description:
        "Unwanted thoughts and repetitive behaviours can be distressing and disruptive. Our specialised care combines therapy, counselling, and medication support to reduce obsessions and compulsions effectively.",
      image: "https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5JTIwY29tcGFzc2lvbmF0ZXxlbnwxfHx8fDE3NzI3MDA5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Brain,
      title: "Post-Traumatic Stress Disorder (PTSD)",
      description:
        "Following traumatic experiences, symptoms like anxiety, flashbacks, or emotional distress may develop. We provide trauma-informed counselling, therapy sessions, and medical support to aid recovery.",
      image: "https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwY2FyZXxlbnwxfHx8fDE3NzI3MDA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Utensils,
      title: "Eating Disorders",
      description:
        "Conditions such as anorexia, bulimia, and binge eating require integrated care. Stepcare offers therapy, nutritional guidance, and medical monitoring for safe and structured recovery.",
      image: "https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5JTIwY29tcGFzc2lvbmF0ZXxlbnwxfHx8fDE3NzI3MDA5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Eye,
      title: "Schizophrenia",
      description:
        "Schizophrenia affects thinking, perception, and behaviour. Our comprehensive approach includes antipsychotic medication, psychotherapy, and structured support to improve daily functioning and quality of life.",
      image: "https://images.unsplash.com/photo-1722235623141-86bb9b38fca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMHN1cHBvcnQlMjBoZWxwaW5nfGVufDF8fHx8MTc3MjcwMDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Focus,
      title: "ADHD",
      description:
        "Difficulty with focus, impulse control, and hyperactivity can affect both children and adults. We provide tailored therapy, behavioural strategies, psychoeducation, and medication management when appropriate.",
      image: "https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwY2FyZXxlbnwxfHx8fDE3NzI3MDA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Baby,
      title: "Children's Mental Health & Behavioural Concerns",
      description:
        "Emotional, behavioural, and developmental challenges in children require sensitive, structured care. We offer therapy sessions, psychological consultation, and family-guided counselling to support healthy growth.",
      image: "https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5JTIwY29tcGFzc2lvbmF0ZXxlbnwxfHx8fDE3NzI3MDA5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            Choose the Support You're Looking For
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Through therapy sessions, counselling, and psychiatric care, our
            team supports a wide range of mental health concerns, including:
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
            className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
          >
            <a href="#doctor-card" className="cursor-pointer">
                    Book an Appointment for {treatment.title}  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              {/* Treatment Title */}
              <div className="p-6 bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4CC] to-[#A4D65E] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selected.title}</h3>
                </div>
              </div>

              {/* Treatment Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Treatment Description */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selected.description}
                </p>
                

                <Button
            asChild
            className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
          >
            <a href="#doctor-card" className="cursor-pointer">
              
                Book an Appointment for {selected.title}  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
          </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
