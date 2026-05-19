import { motion } from "motion/react";
import { Stethoscope,
  HeartPulse,
  Activity,
  Baby } from "lucide-react";


import { Button } from "../../components/ui/button";
import { useRef } from "react";

import imgw1 from "@/assets/img/specialist-led-gynaecology-consultation-1.jpg";
import imgw2 from "@/assets/img/womens-wellness-preventive-care-2.jpg";
import imgw3 from "@/assets/img/pcos-fertility-support-3.jpg";
import imgw4 from "@/assets/img/pregnancy-reproductive-care-4.jpg";

const WhyChoose = () => {

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
    icon: Stethoscope,
    title: "Specialist-Led Gynaecology Consultation",
    description:
      "All consultations are conducted by experienced gynaecologists who evaluate reproductive health concerns with accuracy and clinical precision.",
    color: "from-[#00B4CC] to-[#00B4CC]/70",
    images: imgw1,
  },
  {
    icon: HeartPulse,
    title: "Women’s Wellness & Preventive Care",
    description:
      "We focus on early detection through regular checkups, screenings, and hormonal assessments to support long-term health.",
    color: "from-[#A4D65E] to-[#A4D65E]/70",
    images: imgw2,
  },
  {
    icon: Activity,
    title: "PCOS & Fertility Support",
    description:
      "We offer structured care for PCOS and fertility concerns with personalised treatment plans and lifestyle guidance.",
    color: "from-[#00B4CC] to-[#00B4CC]/70",
    images: imgw3,
  },
  {
    icon: Baby,
    title: "Pregnancy & Reproductive Care",
    description:
      "From pre-conception to postnatal support, we provide complete care to ensure a safe and informed motherhood journey.",
    color: "from-[#A4D65E] to-[#A4D65E]/70",
    images: imgw4,
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
          Why Patients Choose Stepcare For Gynaecology Care


          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            When women seek gynaecology care, they look for expertise, comfort, and trust.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At Stepcare, we provide structured women’s healthcare through expert consultation, preventive focus, and personalised support.

          </p>
        </motion.div>

        <div className="relative flex items-center gap-4 group">
          {/* Left Arrow */}
          {/* <button
            onClick={() => scrollSlider('left')}
            className="flex w-10 h-10 bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 flex-shrink-0 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button> */}

          {/* Slider Container */}
          <div ref={sliderRef} className="overflow-x-auto pb-4 pt-4 scrollbar-hide flex-1 px-4">
            <div className="flex  justify-center gap-4 min-w-max">
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
                        src={feature.images}
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
          {/* <button
            onClick={() => scrollSlider('right')}
            className="flex w-10 h-10 bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] rounded-full items-center justify-center shadow-lg hover:shadow-sm transition-all hover:scale-50 flex-shrink-0 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button> */}
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
export default WhyChoose;
