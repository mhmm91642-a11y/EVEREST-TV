import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleWhatsApp = () => {
    window.open("https://wa.me/966580928565", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-lg p-12 text-center">
            {/* Icon */}
            <div className="text-6xl mb-6">💬</div>

            {/* Description */}
            <p className="text-lg text-foreground/80 mb-8">
              {t.contact.description}
            </p>

            {/* CTA Button */}
            <Button
              onClick={handleWhatsApp}
              type="button"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-6 text-lg glow smooth-transition cursor-pointer"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.15-1.824 1.823-2.83 4.251-2.83 6.83 0 2.577 1.006 5.007 2.83 6.83 1.825 1.825 4.251 2.83 6.83 2.83 2.577 0 5.007-1.006 6.83-2.83 1.824-1.823 2.83-4.251 2.83-6.83 0-2.577-1.006-5.007-2.83-6.83-1.825-1.824-4.251-2.83-6.83-2.83zm0-2.083c3.003 0 5.909 1.229 8.02 3.34 2.11 2.11 3.34 5.017 3.34 8.02 0 3.003-1.229 5.909-3.34 8.02-2.11 2.11-5.017 3.34-8.02 3.34-3.003 0-5.909-1.229-8.02-3.34-2.11-2.11-3.34-5.017-3.34-8.02 0-3.003 1.229-5.909 3.34-8.02 2.11-2.11 5.017-3.34 8.02-3.34z" />
              </svg>
              {t.contact.whatsappBtn}
            </Button>

            {/* Additional Info */}
            <p className="text-sm text-foreground/60 mt-8">
              {language === "ar"
                ? "سيتم الرد عليك في أسرع وقت ممكن"
                : "We'll respond to you as soon as possible"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
