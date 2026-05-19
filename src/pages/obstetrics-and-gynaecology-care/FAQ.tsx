import { motion } from "motion/react";
import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from "../../components/ui/accordion";  // Correct import path


const FAQ = () => {

  const faqs = [
  {
    question: "When should I consult a gynaecologist?",
    answer:
      "If you experience irregular periods, hormonal concerns, fertility issues, or need routine checkups, consulting a gynaecologist is recommended.",
  },
  {
    question: "Do you provide PCOS treatment?",
    answer:
      "Yes. We offer structured PCOS management including medical care and lifestyle guidance.",
  },
  {
    question: "Can I consult for pregnancy planning?",
    answer:
      "Yes. We provide pre-conception counselling and complete pregnancy care support.",
  },
  {
    question: "Are consultations confidential?",
    answer:
      "Yes. All consultations are private and handled with complete confidentiality.",
  },
  {
    question: "Do you offer preventive health checkups?",
    answer:
      "Yes. We provide routine screenings and evaluations to support long-term women's health and early detection of potential concerns.",
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