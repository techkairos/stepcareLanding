import { motion } from "motion/react";
import { CheckCircle, User, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../../components/ui/button";
import heroBg from "@/assets/img/hearo-background.jpg";

const heroContent = {
  heading: "Mental Health Care from Doctors Who Listen, Understand, and Support You",
  subheading:
    "Feeling overwhelmed, anxious, low, or simply not yourself? You don’t have to navigate it alone.",

  description:
    "At Stepcare, Whitefield’s evidence-based preventive healthcare centre, we offer compassionate, structured mental health care led by experienced psychiatrists. From everyday stress and anxiety to depression and complex psychiatric conditions, our approach helps you understand what you’re going through and take the right next step with clarity and confidence.",
     highlight: "Private. Evidence-Based. Patient-Centred.",
  cardTitle: "Ready When You Are",
  cardDescription:
    "Start with a trusted, compassionate team that puts your privacy first.",
  ctaText: "Book an Appointment",
  ctaLink: "#doctor-card",
  features: [
    {
      title: "100% Confidential",
      description: "Your information is always safe with us.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Psychiatrists",
      description: "Care from licensed experts who listen.",
      icon: User,
    },
    {
      title: "Evidence-Based Care",
      description: "Approaches grounded in trusted clinical research.",
      icon: CheckCircle,
    },
  ],
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-30 lg:pt-30">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0 z-10 bg-white/80" />

      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-8 py-8 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {heroContent.heading}
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                {heroContent.subheading}
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                {heroContent.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#00B4CC]" />
                <span className="text-[1.2rem]">{heroContent.highlight}</span>
              </div>
            </motion.div>

            {/* Right - Creative Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative lg:ml-8"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00B4CC]/20 to-[#A4D65E]/20 rounded-[2.5rem] blur-xl opacity-60"></div>

              <div className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl p-4 lg:p-8 border border-white/50">
                <div className="mb-5">
                  <h3 className="text-1xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                    {heroContent.cardTitle}
                  </h3>
                  <p className="text-base text-gray-600">
                    {heroContent.cardDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  {heroContent.features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 p-4 shadow-sm hover:shadow-lg transition-shadow"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4CC] to-[#A4D65E] text-white shadow-md">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h6 className="text-1xl font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-[#00B4CC] to-[#A4D65E]">
                            {feature.title}
                          </h6>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button
                  asChild
                  className="cursor-pointer w-full group bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] hover:from-[#009BB3] hover:to-[#8FC04E] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#00B4CC]/25 transition-all duration-300 mt-5"
                >
                  <a href={heroContent.ctaLink} className="cursor-pointer">
                    {heroContent.ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;