import { useState, MouseEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Award, Send, User, Phone, Mail, MessageSquare, CircleCheck } from 'lucide-react';

export default function ContactForm({ theme }: { theme: 'dark' | 'light' }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleNext = (e: MouseEvent) => {
    e.preventDefault();
    if (formData.name && formData.mobile) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-primary text-xs font-black uppercase tracking-widest mb-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-primary/5 border-primary/10'}`}>
              <Send className="w-3 h-3" /> Get in touch
            </div>
            <h2 className={`text-5xl lg:text-7xl font-heading font-black leading-[0.9] mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>
              Ready to <span className="text-gradient-primary">Step Up</span> your health?
            </h2>
            <p className={`text-xl font-light leading-relaxed mb-12 max-w-lg ${isDark ? 'text-white/50' : 'text-charcoal/50'}`}>
              Our care coordinators are ready to help you navigate your preventive health journey. Start with a simple conversation.
            </p>

            <div className="space-y-6">
              {[
                { icon: ShieldCheck, text: "Your information is 100% secure.", sub: "GDPR & HIPAA compliant data handling." },
                { icon: Award, text: "NABH accredited centre.", sub: "Highest standards of clinical excellence." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className={`font-bold ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>{item.text}</div>
                    <div className={`text-sm ${isDark ? 'text-white/40' : 'text-charcoal/40'}`}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`glass-panel rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden ${isDark ? 'border-white/10' : 'bg-white border-black/5'}`}>
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between mb-12">
                      <div className={`text-2xl font-heading font-black ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Request a Call</div>
                      <div className="flex gap-1.5">
                        {[1, 2].map(s => (
                          <div key={s} className={`h-1.5 w-8 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {step === 1 ? (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="relative group">
                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 group-focus-within:text-primary transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' : 'bg-gray-50 border-black/5 text-charcoal focus:bg-white'}`}
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="relative group">
                            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 group-focus-within:text-primary transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                            <input 
                              type="tel" 
                              required
                              value={formData.mobile}
                              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                              className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' : 'bg-gray-50 border-black/5 text-charcoal focus:bg-white'}`}
                              placeholder="Mobile Number"
                            />
                          </div>
                          <button 
                            onClick={handleNext}
                            disabled={!formData.name || !formData.mobile}
                            className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95 disabled:opacity-30"
                          >
                            Continue
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="relative group">
                            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 group-focus-within:text-primary transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' : 'bg-gray-50 border-black/5 text-charcoal focus:bg-white'}`}
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="relative group">
                            <MessageSquare className={`absolute left-4 top-5 w-5 h-5 group-focus-within:text-primary transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                            <select 
                              value={formData.interest}
                              onChange={(e) => setFormData({...formData, interest: e.target.value})}
                              className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all appearance-none ${isDark ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' : 'bg-gray-50 border-black/5 text-charcoal focus:bg-white'}`}
                            >
                              <option value="" className={isDark ? "bg-black" : "bg-white"}>I am interested in...</option>
                              <option value="Health Score Assessment" className={isDark ? "bg-black" : "bg-white"}>Health Score Assessment</option>
                              <option value="360° Health Plan" className={isDark ? "bg-black" : "bg-white"}>360° Health Plan</option>
                              <option value="Doctor Consultation" className={isDark ? "bg-black" : "bg-white"}>Doctor Consultation</option>
                              <option value="Diagnostics / Lab Test" className={isDark ? "bg-black" : "bg-white"}>Diagnostics / Lab Test</option>
                            </select>
                          </div>
                          <div className="flex gap-4">
                            <button 
                              type="button"
                              onClick={() => setStep(1)}
                              className={`px-6 py-5 rounded-2xl border font-bold transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-charcoal hover:bg-black/5'}`}
                            >
                              Back
                            </button>
                            <button 
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                              {isSubmitting ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                <>Submit Request <Send className="w-5 h-5" /></>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CircleCheck className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className={`text-3xl font-heading font-black mb-4 ${isDark ? 'text-white' : 'text-charcoal-dark'}`}>Request Received!</h3>
                    <p className={`mb-10 ${isDark ? 'text-white/50' : 'text-charcoal/50'}`}>Our care coordinator will call you within the next 30 minutes.</p>
                    <button 
                      onClick={() => { setIsSuccess(false); setStep(1); setFormData({name: '', mobile: '', email: '', interest: '', message: ''}); }}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
