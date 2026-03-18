import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImage from "../../assets/137b5bec4e9b237c081ad32e8d6249e0aca84590.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img src={logoImage} alt="Stepcare" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Evidence-based preventive healthcare centre providing
              compassionate mental health care, therapy sessions, and
              psychiatric support in Whitefield, Bengaluru.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00B4CC] flex items-center justify-center hover:bg-[#009BB3] transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#00B4CC] flex items-center justify-center hover:bg-[#009BB3] transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#00B4CC] flex items-center justify-center hover:bg-[#009BB3] transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00B4CC] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 80 1234 5678</p>
                  <p className="text-gray-400">+91 80 8765 4321</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00B4CC] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">care@stepcare.in</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00B4CC] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00B4CC] flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 leading-relaxed">
                Stepcare Health Centre
                <br />
                Whitefield Main Road
                <br />
                Bengaluru, Karnataka 560066
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-32 bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6666666666665!2d77.74999999999999!3d12.9999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzU5LjkiTiA3N8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stepcare Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Stepcare. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00B4CC] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00B4CC] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00B4CC] transition-colors">
                Disclaimer
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
