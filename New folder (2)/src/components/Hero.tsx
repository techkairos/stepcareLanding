import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Calendar, Shield, Activity, User, Sparkles, HeartPulse } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Hero({ onOpenScoreModal, theme }: { onOpenScoreModal: () => void, theme: 'dark' | 'light' }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const [score, setScore] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= 72) {
          clearInterval(interval);
          setScore(72);
        } else {
          setScore(current);
        }
      }, 30);
      return () => clearInterval(interval);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isDark = theme === 'dark';

  return (
    <section ref={containerRef} className={`relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Video Background */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-research-in-a-laboratory-4444-large.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-b from-black/80 via-black/40 to-black/90' : 'bg-gradient-to-b from-white/80 via-white/40 to-white/90'}`} />
        
        {/* Background Image (Translucent) */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <img 
            src="https://storage.googleapis.com/generativeai-downloads/images/input_file_1.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Neko Health Style Scanning Effect */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 blur-sm animate-scan" />
          <div className="absolute top-0 left-0 w-full h-px bg-primary/50 animate-scan" />
        </div>
      </motion.div>

      {/* Interactive Background Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-3xl">
            {/* Lead Magnet Strip */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              onClick={onOpenScoreModal}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 pr-6 mb-10 cursor-pointer group hover:bg-white/10 transition-all"
            >
              <div className="relative">
                <div className="bg-primary text-white text-xs font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(38,175,190,0.5)]">
                  <Activity className="w-3 h-3 animate-pulse" />
                  HEALTH SCORE: {score}
                </div>
                <motion.div 
                  className="absolute -inset-1 bg-primary/30 blur-md rounded-full -z-1"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-white/90 text-sm font-semibold tracking-tight group-hover:text-white transition-colors">
                Find out if your health is at risk. <span className="text-secondary ml-1 font-bold">👉 Get My Health Score</span>
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-6xl lg:text-7xl font-heading font-black leading-[0.95] mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal'}`}
            >
              Prevention First.<br />
              Protection Always.<br />
              <span className="text-gradient-primary">Evidence Based.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl lg:text-2xl mb-12 max-w-xl font-light leading-relaxed ${isDark ? 'text-white/60' : 'text-charcoal/60'}`}
            >
              Evidence Based Healthcare That Works Before Illness Begins.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`glass-panel rounded-full p-1 flex items-center mb-10 max-w-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10 group focus-within:border-primary/30 transition-all ${isDark ? '' : 'bg-white/80 border-black/5'}`}
            >
              <div className={`pl-4 pr-1 transition-colors ${isDark ? 'text-white/20 group-focus-within:text-primary' : 'text-charcoal/20 group-focus-within:text-primary'}`}>
                <Search className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder="Search for doctors, checkups..." 
                className={`w-full bg-transparent border-none focus:ring-0 placeholder-white/20 py-2 outline-none text-sm ${isDark ? 'text-white' : 'text-charcoal'}`}
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/10 active:scale-95 text-xs">
                Search
              </button>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar lg:overflow-visible lg:pb-0 flex-nowrap"
            >
              {[
                { icon: Calendar, label: "Book Appointment" },
                { icon: Shield, label: "360° Health Plan" },
                { icon: Activity, label: "Book a Test" },
                { icon: User, label: "Find a Doctor" }
              ].map((btn, idx) => (
                <motion.button 
                  key={idx}
                  whileHover={{ y: -3, backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
                  className={`flex items-center gap-2 bg-white/5 border text-[10px] font-black uppercase tracking-wider transition-all backdrop-blur-xl group whitespace-nowrap px-3 py-2 rounded-xl ${isDark ? 'border-white/5 text-white' : 'border-black/5 text-charcoal'}`}
                >
                  <btn.icon className="w-3.5 h-3.5 text-primary group-hover:text-secondary transition-colors" />
                  {btn.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Neko Health Inspired Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Circular Tech Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-secondary/10 rounded-full"
              />
              
              {/* Central Visual */}
              <div className="absolute inset-12 rounded-full overflow-hidden glass-panel border-white/20 flex items-center justify-center group">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Activity className="w-32 h-32 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-1"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 blur-sm animate-scan" />
              </div>

              {/* Floating Data Points */}
              {[
                { top: '10%', left: '20%', label: 'BP: 120/80', icon: Activity },
                { top: '20%', right: '10%', label: 'HR: 72 bpm', icon: HeartPulse },
                { bottom: '15%', left: '15%', label: 'SPO2: 98%', icon: Sparkles },
                { bottom: '25%', right: '5%', label: 'BMI: 22.4', icon: User }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  style={{ top: point.top, left: point.left, right: point.right, bottom: point.bottom }}
                  className="absolute glass-panel px-3 py-2 rounded-xl flex items-center gap-2 animate-float"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
