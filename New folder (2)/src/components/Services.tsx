import { motion } from 'motion/react';
import { Bone, HeartPulse, Microscope, Brain, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bone,
    title: "Orthopaedics",
    desc: "Advanced treatment for joint, spine, and musculoskeletal conditions with integrated rehab support.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: HeartPulse,
    title: "Cardiac Sciences",
    desc: "Preventive heart screening, diagnostics, and expert cardiac care for early detection and long-term protection.",
    color: "from-red-500 to-rose-400"
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab Tests",
    desc: "Scheduled health checkups, preventive screenings, and complete lab diagnostics with doorstep convenience.",
    color: "from-primary to-primary-dark"
  },
  {
    icon: Brain,
    title: "Mental & Lifestyle Health",
    desc: "Fitness planning, stress management, and preventive wellness programs tailored to your goals.",
    color: "from-secondary to-secondary-dark"
  }
];

export default function Services({ theme }: { theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl lg:text-4xl font-heading font-bold mb-4 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
          >
            Comprehensive Care, All in One Place
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border overflow-hidden flex flex-col h-full ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className={`text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                {service.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-8 flex-grow ${isDark ? 'text-white/50' : 'text-charcoal-light'}`}>
                {service.desc}
              </p>
              
              <div className={`flex items-center justify-between mt-auto pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                <button className={`text-sm font-medium transition-colors ${isDark ? 'text-white/70 hover:text-primary' : 'text-charcoal hover:text-primary'}`}>
                  Book Consultation
                </button>
                <button className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors ${isDark ? 'bg-white/10 text-white' : 'bg-gray-50 text-charcoal'}`}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
