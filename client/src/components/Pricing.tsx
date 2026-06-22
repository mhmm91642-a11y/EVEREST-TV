import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleWhatsApp = () => {
    window.open("https://wa.me/966580928565", "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.pricing.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            {language === "ar"
              ? "اختر الخطة التي تناسبك واستمتع بأفضل خدمة بث"
              : "Choose the plan that suits you and enjoy the best streaming service"}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`glass rounded-lg overflow-hidden smooth-transition hover:bg-white/15 ${
                index === 1 ? "md:scale-105 ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-6 border-b border-white/10">
                {index === 1 && (
                  <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                    {language === "ar" ? "الأفضل" : "Best Value"}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.duration}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-400">
                    {plan.price}
                  </span>
                  <span className="text-foreground/70">
                    {plan.currency}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 space-y-4">
                {t.pricing.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-foreground/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-white/10">
                <Button
                  onClick={handleWhatsApp}
                  className={`w-full font-bold py-6 smooth-transition ${
                    index === 1
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 glow"
                      : "bg-blue-600/50 hover:bg-blue-600"
                  }`}
                >
                  {t.pricing.subscribeBtn}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="bg-card/50 border border-white/10 rounded-lg p-8 text-center">
          <p className="text-foreground/80 mb-4">
            {language === "ar"
              ? "💳 الدفع آمن وسهل عبر جميع طرق الدفع"
              : "💳 Safe and easy payment through all payment methods"}
          </p>
          <p className="text-sm text-foreground/60">
            {language === "ar"
              ? "يتم التفعيل فوراً بعد الدفع مباشرة"
              : "Activation is instant after payment"}
          </p>
        </div>
      </div>
    </section>
  );
}
