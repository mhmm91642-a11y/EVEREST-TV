import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleWhatsApp = () => {
    window.open("https://wa.me/966580928565", "_blank");
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-blue-900/10 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${language === "ar" ? "md:text-right" : "md:text-left"}`}>
            {/* Logo/Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                {t.hero.title}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex gap-4 flex-wrap ${language === "ar" ? "flex-row-reverse" : ""}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg glow smooth-transition"
              >
                {t.hero.subscribeBtn}
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-lg smooth-transition"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.15-1.824 1.823-2.83 4.251-2.83 6.83 0 2.577 1.006 5.007 2.83 6.83 1.825 1.825 4.251 2.83 6.83 2.83 2.577 0 5.007-1.006 6.83-2.83 1.824-1.823 2.83-4.251 2.83-6.83 0-2.577-1.006-5.007-2.83-6.83-1.825-1.824-4.251-2.83-6.83-2.83zm0-2.083c3.003 0 5.909 1.229 8.02 3.34 2.11 2.11 3.34 5.017 3.34 8.02 0 3.003-1.229 5.909-3.34 8.02-2.11 2.11-5.017 3.34-8.02 3.34-3.003 0-5.909-1.229-8.02-3.34-2.11-2.11-3.34-5.017-3.34-8.02 0-3.003 1.229-5.909 3.34-8.02 2.11-2.11 5.017-3.34 8.02-3.34z" />
                </svg>
                {t.hero.whatsappBtn}
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 pt-8 ${language === "ar" ? "text-right" : ""}`}>
              <div className="glass p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">10K+</p>
                <p className="text-sm text-foreground/70">{language === "ar" ? "قنوات" : "Channels"}</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">4K</p>
                <p className="text-sm text-foreground/70">{language === "ar" ? "جودة عالية" : "HD Quality"}</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">24/7</p>
                <p className="text-sm text-foreground/70">{language === "ar" ? "دعم فني" : "Support"}</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Logo display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Everest TV"
                  className="w-full h-full object-contain drop-shadow-2xl animate-float"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Add animation for floating effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
