import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Activity, Heart, Zap, Brain, ShieldCheck } from 'lucide-react';

interface HealthScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

const questions = [
  {
    id: 1,
    question: "How would you describe your daily activity level?",
    options: [
      { label: "Sedentary", value: 10, icon: "🧘" },
      { label: "Lightly Active", value: 20, icon: "🚶" },
      { label: "Moderately Active", value: 30, icon: "🏃" },
      { label: "Very Active", value: 40, icon: "🏋️" }
    ]
  },
  {
    id: 2,
    question: "How many hours of quality sleep do you get?",
    options: [
      { label: "Less than 5 hours", value: 5, icon: "😫" },
      { label: "5-6 hours", value: 15, icon: "😴" },
      { label: "7-8 hours", value: 30, icon: "✨" },
      { label: "9+ hours", value: 25, icon: "🛌" }
    ]
  },
  {
    id: 3,
    question: "How often do you feel stressed or overwhelmed?",
    options: [
      { label: "Rarely", value: 30, icon: "😊" },
      { label: "Sometimes", value: 20, icon: "😐" },
      { label: "Often", value: 10, icon: "😟" },
      { label: "Always", value: 5, icon: "🤯" }
    ]
  }
];

export default function HealthScoreModal({ isOpen, onClose, theme }: HealthScoreModalProps) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setTimeout(() => {
        setStep(0);
        setScore(0);
        setIsCalculating(false);
        setFinalScore(null);
      }, 500);
    }
  }, [isOpen]);

  const handleOptionSelect = (value: number) => {
    const newScore = score + value;
    setScore(newScore);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateFinalScore(newScore);
    }
  };

  const calculateFinalScore = (total: number) => {
    setIsCalculating(true);
    // Simulate complex calculation
    setTimeout(() => {
      setFinalScore(Math.min(100, total));
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-md ${isDark ? 'bg-black/80' : 'bg-white/80'}`}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-2xl glass-panel rounded-[2.5rem] overflow-hidden shadow-2xl transition-colors duration-500 ${isDark ? 'border-white/10' : 'bg-white border-black/5'}`}
          >
            {/* Header */}
            <div className={`p-6 sm:p-8 flex items-center justify-between border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Health Score Analysis</h3>
                  <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>Powered by StepCare AI</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-black/5 text-charcoal/40 hover:text-charcoal'}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 sm:p-12 min-h-[400px] flex flex-col">
              {finalScore !== null ? (
                // Result View
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center space-y-8 py-4"
                >
                  <div className="relative">
                    <svg className="w-48 h-48 sm:w-56 sm:h-56">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        className={`fill-none ${isDark ? 'stroke-white/5' : 'stroke-black/5'}`}
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        className="stroke-primary fill-none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 1000" }}
                        animate={{ strokeDasharray: `${(finalScore / 100) * 282} 1000` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`text-5xl sm:text-6xl font-heading font-black ${isDark ? 'text-white' : 'text-charcoal-dark'}`}
                      >
                        {finalScore}
                      </motion.span>
                      <span className="text-xs font-bold text-primary-light uppercase tracking-[0.2em]">Score</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                      {finalScore > 80 ? "Excellent Health Profile!" : finalScore > 50 ? "Good Foundation." : "Room for Improvement."}
                    </h4>
                    <p className={`max-w-md ${isDark ? 'text-gray-400' : 'text-charcoal/60'}`}>
                      Your score is based on your activity, sleep, and stress levels. To get a detailed 360° medical report, book a comprehensive screening today.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                      Book Full Screening
                    </button>
                    <button 
                      onClick={onClose}
                      className={`flex-1 py-4 rounded-2xl font-bold transition-all border ${isDark ? 'bg-white/5 text-white hover:bg-white/10 border-white/10' : 'bg-gray-50 text-charcoal hover:bg-black/5 border-black/5'}`}
                    >
                      Close Analysis
                    </button>
                  </div>
                </motion.div>
              ) : isCalculating ? (
                // Loading View
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full"
                    />
                    <Activity className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className={`text-xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Analyzing Your Data</h4>
                    <p className={`animate-pulse ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>Running diagnostic algorithms...</p>
                  </div>
                </div>
              ) : (
                // Question View
                <div className="flex-1 flex flex-col">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
                    <div className="flex gap-1">
                      {questions.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 w-8 rounded-full transition-all duration-500 ${i <= step ? 'bg-primary' : isDark ? 'bg-white/10' : 'bg-black/10'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col"
                  >
                    <h4 className={`text-2xl sm:text-3xl font-heading font-bold mb-10 leading-tight ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
                      {questions[step].question}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {questions[step].options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.02)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleOptionSelect(option.value)}
                          className={`p-6 rounded-2xl border flex items-center gap-4 text-left group transition-all ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-black/5'}`}
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">{option.icon}</span>
                          <div className="flex-1">
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>{option.label}</p>
                            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>Select this option</p>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-colors ${isDark ? 'text-gray-600 group-hover:text-primary' : 'text-charcoal/20 group-hover:text-primary'}`} />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Footer Tech Details */}
            <div className={`p-6 flex items-center justify-center gap-8 border-t ${isDark ? 'bg-white/2 border-white/5' : 'bg-gray-50 border-black/5'}`}>
              <div className={`flex items-center gap-2 text-[10px] uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>
                <ShieldCheck className="w-3 h-3 text-secondary" /> Secure Data
              </div>
              <div className={`flex items-center gap-2 text-[10px] uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>
                <Brain className="w-3 h-3 text-primary" /> AI Diagnostic
              </div>
              <div className={`flex items-center gap-2 text-[10px] uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-charcoal/40'}`}>
                <Zap className="w-3 h-3 text-yellow-500" /> Real-time
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
