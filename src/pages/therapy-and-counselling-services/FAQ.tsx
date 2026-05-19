import { motion } from "motion/react";
import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from "../../components/ui/accordion";  // Correct import path



const FAQ = () => {

  const faqs = [
    {
      question: "When should I consider therapy?",
      answer:
        "If you are experiencing stress, anxiety, emotional distress, or difficulty coping with daily life, therapy can help provide clarity and support.",
    },
    {
      question: "Are therapy sessions confidential?",
      answer:
        "Yes. All counselling sessions are private and follow strict confidentiality guidelines.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies based on your concerns and goals. Some individuals benefit from short-term support, while others may require ongoing therapy.",
    },
    {
      question: "What types of therapy do you offer?",
      answer:
        "We offer CBT, mindfulness-based therapy, behavioural therapy, and integrative approaches tailored to your needs.",
    },
    {
      question: "Can therapy help with stress and anxiety?",
      answer:
        "Yes. Therapy provides structured techniques and coping strategies to manage stress and anxiety effectively.",
    },
  ];

  return (
    <div className="bg-white py-8 lg:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about mental health care at
            Stepcare.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl px-6 overflow-hidden hover:border-[#00B4CC] transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <span className="font-semibold text-gray-900 pr-4 text-sm">
                      {faq.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

