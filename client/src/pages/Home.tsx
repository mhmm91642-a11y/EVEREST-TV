import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Devices from "@/components/Devices";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Everest TV - Premium IPTV Streaming Platform
 * 
 * Design Philosophy:
 * - Luxury and modern streaming platform
 * - Dark theme with black, navy blue and glowing blue accents
 * - Premium animations and smooth scrolling effects
 * - Glassmorphism cards and modern UI
 * - Fully responsive for mobile, tablet and desktop
 * - Bilingual support (Arabic and English)
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header with navigation and language switcher */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section with main CTA */}
        <Hero />

        {/* Features showcase */}
        <Features />

        {/* Pricing plans */}
        <Pricing />

        {/* Supported devices */}
        <Devices />

        {/* FAQ section */}
        <FAQ />

        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
