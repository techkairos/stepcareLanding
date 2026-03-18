import { motion } from 'motion/react';
import { Award, Users, Activity, Syringe, Zap } from 'lucide-react';

const milestones = [
  { icon: Award, value: "NABH", label: "Accredited", color: "text-primary" },
  { icon: Users, value: "25K+", label: "Patients Supported", color: "text-secondary" },
  { icon: Activity, value: "10K+", label: "Health Checkups", color: "text-primary" },
  { icon: Syringe, value: "5K+", label: "Vaccination Drives", color: "text-secondary" }
];

export default function Overview({ theme }: { theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background tech elements */}
      <div className={`absolute top-0 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-primary/20 to-transparent' : 'bg-gradient-to-r from-transparent via-primary/10 to-transparent'}`} />
      <div className={`absolute bottom-0 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-secondary/20 to-transparent' : 'bg-gradient-to-r from-transparent via-secondary/10 to-transparent'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-primary text-xs font-black uppercase tracking-widest mb-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-primary/5 border-primary/10'}`}>
              <Zap className="w-3 h-3" /> Our Mission
            </div>
            <h2 className={`text-4xl lg:text-6xl font-heading font-black leading-[0.9] mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal'}`}>
              Whitefield’s first <span className={isDark ? 'text-white/30' : 'text-charcoal/30'}>UK NHS inspired</span> and NABH accredited centre.
            </h2>
            <p className={`text-xl font-light leading-relaxed mb-10 ${isDark ? 'text-white/50' : 'text-charcoal/50'}`}>
              StepCare brings together prevention, diagnostics, doctor access, and long-term care coordination under one unified platform. Our model is proactive, data-driven, and designed for individuals and families who want control over their health journey.
            </p>
            
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              <span className={`text-sm font-medium uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-charcoal/40'}`}>Live System Monitoring</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-panel rounded-3xl p-8 transition-all group relative overflow-hidden ${isDark ? 'border-white/5 hover:border-primary/30' : 'bg-white border-black/5 shadow-xl shadow-black/5 hover:border-primary/30'}`}
              >
                {/* Scanning line effect on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/40 opacity-0 group-hover:opacity-100 group-hover:animate-scan pointer-events-none" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors ${isDark ? 'bg-white/5' : 'bg-primary/5'}`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div className={`font-heading font-black text-3xl mb-2 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal'}`}>{item.value}</div>
                <div className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-charcoal/40'}`}>{item.label}</div>
                
                {/* Subtle glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
