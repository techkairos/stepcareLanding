import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mrs Romine Patricia",
    treatment: "Successful Right Hip Revision with Bone Grafting",
    hospital: "Max Hospital, Gurgaon",
    date: "Nov 12, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Mr. Arun Saroha",
    treatment: "Successfully Overcoming Swallowing Challenges",
    hospital: "Max Hospital, Gurgaon",
    date: "Nov 25, 2025",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Amit Goel",
    treatment: "Successful Robotic Radical Prostatectomy",
    hospital: "Max Hospital, Gurgaon",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Testimonials({ theme }: { theme: 'dark' | 'light' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === 'dark';

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`py-32 overflow-hidden relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none ${isDark ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(157,197,50,0.03),transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(157,197,50,0.05),transparent_70%)]'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-secondary text-xs font-black uppercase tracking-widest mb-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-secondary/5 border-secondary/10'}`}
            >
              <Star className="w-3 h-3" /> Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-4xl lg:text-6xl font-heading font-black leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
            >
              Real Stories. <br />
              <span className={isDark ? 'text-white/30' : 'text-charcoal/30'}>Real Protection.</span>
            </motion.h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all group ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-primary' : 'bg-gray-50 border-black/5 text-charcoal hover:bg-primary hover:text-white'}`}>
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={next} className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all group ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-primary' : 'bg-gray-50 border-black/5 text-charcoal hover:bg-primary hover:text-white'}`}>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`glass-panel rounded-[3rem] overflow-hidden shadow-2xl ${isDark ? 'border-white/10' : 'bg-white border-black/5'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2"
              >
                <div className="p-12 lg:p-20 flex flex-col justify-center relative">
                  <Quote className={`absolute top-10 left-10 w-32 h-32 ${isDark ? 'text-white/5' : 'text-black/5'}`} />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <h3 className={`text-3xl lg:text-4xl font-heading font-black mb-6 leading-tight tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                      "{testimonials[currentIndex].treatment}"
                    </h3>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-px bg-primary" />
                      <p className="text-primary font-black uppercase tracking-widest text-sm">
                        {testimonials[currentIndex].name}
                      </p>
                    </div>
                    <div className={`text-xs font-black uppercase tracking-[0.2em] space-y-1 ${isDark ? 'text-white/30' : 'text-charcoal/30'}`}>
                      <div>Treated at {testimonials[currentIndex].hospital}</div>
                      <div>{testimonials[currentIndex].date}</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-auto overflow-hidden group">
                  <motion.img 
                    key={`img-${currentIndex}`}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-black via-black/20 to-transparent md:bg-gradient-to-l' : 'bg-gradient-to-r from-white via-white/20 to-transparent md:bg-gradient-to-l'}`} />
                  
                  {/* Floating Badge */}
                  <div className={`absolute bottom-10 right-10 glass-panel px-6 py-4 rounded-2xl animate-float ${isDark ? 'border-white/20' : 'bg-white/80 border-black/10'}`}>
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Verified Story</div>
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>StepCare Patient</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
