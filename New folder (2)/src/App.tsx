import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import InteractiveHealthScan from './components/InteractiveHealthScan';
import PromoBanner from './components/PromoBanner';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import HealthScoreModal from './components/HealthScoreModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${theme === 'dark' ? 'text-white bg-[#050505]' : 'text-charcoal bg-white'} selection:bg-primary/20 selection:text-primary-light`}>
      <Header 
        onOpenScoreModal={() => setIsModalOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero onOpenScoreModal={() => setIsModalOpen(true)} theme={theme} />
        <Overview theme={theme} />
        <Services theme={theme} />
        <InteractiveHealthScan theme={theme} />
        <PromoBanner theme={theme} />
        <Membership theme={theme} />
        <Testimonials theme={theme} />
        <CTASection onOpenScoreModal={() => setIsModalOpen(true)} theme={theme} />
        <ContactForm theme={theme} />
      </main>
      <Footer theme={theme} />
      
      <HealthScoreModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        theme={theme}
      />
    </div>
  );
}
