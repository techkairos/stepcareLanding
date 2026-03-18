import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const benefits = [
  "Unlimited Doctor Visits",
  "Scheduled Health Checkups",
  "Lab Tests & Diagnostics",
  "Free Medicine Delivery",
  "Mental Health Counselling",
  "Physical Fitness Plans",
  "Healthcare Mobile App",
  "Child & Elder Care Packages",
  "Dedicated Care Coordinator"
];

export default function Membership({ theme }: { theme: 'dark' | 'light' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const target = 39000;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`} ref={ref}>
      {/* Background tech patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${isDark ? '' : 'invert'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`glass-panel rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] ${isDark ? 'border-white/10' : 'bg-white border-black/5 shadow-2xl'}`}>
          <div className="grid lg:grid-cols-5">
            
            {/* Left Content */}
            <div className={`lg:col-span-2 p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center border-r ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'}`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-10"
              >
                <ShieldCheck className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h2 className={`text-5xl lg:text-7xl font-heading font-black leading-[0.9] mb-10 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                All Year <br />
                <span className="text-gradient-primary">Protection.</span><br />
                Savings.
              </h2>
              
              <div className="mt-auto">
                <p className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${isDark ? 'text-white/30' : 'text-charcoal/30'}`}>Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-6xl font-black font-heading tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>₹{count.toLocaleString('en-IN')}</span>
                  <span className={`font-bold ${isDark ? 'text-white/30' : 'text-charcoal/30'}`}>/year</span>
                </div>
              </div>
            </div>

            {/* Right Content - Benefits */}
            <div className={`lg:col-span-3 p-12 lg:p-20 ${isDark ? 'bg-black/40' : 'bg-white'}`}>
              <div className="flex items-center gap-3 mb-12">
                <Zap className="w-5 h-5 text-secondary" />
                <h3 className={`text-xl font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Included Benefits</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-16">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + (idx * 0.05) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 group-hover:border-secondary/50 transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/10'}`}>
                      <Check className="w-3.5 h-3.5 text-secondary stroke-[3]" />
                    </div>
                    <span className={`font-medium text-sm group-hover:text-primary transition-colors ${isDark ? 'text-white/60 group-hover:text-white' : 'text-charcoal-light'}`}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
