import { motion } from "motion/react";
import { Phone, MessageCircle, Calendar, Play } from "lucide-react";
import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <div className="relative bg-gradient-to-br from-[#00B4CC] via-[#00B4CC] to-[#A4D65E] py-12 lg:py-20 overflow-hidden">
      {/* Background Image/Video Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1722235623141-86bb9b38fca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMHN1cHBvcnQlMjBoZWxwaW5nfGVufDF8fHx8MTc3MjcwMDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Healthcare Team"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1722235623141-86bb9b38fca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMHN1cHBvcnQlMjBoZWxwaW5nfGVufDF8fHx8MTc3MjcwMDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Team Supporting Patients"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-8 h-8 text-[#00B4CC] ml-1" fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-bold">Our Team Is Here to Help</p>
                <p className="text-sm opacity-90">Meet the caring professionals at Stepcare</p>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Team Is Here to Help.
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Take the first step toward better mental wellness today.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-white text-[#00B4CC] hover:bg-gray-100 px-8 py-6 text-lg flex items-center justify-center gap-3 shadow-xl">
                  <Calendar className="w-5 h-5" />
                  Book an Appointment
                </Button>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00B4CC] px-6 py-6 text-base flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Talk to Us
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00B4CC] px-6 py-6 text-base flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat With Us
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="text-white/90 space-y-2">
              <p className="text-lg font-semibold">
                Stepcare – Evidence-Based Preventive Healthcare
              </p>
              <p className="text-base">Whitefield, Bengaluru</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
