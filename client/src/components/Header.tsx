import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const handleWhatsApp = () => {
    window.open("https://wa.me/966580928565", "_blank");
  };

  const handleLanguageChange = (lang: "ar" | "en") => {
    setLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Everest TV" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary smooth-transition cursor-pointer">
            {language === "ar" ? "المميزات" : "Features"}
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary smooth-transition cursor-pointer">
            {language === "ar" ? "الأسعار" : "Pricing"}
          </a>
          <a href="#devices" className="text-foreground hover:text-primary smooth-transition cursor-pointer">
            {language === "ar" ? "الأجهزة" : "Devices"}
          </a>
          <a href="#faq" className="text-foreground hover:text-primary smooth-transition cursor-pointer">
            {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          </a>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2">
            <button
              onClick={() => handleLanguageChange("ar")}
              type="button"
              className={`px-3 py-1 rounded-md smooth-transition cursor-pointer ${
                language === "ar"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              type="button"
              className={`px-3 py-1 rounded-md smooth-transition cursor-pointer ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              English
            </button>
          </div>

          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsApp}
            type="button"
            variant="default"
            className="hidden md:flex gap-2 bg-green-600 hover:bg-green-700 text-white cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.15-1.824 1.823-2.83 4.251-2.83 6.83 0 2.577 1.006 5.007 2.83 6.83 1.825 1.825 4.251 2.83 6.83 2.83 2.577 0 5.007-1.006 6.83-2.83 1.824-1.823 2.83-4.251 2.83-6.83 0-2.577-1.006-5.007-2.83-6.83-1.825-1.824-4.251-2.83-6.83-2.83zm0-2.083c3.003 0 5.909 1.229 8.02 3.34 2.11 2.11 3.34 5.017 3.34 8.02 0 3.003-1.229 5.909-3.34 8.02-2.11 2.11-5.017 3.34-8.02 3.34-3.003 0-5.909-1.229-8.02-3.34-2.11-2.11-3.34-5.017-3.34-8.02 0-3.003 1.229-5.909 3.34-8.02 2.11-2.11 5.017-3.34 8.02-3.34z" />
            </svg>
            {t.header.whatsapp}
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden text-foreground hover:text-primary cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              {language === "ar" ? "المميزات" : "Features"}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              {language === "ar" ? "الأسعار" : "Pricing"}
            </a>
            <a
              href="#devices"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              {language === "ar" ? "الأجهزة" : "Devices"}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </a>
            <Button
              onClick={() => {
                handleWhatsApp();
                setMobileMenuOpen(false);
              }}
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            >
              {t.header.whatsapp}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
