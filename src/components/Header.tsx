import { motion, useScroll } from "motion/react";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@/assets/img/137b5bec4e9b237c081ad32e8d6249e0aca84590.png";

const Header = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-gradient-to-br from-cyan-50/80 via-white/80 to-green-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink min-w-0"
          >
            <img
              src={logoImage}
              alt="Stepcare"
              className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </motion.div>

          {/* Center Content for Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="hidden lg:flex items-center justify-center flex-1"
          >
            {/* Optional center text */}
          </motion.div>

          {/* Phone Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <a
              href="tel:9606910113"
              className="bg-[#00B4CC] text-white shadow-lg flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">
                96069 10113
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;