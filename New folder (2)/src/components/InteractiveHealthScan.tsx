import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Shield, Zap, Heart, Search, Cpu } from 'lucide-react';

const hotspots = [
  { id: 1, x: '50%', y: '15%', label: 'Brain Health', detail: 'Cognitive function & stress levels', icon: Cpu, color: '#26AFBE' },
  { id: 2, x: '50%', y: '35%', label: 'Cardiovascular', detail: 'Heart rate & blood pressure', icon: Heart, color: '#FF4D4D' },
  { id: 3, x: '45%', y: '55%', label: 'Metabolism', detail: 'Glucose & insulin sensitivity', icon: Activity, color: '#9DC532' },
  { id: 4, x: '55%', y: '75%', label: 'Immunity', detail: 'Inflammation & immune response', icon: Shield, color: '#F27D26' },
];

export default function InteractiveHealthScan({ theme }: { theme: 'dark' | 'light' }) {
  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const isDark = theme === 'dark';

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
      {/* Background Tech Grid */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? '' : 'invert'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3.5 h-3.5" /> Interactive Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl lg:text-5xl font-heading font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
          >
            Experience the <span className="text-gradient-primary">Future of Health</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-charcoal-light'}`}
          >
            Our advanced scanning technology analyzes thousands of data points to create your unique health profile.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Scanner */}
          <div className={`relative aspect-[3/4] max-w-md mx-auto w-full glass-panel rounded-[3rem] p-8 border-white/5 overflow-hidden group ${isDark ? '' : 'bg-white border-black/5 shadow-2xl'}`}>
            {/* Silhouette Placeholder */}
            <div className={`absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity ${isDark ? '' : 'opacity-10'}`}>
              <svg viewBox="0 0 200 500" className="h-full w-auto text-primary">
                <path 
                  fill="currentColor" 
                  d="M100,50 C120,50 135,65 135,85 C135,105 120,120 100,120 C80,120 65,105 65,85 C65,65 80,50 100,50 M100,130 C130,130 160,150 160,190 L160,300 C160,310 150,320 140,320 L130,320 L130,450 C130,465 115,480 100,480 C85,480 70,465 70,450 L70,320 L60,320 C50,320 40,310 40,300 L40,190 C40,150 70,130 100,130" 
                />
              </svg>
            </div>

            {/* Scanning Line */}
            <AnimatePresence>
              {isScanning && (
                <motion.div 
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-20 shadow-[0_0_20px_rgba(38,175,190,0.8)]"
                />
              )}
            </AnimatePresence>

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <motion.button
                key={spot.id}
                style={{ left: spot.x, top: spot.y }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveHotspot(spot)}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-30"
              >
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
                <div 
                  className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-colors ${isDark ? 'border-white/50' : 'border-black/20'}`}
                  style={{ backgroundColor: activeHotspot?.id === spot.id ? spot.color : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </motion.button>
            ))}

            {/* Scan Button Overlay */}
            {!isScanning && (
              <div className={`absolute inset-0 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startScan}
                  className="px-8 py-3 rounded-full bg-primary text-white font-bold flex items-center gap-2 shadow-2xl"
                >
                  <Search className="w-5 h-5" /> Start Health Scan
                </motion.button>
              </div>
            )}
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {activeHotspot ? (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`glass-panel rounded-3xl p-8 border-white/10 relative overflow-hidden ${isDark ? '' : 'bg-white border-black/5 shadow-xl'}`}
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20"
                    style={{ backgroundColor: activeHotspot.color }}
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${activeHotspot.color}20` }}
                    >
                      <activeHotspot.icon className="w-7 h-7" style={{ color: activeHotspot.color }} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>{activeHotspot.label}</h3>
                      <p className="text-primary-light text-sm font-medium">Metric Analysis Active</p>
                    </div>
                  </div>
                  <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-charcoal-light'}`}>
                    {activeHotspot.detail}. Our sensors detect subtle variations in {activeHotspot.label.toLowerCase()} to identify potential risks before they become problems.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-black/5'}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Accuracy</p>
                      <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>99.8%</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-black/5'}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Data Points</p>
                      <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>2.4k+</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`glass-panel rounded-3xl p-12 border-dashed flex flex-col items-center text-center justify-center min-h-[300px] ${isDark ? 'border-white/10' : 'border-black/10 bg-white shadow-sm'}`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <Activity className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className={`text-xl font-heading font-bold mb-2 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Select a Hotspot</h3>
                  <p className="text-gray-500">Click on the markers to explore how we analyze different aspects of your health.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <h4 className={`font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                <Shield className="w-5 h-5 text-secondary" /> Why it matters
              </h4>
              <p className={isDark ? 'text-gray-400' : 'text-charcoal-light'}>
                Early detection is the key to longevity. By gamifying your health data, we make it easier to stay on top of your well-being.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-primary font-bold flex items-center gap-2 group"
              >
                Learn about our technology 
                <Zap className="w-4 h-4 group-hover:fill-primary transition-all" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
