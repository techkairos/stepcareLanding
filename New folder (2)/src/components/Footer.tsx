import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Globe, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ theme }: { theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`pt-32 pb-12 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-charcoal'}`}>
      {/* Background tech line */}
      <div className={`absolute top-0 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-black/10 to-transparent'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-10">
              <Logo className="h-12" variant={isDark ? "dark" : "light"} />
            </div>
            <p className={`text-sm leading-relaxed mb-10 font-light ${isDark ? 'text-white/40' : 'text-charcoal/60'}`}>
              Evidence based healthcare that works before illness begins. Whitefield’s first UK NHS inspired preventive healthcare centre.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={`w-12 h-12 rounded-2xl border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-10 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Quick Links</h4>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-white/40' : 'text-charcoal/60'}`}>
              {['About Us', 'Our Doctors', 'Health Packages', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-10 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Services</h4>
            <ul className={`space-y-4 text-sm ${isDark ? 'text-white/40' : 'text-charcoal/60'}`}>
              {['General Practitioner', 'Cardiology', 'Orthopaedics', 'Diagnostics', 'Mental Health'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-10 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Contact Us</h4>
            <ul className={`space-y-6 text-sm ${isDark ? 'text-white/40' : 'text-charcoal/60'}`}>
              <li className="flex items-start gap-4 group">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="leading-relaxed">G-01, Ground floor, Brigade IRV Center, Nallurhalli, Whitefield, Bengaluru, 560066</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:info@stepcare.co.in" className="hover:text-primary transition-colors">info@stepcare.co.in</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+919606910113" className="hover:text-primary transition-colors">+91 9606910113</a>
              </li>
            </ul>
          </div>

        </div>

        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
          <div className={`flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-white/20' : 'text-charcoal/30'}`}>
            <p>© {new Date().getFullYear()} StepCare</p>
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <a href="#" className={`hover:text-primary transition-colors ${isDark ? 'hover:text-white' : ''}`}>Privacy</a>
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <a href="#" className={`hover:text-primary transition-colors ${isDark ? 'hover:text-white' : ''}`}>Terms</a>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-white/5 border-white/10 text-white/40' : 'bg-white border-black/5 text-charcoal/40 shadow-sm'}`}>
              <Globe className="w-3 h-3 text-primary" />
              Global Standards
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-white/5 border-white/10 text-white/40' : 'bg-white border-black/5 text-charcoal/40 shadow-sm'}`}>
              <ShieldCheck className="w-3 h-3 text-secondary" />
              NABH Accredited
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
