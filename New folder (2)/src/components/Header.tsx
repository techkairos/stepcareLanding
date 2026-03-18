import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Activity, Globe, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

const services = [
  "General Practitioner",
  "Family Medicine",
  "Paediatrician",
  "Dermatologist",
  "Nutritionist",
  "Cardiologist",
  "Mental Health",
  "Therapy And Counselling",
  "Obstetrician And Gynaecologist",
  "Orthopaedic Services",
  "AI-Based Breast Screenings",
  "Medicines & Pharmacy",
  "USG Scan Services"
];

interface HeaderProps {
  onOpenScoreModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Header({ onOpenScoreModal, theme, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-charcoal';
  const navColor = isDark ? 'text-white/80 hover:text-white' : 'text-charcoal/80 hover:text-charcoal';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? isDark
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
            : 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <Logo 
              className="h-12" 
              variant={isScrolled ? 'dark' : 'color'} 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center gap-1.5 font-medium text-sm transition-all group ${navColor}`}>
                Our Care 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] rounded-2xl shadow-2xl overflow-hidden p-6 grid grid-cols-2 gap-x-8 gap-y-2 transition-all duration-300 ${
                      isScrolled 
                        ? isDark 
                          ? 'bg-black/80 backdrop-blur-xl border border-white/20' 
                          : 'bg-white/90 backdrop-blur-xl border border-black/10'
                        : 'glass-panel'
                    } ${isDark ? '' : isScrolled ? '' : 'bg-white border-black/5'}`}
                  >
                    {services.map((service, idx) => (
                      <motion.a 
                        key={idx} 
                        href="#" 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className={`group flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all ${
                          (isScrolled && !isDark) 
                            ? 'text-charcoal/70 hover:text-charcoal hover:bg-black/5' 
                            : isDark 
                              ? 'text-white/70 hover:text-white hover:bg-white/5' 
                              : 'text-charcoal/70 hover:text-charcoal hover:bg-black/5'
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {['About Us', 'Resources'].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`relative font-medium text-sm transition-all group ${navColor}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={onToggleTheme}
              className={`flex items-center gap-2 text-sm font-bold transition-colors uppercase tracking-widest ${navColor}`}
            >
              {isDark ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-primary" />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenScoreModal}
              className="relative group overflow-hidden rounded-full bg-primary text-white px-7 py-3 font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(38,175,190,0.4)] animate-pulse-border"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Know Your Health Score
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 ${isDark ? 'text-white' : 'text-charcoal'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-50 lg:hidden backdrop-blur-2xl p-8 flex flex-col ${isDark ? 'bg-black/95' : 'bg-white/95'}`}
          >
            <div className="flex justify-between items-center mb-12">
              <Logo className="h-10" variant={isDark ? 'dark' : 'color'} />
              <button onClick={() => setIsMobileMenuOpen(false)} className={`p-2 ${isDark ? 'text-white' : 'text-charcoal'}`}><X /></button>
            </div>

            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="text-primary font-bold text-xs uppercase tracking-widest">Our Care</div>
                <div className="grid grid-cols-1 gap-4">
                  {services.slice(0, 6).map((service, idx) => (
                    <a key={idx} href="#" className={`text-2xl font-heading font-bold hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-charcoal'}`}>
                      {service}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className={`h-px w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
              
              <a href="#" className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal'}`}>About Us</a>
              <a href="#" className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-charcoal'}`}>Resources</a>
              
              <button 
                onClick={onToggleTheme}
                className={`flex items-center gap-3 text-xl font-bold transition-colors uppercase tracking-widest ${isDark ? 'text-white' : 'text-charcoal'}`}
              >
                {isDark ? <Sun className="w-6 h-6 text-primary" /> : <Moon className="w-6 h-6 text-primary" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button 
                onClick={() => {
                  onOpenScoreModal();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-8 w-full rounded-full bg-primary text-white px-8 py-5 font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/20"
              >
                <Activity className="w-6 h-6" />
                Know Your Health Score
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
