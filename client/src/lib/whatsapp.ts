/**
 * WhatsApp Integration Utility
 * Handles opening WhatsApp links reliably across all devices and browsers
 */

export const WHATSAPP_NUMBER = "966580928565";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Opens WhatsApp with the configured number
 * Tries multiple methods to ensure it works across all devices
 */
export const openWhatsApp = () => {
  // Method 1: Direct wa.me link (works on most devices)
  const waLink = WHATSAPP_URL;

  // Try to open in new tab/window
  try {
    // First, try the standard window.open
    const newWindow = window.open(waLink, "_blank");

    // If popup is blocked, try alternative methods
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // Method 2: Create a link and click it
      const link = document.createElement("a");
      link.href = waLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Error opening WhatsApp:", error);
    // Fallback: Try creating and clicking a link
    try {
      const link = document.createElement("a");
      link.href = waLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (fallbackError) {
      console.error("Fallback WhatsApp opening failed:", fallbackError);
    }
  }
};

/**
 * Opens WhatsApp with a pre-filled message
 */
export const openWhatsAppWithMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  try {
    const newWindow = window.open(waLink, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      const link = document.createElement("a");
      link.href = waLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Error opening WhatsApp with message:", error);
  }
};

/**
 * Opens WhatsApp with a subscription plan message
 */
export const openWhatsAppWithPlan = (planName: string, language: "ar" | "en" = "ar") => {
  const greetingAr = `السلام عليكم ورحمة الله وبركاته 👋\n\nأود الاشتراك في باقة ${planName}\n\nالرجاء تفعيل الاشتراك في أقرب وقت ممكن.`;
  const greetingEn = `Hello! 👋\n\nI would like to subscribe to the ${planName} plan.\n\nPlease activate my subscription as soon as possible.`;
  
  const message = language === "ar" ? greetingAr : greetingEn;
  openWhatsAppWithMessage(message);
};
