import { motion, AnimatePresence } from "motion/react";
import { Play, Quote, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import doctorVideo from "@/assets/img/dr-shweta-vid.mp4";
import vidimg from "@/assets/img/dr-shweta-vid-img.jpg";

const doctorInfo = {
  name: "Dr. Shweta Premchand Jain",
  designation: "Consultant Paediatrician",
};

const trustMarkerContent = {
  video: {
    image: vidimg,
    smallText: "Video Message from",
    videoSrc: doctorVideo,
    videoTitle: `${doctorInfo.name} Video Message`,
  },

  quote: "Every child deserves the right care, at the right time, in a safe and supportive environment.",

  description: {
    para1:
      "At Stepcare, paediatric consultations are never rushed. We listen to parents. We understand each child’s needs. Then we guide care with clarity and compassion.",
    para2:
      "Our paediatric services follow established clinical guidelines, ensuring ethical, transparent, and personalised care for every child and family.",
  },

  highlights: ["Evidence-Based", "Patient-Centred", "Confidential"],

  stats: [
    { value: "25K+", label: "Patients Supported" },
    { value: "20+", label: "Experienced Doctors" },
    { value: "10K+", label: "Health Checkups Conducted" },
    { value: "5K+", label: "Vaccination Drives" },
  ],
};

const TrustMarker = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  useEffect(() => {
    if (!isVideoOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <>
      <div className="bg-white py-12 lg:py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 w-full"
            >
              <button
                type="button"
                onClick={openVideo}
                className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer w-full aspect-video lg:aspect-[4/3] text-left"
              >
                <img
                  src={trustMarkerContent.video.image}
                  alt={doctorInfo.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Play
                      className="w-7 h-7 sm:w-8 sm:h-8 text-[#00B4CC] ml-1"
                      fill="currentColor"
                    />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <p className="text-sm font-medium">
                    {trustMarkerContent.video.smallText}
                  </p>
                  <h3 className="text-xl font-bold">{doctorInfo.name}</h3>
                  <p className="text-sm opacity-90">{doctorInfo.designation}</p>
                </div>
              </button>
            </motion.div>

            {/* Quote, Description and Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 flex-1 w-full"
            >
               <div className="relative bg-gradient-to-br from-[#00B4CC]/10 to-[#A4D65E]/10 rounded-2xl p-4 border-l-4 border-[#00B4CC] mb-3">
                                                                      <Quote className="w-8 h-8 text-[#00B4CC] opacity-30 absolute top-0 right-2" />
                                                                      <p className="text-1xl lg:text-2xl font-bold text-gray-900 leading-tight relative z-10 mb-2">
                                                                        "{trustMarkerContent.quote}"
                                                                      </p>
                                                       </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  {trustMarkerContent.description.para1}
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  {trustMarkerContent.description.para2}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {trustMarkerContent.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md border border-gray-100"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index % 2 === 0 ? "bg-[#00B4CC]" : "bg-[#A4D65E]"
                      }`}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                {trustMarkerContent.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-3 shadow-md border border-gray-100 cursor-pointer hover:bg-[#00B4CC] hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-800 mt-1 group-hover:text-white font-bold">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 p-3 sm:p-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeVideo}
                className="absolute -top-2 -right-2 sm:top-3 sm:right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[85vh] bg-black" 
                >
                  <source 
                    src={trustMarkerContent.video.videoSrc}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TrustMarker;