import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Zap, Tv, Gamepad2, Film, Globe, Smartphone, Wifi, Users } from "lucide-react";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <Zap key="1" className="w-8 h-8 text-blue-400" />,
    <Tv key="2" className="w-8 h-8 text-blue-400" />,
    <Gamepad2 key="3" className="w-8 h-8 text-blue-400" />,
    <Film key="4" className="w-8 h-8 text-blue-400" />,
    <Globe key="5" className="w-8 h-8 text-blue-400" />,
    <Smartphone key="6" className="w-8 h-8 text-blue-400" />,
    <Wifi key="7" className="w-8 h-8 text-blue-400" />,
    <Users key="8" className="w-8 h-8 text-blue-400" />,
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.features.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg hover:bg-white/15 smooth-transition group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 smooth-transition">
                {icons[index % icons.length]}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full smooth-transition" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/80 mb-6">
            {language === "ar"
              ? "جميع هذه المميزات متضمنة في كل خطة اشتراك"
              : "All features included in every subscription plan"}
          </p>
          <div className="inline-block glass px-8 py-4 rounded-lg">
            <p className="text-blue-400 font-semibold">
              {language === "ar" ? "ابدأ الآن مع Everest TV" : "Start with Everest TV Today"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
