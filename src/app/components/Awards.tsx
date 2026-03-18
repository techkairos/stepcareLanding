import { motion } from "motion/react";
import { Award, Shield, FileCheck, Building, CheckCircle } from "lucide-react";

export function Awards() {
  const achievements = [
    {
      icon: Shield,
      title: "NABH Accredited Facility",
      description: "Nationally recognized healthcare standards",
      image: "https://images.unsplash.com/photo-1674450371215-550d33a2d81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOQUJIJTIwYWNjcmVkaXRhdGlvbiUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcyNjk4NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: FileCheck,
      title: "Evidence-Based Clinical Protocols",
      description: "Following established psychiatric guidelines",
      image: "https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcXVhbGl0eSUyMGNlcnRpZmljYXRpb24lMjBiYWRnZXxlbnwxfHx8fDE3NzI2OTg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: CheckCircle,
      title: "Ethical, Transparent Pricing",
      description: "No hidden costs or surprise fees",
      image: "https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcXVhbGl0eSUyMGNlcnRpZmljYXRpb24lMjBiYWRnZXxlbnwxfHx8fDE3NzI2OTg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Building,
      title: "Multi-Speciality Primary Care Centre",
      description: "Comprehensive healthcare under one roof",
      image: "https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcXVhbGl0eSUyMGNlcnRpZmljYXRpb24lMjBiYWRnZXxlbnwxfHx8fDE3NzI2OTg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Award,
      title: "Quality-Driven Healthcare Environment",
      description: "Committed to excellence in patient care",
      image: "https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcXVhbGl0eSUyMGNlcnRpZmljYXRpb24lMjBiYWRnZXxlbnwxfHx8fDE3NzI2OTg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Awards & Certifications
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to quality healthcare is recognized through national
            accreditations and certifications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#00B4CC]/30 transition-all duration-300 text-center group cursor-pointer"
              >
                {/* Image/Logo Placeholder */}
                <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#00B4CC]/10 to-[#A4D65E]/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-white/30 transition-colors"></div>
                  <Icon className="w-12 h-12 text-[#00B4CC] relative z-10" />
                  {/* Placeholder for actual award image */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
