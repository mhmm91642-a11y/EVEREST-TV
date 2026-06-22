import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Devices() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="devices" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.devices.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.devices.items.map((device, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-white/15 smooth-transition group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition">
                {device.icon}
              </div>

              {/* Name */}
              <h3 className="font-bold text-white text-sm md:text-base">
                {device.name}
              </h3>

              {/* Hover effect */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full smooth-transition" />
            </div>
          ))}
        </div>

        {/* Compatibility Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-lg text-center">
            <p className="text-3xl mb-2">📱</p>
            <h3 className="font-bold text-white mb-2">
              {language === "ar" ? "الهواتف الذكية" : "Smartphones"}
            </h3>
            <p className="text-foreground/70 text-sm">
              {language === "ar"
                ? "iOS و Android"
                : "iOS & Android"}
            </p>
          </div>

          <div className="glass p-6 rounded-lg text-center">
            <p className="text-3xl mb-2">📺</p>
            <h3 className="font-bold text-white mb-2">
              {language === "ar" ? "التلفاز الذكي" : "Smart TV"}
            </h3>
            <p className="text-foreground/70 text-sm">
              {language === "ar"
                ? "جميع الأنواع الحديثة"
                : "All modern types"}
            </p>
          </div>

          <div className="glass p-6 rounded-lg text-center">
            <p className="text-3xl mb-2">💻</p>
            <h3 className="font-bold text-white mb-2">
              {language === "ar" ? "أجهزة الكمبيوتر" : "Computers"}
            </h3>
            <p className="text-foreground/70 text-sm">
              {language === "ar"
                ? "Windows و Mac"
                : "Windows & Mac"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
