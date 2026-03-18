import { motion } from "motion/react";
import { Heart, UserCheck, Calendar, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

export function WhyChoose() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll the slider left or right
  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = 350; // Amount to scroll on each click

    // Scroll left
    if (direction === 'left') {
      console.log("Scroll Left"); // Debugging line
      if (container.scrollLeft > 0) {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
    // Scroll right
    else {
      const maxScroll = container.scrollWidth - container.clientWidth;
      console.log("Scroll Right", container.scrollLeft, maxScroll); // Debugging line
      if (container.scrollLeft < maxScroll) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const features = [
    {
      icon: Heart,
      title: "Doctors Who Listen and Understand",
      description:
        "All consultations are led by qualified psychiatrists who take the time to understand your thoughts, emotions, and experiences. We prioritise careful evaluation — not rushed conclusions.",
      color: "from-[#00B4CC] to-[#00B4CC]/70",
      images: ["src/assets/w1.jpg"]
    },
    {
      icon: UserCheck,
      title: "Care Tailored to Your Emotional Needs",
      description:
        "Whether you're dealing with stress, anxiety, depression, or mood changes, your treatment plan is personalised to your symptoms, lifestyle, and recovery goals.",
      color: "from-[#A4D65E] to-[#A4D65E]/70",
      images: [
        "src/assets/w2.jpg",
      ],
    },
    {
      icon: Calendar,
      title: "Ongoing Support, Not One-Time Visits",
      description:
        "Mental health care is a journey. We ensure continuity through regular follow-ups, therapy sessions, counselling, and thoughtful adjustments as your needs evolve.",
      color: "from-[#00B4CC] to-[#00B4CC]/70",
      images: [
        "src/assets/w3.jpg",
      ],
    },
    {
      icon: Shield,
      title: "Safe, Evidence-Based Mental Health Treatment",
      description:
        "Our care follows established psychiatric guidelines, combining therapy, medication (when appropriate), and emotional wellness counselling — so you can feel confident in your treatment decisions.",
      color: "from-[#A4D65E] to-[#A4D65E]/70",
      images: [
        "src/assets/w4.jpg",
      ],
    },
    {
      icon: Heart,
      title: "Doctors Who Listen and Understand",
      description:
        "All consultations are led by qualified psychiatrists who take the time to understand your thoughts, emotions, and experiences. We prioritise careful evaluation — not rushed conclusions.",
      color: "from-[#00B4CC] to-[#00B4CC]/70",
      images: ["src/assets/w1.jpg"]
    },
    {
      icon: UserCheck,
      title: "Care Tailored to Your Emotional Needs",
      description:
        "Whether you're dealing with stress, anxiety, depression, or mood changes, your treatment plan is personalised to your symptoms, lifestyle, and recovery goals.",
      color: "from-[#A4D65E] to-[#A4D65E]/70",
      images: [
        "src/assets/w2.jpg",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-8 pb-8">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Patients Choose Stepcare for Mental Health Care
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            When people seek mental health support, they want to feel safe,
            heard, and understood.
          </p>
        </motion.div>

        <div className="relative flex items-center gap-4 group">
          {/* Left Arrow */}
          <button
            onClick={() => scrollSlider('left')}
            className="flex w-10 h-10 bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 flex-shrink-0 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Slider Container */}
          <div ref={sliderRef} className="overflow-x-auto pb-4 pt-4 scrollbar-hide flex-1 px-4">
            <div className="flex items-center justify-start gap-4 min-w-max">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const strokeColor = feature.color.includes('#00B4CC') ? '#00B4CC' : '#A4D65E';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border-2 border-gray-100 hover:shadow-1xl transition-all duration-100 cursor-pointer group w-80 flex-shrink-0"
                    style={{
                      '--hover-stroke': strokeColor
                    } as React.CSSProperties}
                  >
                    {/* Image Carousel */}
                    <div className="relative mb-4 rounded-xl overflow-hidden h-48 group">
                      <img
                        src={feature.images[0]}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollSlider('right')}
            className="flex w-10 h-10 bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] rounded-full items-center justify-center shadow-lg hover:shadow-sm transition-all hover:scale-50 flex-shrink-0 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white px-8 py-6 text-lg"
          >
            <a href="#doctor-card" className="cursor-pointer">Book an Appointment</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}