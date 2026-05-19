import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      condition: "Anxiety & Depression",
      text: "After struggling with anxiety and depression for years, I finally found the right support at Stepcare. The doctors are patient, understanding, and truly care about your progress. The therapy sessions combined with medication have helped me regain control of my life.",
      image: "https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGF0aWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc3MjY5NzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
      name: "Karthik M.",
      condition: "Bipolar Disorder",
      text: "Living with bipolar disorder was challenging until I started treatment at Stepcare. The structured approach, regular monitoring, and continuous support have stabilized my moods significantly. I'm grateful for the consistent care and understanding I receive here.",
      image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZW1wYXRoeXxlbnwxfHx8fDE3NzI2OTcwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
      name: "Divya P.",
      condition: "PTSD",
      text: "After a traumatic experience, I struggled with flashbacks and anxiety. The trauma-informed counselling at Stepcare helped me process my emotions safely. The therapists are incredibly compassionate and knowledgeable. I'm now able to live without constant fear.",
      image: "https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzI2MzM3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories. Real Progress.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our patients share how structured psychiatric care, therapy
            sessions, and ongoing support have helped them regain clarity,
            stability, and confidence in their daily lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-48 overflow-hidden cursor-pointer group">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-7 h-7 text-[#00B4CC] ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <p className="text-xs font-medium opacity-90">Watch Video Testimonial</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <DialogTitle className="sr-only">
                    {testimonial.name} - {testimonial.condition} Testimonial
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Watch video testimonial from {testimonial.name} about their experience with {testimonial.condition} treatment at Stepcare
                  </DialogDescription>
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={testimonial.videoUrl}
                      title={`${testimonial.name} Testimonial`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#00B4CC] font-medium">
                    {testimonial.condition}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
