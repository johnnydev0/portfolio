import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/i18n";

const FAQSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div ref={ref} className="container mx-auto px-6 relative z-10 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="code-font text-sm text-primary mb-4 block">
            {t.faq.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.faq.title} <span className="text-gradient">{t.faq.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <dl className="space-y-4">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className="border border-border rounded-xl bg-card overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              <dt>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>
              <dd
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground">
                  <p className="leading-relaxed">{item.answer}</p>
                  {item.list && item.list.length > 0 && (
                    <ul className="mt-3 space-y-1.5 list-none">
                      {item.list.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
