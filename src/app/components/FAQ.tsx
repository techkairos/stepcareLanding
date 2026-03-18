import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "When should I see a psychiatrist?",
      answer:
        "If you are experiencing persistent sadness, anxiety, mood changes, sleep disturbances, intrusive thoughts, or emotional distress affecting your daily life, it may be helpful to consult a psychiatrist.",
    },
    {
      question: "Do I need medication for mental health treatment?",
      answer:
        "Not always. Treatment may involve therapy alone, medication, or a combination — depending on your diagnosis and preferences.",
    },
    {
      question: "Are consultations confidential?",
      answer:
        "Yes. All mental health consultations at Stepcare are private and confidential.",
    },
    {
      question: "How long does treatment take?",
      answer:
        "Mental health care is personalised. Some concerns improve within weeks, while others require longer-term support and follow-ups.",
    },
    {
      question: "Do you offer care for children and adolescents?",
      answer:
        "Yes. We provide specialised support for children's emotional, behavioural, and developmental concerns.",
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
}
