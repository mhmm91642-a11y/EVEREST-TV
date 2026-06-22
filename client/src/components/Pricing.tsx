import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { openWhatsAppWithPlan } from "@/lib/whatsapp";
import { Check } from "lucide-react";

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleWhatsAppWithPlan = (planName: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    openWhatsAppWithPlan(planName, language as "ar" | "en");
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
                  onClick={(e) => handleWhatsAppWithPlan(plan.duration, e)}
                  type="button"
                  className={`w-full font-bold py-6 smooth-transition cursor-pointer active:scale-95 transition-transform ${
                    index === 1
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 glow text-white"
                      : "bg-blue-600/50 hover:bg-blue-600 text-white"
                  }`}
                >
                  <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.15-1.824 1.823-2.83 4.251-2.83 6.83 0 2.577 1.006 5.007 2.83 6.83 1.825 1.825 4.251 2.83 6.83 2.83 2.577 0 5.007-1.006 6.83-2.83 1.824-1.823 2.83-4.251 2.83-6.83 0-2.577-1.006-5.007-2.83-6.83-1.825-1.824-4.251-2.83-6.83-2.83zm0-2.083c3.003 0 5.909 1.229 8.02 3.34 2.11 2.11 3.34 5.017 3.34 8.02 0 3.003-1.229 5.909-3.34 8.02-2.11 2.11-5.017 3.34-8.02 3.34-3.003 0-5.909-1.229-8.02-3.34-2.11-2.11-3.34-5.017-3.34-8.02 0-3.003 1.229-5.909 3.34-8.02 2.11-2.11 5.017-3.34 8.02-3.34z" />
                  </svg>
                  {language === "ar" ? "اشترك عبر واتساب" : "Subscribe via WhatsApp"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
