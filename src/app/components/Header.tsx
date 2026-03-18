import { motion, useScroll } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../../assets/137b5bec4e9b237c081ad32e8d6249e0aca84590.png";
import { useState, useEffect } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-gradient-to-br from-cyan-50/80 via-white/80 to-green-50/80 backdrop-blur-sm"
        }`}
    >
      {/* Main Header */}
      <div className="container mx-auto px-7 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img src={logoImage} alt="Stepcare" className="h-16 lg:h-20" />
          </motion.div>

          {/* Center - Urgent Support Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="hidden lg:flex items-center justify-center gap-2 flex-1"
          >
            <Phone className="w-4 h-4 text-[#A4D65E]" />
            <span className="font-medium text-gray-700">
              Need urgent mental health support? We are here 24x7.
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button className="bg-[#00B4CC] hover:bg-[#009BB3] text-white shadow-lg flex items-center gap-2 px-5 py-6 text-base">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Talk to Us</span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-[#A4D65E] hover:bg-[#8FC04E] text-white shadow-lg flex items-center gap-2 px-5 py-6 text-base">
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Chat with Us</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
