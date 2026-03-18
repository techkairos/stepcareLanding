import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function GoogleReviews() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Dr. Richa has been incredibly supportive throughout my treatment. The consultations are detailed and never rushed. I finally feel heard and understood.",
      date: "2 weeks ago",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "The team at Stepcare helped me through a difficult phase of anxiety and depression. The evidence-based approach gave me confidence in my treatment plan.",
      date: "1 month ago",
    },
    {
      name: "Anita Desai",
      rating: 5,
      text: "Excellent care for my son who was struggling with ADHD. The doctors took time to understand his needs and provided a comprehensive treatment plan.",
      date: "3 weeks ago",
    },
    {
      name: "Vikram Patel",
      rating: 5,
      text: "Professional, empathetic, and effective. The follow-up care and continuous support have been invaluable for my recovery journey.",
      date: "1 week ago",
    },
    {
      name: "Meera Reddy",
      rating: 5,
      text: "I was hesitant about seeking help, but the compassionate approach at Stepcare made me feel comfortable. Highly recommend their services.",
      date: "2 months ago",
    },
    {
      name: "Arjun Singh",
      rating: 5,
      text: "The psychiatric care here is world-class. They combine medication and therapy perfectly, and I've seen significant improvements in my mental health.",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-8 lg:py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Families Across Whitefield
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stepcare has supported over 25,000+ patients through structured,
            ethical mental health care.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-2">
            Our patients value our compassionate consultations, clear treatment
            plans, and continuity of care.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div
          className="relative mb-12 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-visible" ref={scrollRef}>
            <motion.div
              className="flex gap-6 pl-4"
              animate={{
                x: isPaused ? 0 : [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#00B4CC] opacity-20 mb-2" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <div className="text-xs text-gray-400">Google Review</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Google Badge - Larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-10 py-6 shadow-xl border-2 border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-gray-900">4.9</span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-xl font-bold text-gray-900">Google</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Based on 500+ reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
