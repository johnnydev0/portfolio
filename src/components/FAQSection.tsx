import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
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
      <span className="section-number">04</span>

      <div ref={ref} className="container mx-auto px-6 relative z-10 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
  
          <h2
            className="text-[8vw] leading-[0.85] mt-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="gradient-heading">{t.faq.title}</span>{" "}
            <span className="gradient-heading">{t.faq.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* FAQ Items – dramatic accordion */}
        <dl className="space-y-0 border-t border-border">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
              className="border-b border-border group"
            >
              <dt>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between px-0 py-6 text-left gap-6"
                >
                  <h3
                    className={`font-black text-base md:text-lg tracking-tight transition-colors duration-200 ${
                      openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.question}
                  </h3>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center border transition-all duration-300 ${
                      openIndex === index
                        ? "border-primary bg-primary text-background"
                        : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-3 h-3" />
                    ) : (
                      <Plus className="w-3 h-3" />
                    )}
                  </span>
                </button>
              </dt>
              <dd
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="pl-0 text-muted-foreground">
                  <p className="text-sm leading-relaxed">{item.answer}</p>
                  {item.list && item.list.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.list.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-primary mt-1 shrink-0 code-font">▸</span>
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
