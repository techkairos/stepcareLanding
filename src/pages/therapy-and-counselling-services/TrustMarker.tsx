import { motion, AnimatePresence } from "motion/react";
import { Play, Quote, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import doctorVideo1 from "@/assets/img/dr-bismirty-vid.mp4";
import doctorVideo2 from "@/assets/img/dr-satadeepa-vid.mp4";

import vidimg1 from "@/assets/img/dr-bismirty-vid-img.jpg";
import vidimg2 from "@/assets/img/dr-satadeepa-vid-img.jpg";

const videos = [
  {
    name: "Ms. Bismirty Bhuyan",
    designation: "Consultant Psychologist",
    image: vidimg1,
    smallText: "Video Message from",
    videoSrc: doctorVideo1,
    videoTitle: "Ms. Bismirty Bhuyan Video Message",
  },
  {
    name: "Satadeepa Som",
    designation: "Senior Psychologist",
    image: vidimg2,
    smallText: "Video Message from",
    videoSrc: doctorVideo2,
    videoTitle: "Satadeepa Som Video Message",
  },
];

const trustMarkerContent = {
  quote:
    "Creating a safe space for healing is the first step toward better mental wellbeing.",

  description: {
    para1:
      "At Stepcare, therapy sessions are never rushed. We listen carefully, understand your experiences, and guide you with empathy and clinical clarity.",
    para2:
      "Our counselling services follow structured, evidence-based approaches, ensuring ethical, confidential, and personalised mental health care.",
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
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const openVideo = (video: (typeof videos)[number]) => {
    setActiveVideo(video);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;

    const cards = sliderRef.current.querySelectorAll(".video-card");
    if (!cards[index]) return;

    (cards[index] as HTMLElement).scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    scrollToCard(newIndex);
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cards = Array.from(
        slider.querySelectorAll(".video-card")
      ) as HTMLElement[];

      if (!cards.length) return;

      const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-white py-12 lg:py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Video Slider Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 w-full"
            >
              <div className="relative">
                {/* Arrows */}
                {videos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white cursor-pointer"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white cursor-pointer"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Scrollable cards */}
                <div
                  ref={sliderRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                >
                  {videos.map((video, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => openVideo(video)}
                      className="video-card relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer text-left flex-shrink-0 w-full min-w-full lg:min-w-[calc(100%-3rem)] aspect-video lg:aspect-[4/3] snap-center"
                    >
                      <img
                        src={video.image}
                        alt={video.name}
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
                        <p className="text-sm font-medium">{video.smallText}</p>
                        <h3 className="text-xl font-bold">{video.name}</h3>
                        <p className="text-sm opacity-90">{video.designation}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Dots */}
                {videos.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => scrollToCard(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-8 bg-[#00B4CC]"
                            : "w-2.5 bg-gray-300"
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
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
                  <source src={activeVideo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-3 text-center text-white">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {activeVideo.name}
                </h3>
                <p className="text-sm sm:text-base text-white/80">
                  {activeVideo.designation}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default TrustMarker;