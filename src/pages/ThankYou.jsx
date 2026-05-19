import { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = `${import.meta.env.BASE_URL}#doctor-card`;
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00B4CC]/10 via-white to-[#A4D65E]/10 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-2xl rounded-[32px] border border-[#00B4CC]/20 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.10)] p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.55, type: "spring", stiffness: 180 }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] shadow-[0_20px_40px_rgba(0,180,204,0.25)]"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Thank You!
        </motion.h2>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto"
        >
          Your appointment request has been submitted successfully.
          Our team will get in touch with you shortly to confirm your consultation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-6 text-sm text-gray-500"
        >
          Redirecting you back in a few seconds...
        </motion.p>
      </motion.div>
    </section>
  );
}