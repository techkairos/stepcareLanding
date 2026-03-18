import { motion } from 'motion/react';
import { Activity, ArrowRight } from 'lucide-react';

export default function CTASection({ theme, onOpenScoreModal }: { theme: 'dark' | 'light', onOpenScoreModal: () => void }) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background patterns */}
      <div className={`absolute inset-0 opacity-10 pointer-events-none ${isDark ? '' : 'invert'}`}>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`glass-panel rounded-[3rem] p-16 lg:p-24 relative overflow-hidden ${isDark ? 'border-white/10' : 'bg-white border-black/5 shadow-2xl'}`}
        >
          {/* Scanning line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 blur-sm animate-scan" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-5xl lg:text-7xl font-heading font-black leading-[0.9] mb-12 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
          >
            Don’t wait for symptoms.<br />
            <span className="text-gradient-primary">Start protecting</span> your health today.
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(38,175,190,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenScoreModal}
            className="bg-primary text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center gap-4 mx-auto group"
          >
            <Activity className="w-6 h-6 animate-pulse" />
            Get My Health Score
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <div className={`mt-12 flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-white/30' : 'text-charcoal/30'}`}>
            <span>Secure</span>
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
            <span>Private</span>
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
            <span>Accredited</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
