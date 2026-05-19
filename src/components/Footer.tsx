import { MapPin, Phone } from "lucide-react";
import logoImage from "@/assets/img/137b5bec4e9b237c081ad32e8d6249e0aca84590.png";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src={logoImage}
              alt="Stepcare"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Evidence-based preventive healthcare centre providing compassionate
              mental health care, therapy sessions, and psychiatric support in
              Whitefield, Bengaluru.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00B4CC] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 96069 10113</p>
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
                Ground Floor, Brigade IRV Centre, <br /> Nallurhalli, Whitefield
                – 560066
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Stepcare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;