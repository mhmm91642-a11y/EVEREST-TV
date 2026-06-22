import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className={language === "ar" ? "md:text-right" : ""}>
            <img src="/logo.jpg" alt="Everest TV" className="h-12 w-auto mb-4" />
            <p className="text-foreground/70 text-sm">
              {language === "ar"
                ? "منصة البث المباشر الفاخرة"
                : "The Premium Streaming Platform"}
            </p>
          </div>

          {/* Quick Links */}
          <div className={language === "ar" ? "md:text-right" : ""}>
            <h4 className="font-bold text-white mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                  {language === "ar" ? "المميزات" : "Features"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                  {language === "ar" ? "الأسعار" : "Pricing"}
                </a>
              </li>
              <li>
                <a href="#devices" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                  {language === "ar" ? "الأجهزة" : "Devices"}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                  {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className={language === "ar" ? "md:text-right" : ""}>
            <h4 className="font-bold text-white mb-4">
              {language === "ar" ? "الدعم" : "Support"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/966580928565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-blue-400 smooth-transition"
                >
                  {language === "ar" ? "تواصل معنا" : "Contact Us"}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                  {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
                </a>
              </li>
              <li>
                <span className="text-foreground/70">
                  {language === "ar" ? "الدعم 24/7" : "24/7 Support"}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className={language === "ar" ? "md:text-right" : ""}>
            <h4 className="font-bold text-white mb-4">
              {language === "ar" ? "تواصل معنا" : "Follow Us"}
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://wa.me/966580928565"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 hover:bg-green-700 rounded-lg smooth-transition"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.15-1.824 1.823-2.83 4.251-2.83 6.83 0 2.577 1.006 5.007 2.83 6.83 1.825 1.825 4.251 2.83 6.83 2.83 2.577 0 5.007-1.006 6.83-2.83 1.824-1.823 2.83-4.251 2.83-6.83 0-2.577-1.006-5.007-2.83-6.83-1.825-1.824-4.251-2.83-6.83-2.83zm0-2.083c3.003 0 5.909 1.229 8.02 3.34 2.11 2.11 3.34 5.017 3.34 8.02 0 3.003-1.229 5.909-3.34 8.02-2.11 2.11-5.017 3.34-8.02 3.34-3.003 0-5.909-1.229-8.02-3.34-2.11-2.11-3.34-5.017-3.34-8.02 0-3.003 1.229-5.909 3.34-8.02 2.11-2.11 5.017-3.34 8.02-3.34z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-foreground/70">
              {language === "ar"
                ? "📞 +966 58 092 8565"
                : "📞 +966 58 092 8565"}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Footer */}
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${language === "ar" ? "md:flex-row-reverse" : ""}`}>
            <p className="text-sm text-foreground/70">
              {t.footer.copyright} - {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </a>
              <a href="#" className="text-foreground/70 hover:text-blue-400 smooth-transition">
                {language === "ar" ? "شروط الخدمة" : "Terms of Service"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
