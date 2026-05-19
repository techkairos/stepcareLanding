import { motion } from "motion/react";
import { Play, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import vidimg from "@/assets/img/photo-1758273240403-052b3c99f636.jpg";

const doctorInfo = {
  name: "Dr. Arya Prasad",
  designation: "Consultant Family Doctor",
};

const trustMarkerContent = {
  video: {
    image: vidimg,
    smallText: "Video Message from",
    youtubeUrl: "https://www.youtube.com/embed/IpXZSD4d8lM",
    videoTitle: `${doctorInfo.name} Video Message`,
    dialogTitle: `${doctorInfo.name} - ${doctorInfo.designation} Video Message`,
    dialogDescription: `Watch video message from ${doctorInfo.name}, ${doctorInfo.designation} at Stepcare`,
  },

  quote:
    "Giving the best help to our patients is important to us.",

  description: {
    para1:
      "At Stepcare, mental health consultations are never rushed. We listen first. We understand your story. Then we build care around you.",
    para2:
      "Our psychiatric consultations are grounded in established clinical guidelines, ensuring ethical, transparent, and personalised mental health treatment for every individual.",
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
  return (
    <div className="bg-white py-12 lg:py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 w-full"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer w-full aspect-video lg:aspect-[4/3]">
                  <img
                    src={trustMarkerContent.video.image}
                    alt={doctorInfo.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play
                        className="w-8 h-8 text-[#00B4CC] ml-1"
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium">
                      {trustMarkerContent.video.smallText}
                    </p>
                    <h3 className="text-xl font-bold">{doctorInfo.name}</h3>
                    <p className="text-sm opacity-90">
                      {doctorInfo.designation}
                    </p>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="p-0 overflow-hidden">
                <DialogTitle className="sr-only">
                  {trustMarkerContent.video.dialogTitle}
                </DialogTitle>

                <DialogDescription className="sr-only">
                  {trustMarkerContent.video.dialogDescription}
                </DialogDescription>

                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="w-full max-w-5xl max-h-[90vh] aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={trustMarkerContent.video.youtubeUrl}
                      title={trustMarkerContent.video.videoTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Quote, Description and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex-1"
          >
            <div className="relative bg-gradient-to-br from-[#00B4CC]/10 to-[#A4D65E]/10 rounded-2xl p-5 border-l-4 border-[#00B4CC] mb-3">
              <Quote className="w-12 h-12 text-[#00B4CC] opacity-30 absolute top-4 right-4" />
              <p className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight relative z-10 mb-2">
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
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
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
  );
};

export default TrustMarker;