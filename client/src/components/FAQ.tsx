import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.faq.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="glass rounded-lg overflow-hidden smooth-transition hover:bg-white/15"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 smooth-transition"
              >
                <h3 className={`font-bold text-white text-left ${language === "ar" ? "text-right" : ""}`}>
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-blue-400 flex-shrink-0 smooth-transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                  <p className={`text-foreground/80 leading-relaxed ${language === "ar" ? "text-right" : ""}`}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <p className="text-foreground/80 mb-6">
            {language === "ar"
              ? "لم تجد إجابة لسؤالك؟"
              : "Didn't find your answer?"}
          </p>
          <button
            onClick={() => window.open("https://wa.me/966580928565", "_blank")}
            className="inline-block glass px-8 py-4 rounded-lg hover:bg-white/15 smooth-transition"
          >
            <p className="text-blue-400 font-semibold">
              {language === "ar"
                ? "تواصل معنا عبر واتساب"
                : "Contact us via WhatsApp"}
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
