import { motion } from 'motion/react';
import { CircleCheck, Sparkles } from 'lucide-react';

export default function PromoBanner({ theme }: { theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-[2rem] overflow-hidden glass-panel border-white/5 ${isDark ? '' : 'bg-white border-black/5 shadow-2xl'}`}
        >
          {/* Background Pattern */}
          <div className={`absolute inset-0 opacity-5 ${isDark ? '' : 'invert'}`}>
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern-promo" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-promo)" />
            </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles className="w-3.5 h-3.5" /> Advanced Technology
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-3xl lg:text-4xl font-heading font-bold leading-tight mb-8 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
              >
                Virtually painless. Safe for all skin types. <span className="text-gradient-primary">Powered by advanced triple-wavelength technology.</span>
              </motion.h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  "FDA-approved technology",
                  "Suitable for Indian skin tones",
                  "Zero downtime procedure",
                  "Visible results from session 1"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className={`flex items-center gap-3 group ${isDark ? 'text-gray-400' : 'text-charcoal-light'}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <CircleCheck className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(38, 175, 190, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white hover:bg-primary-dark px-10 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center gap-2"
              >
                Get Free Patch Test
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                alt="Laser Treatment" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? 'from-[#050505]/80' : 'from-white/80'}`} />
              
              {/* Interactive Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
