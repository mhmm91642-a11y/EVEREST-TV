# Everest TV - Premium IPTV Streaming Platform

A luxury, modern IPTV streaming platform website built with React, TypeScript, and TailwindCSS. Features a dark theme with glassmorphism design, bilingual support (Arabic/English), and fully responsive layout.

## 🌟 Features

- **Bilingual Support**: Full Arabic and English translations with language switcher
- **Dark Theme**: Premium dark interface with blue accents inspired by the Everest TV brand
- **Glassmorphism Design**: Modern frosted glass effect cards and components
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Premium animations and transitions throughout
- **10,000+ Channels**: Showcase of streaming capabilities
- **Multiple Quality Options**: HD, FHD, 4K, and HDR support
- **Device Support**: Compatible with Smart TV, Android, iOS, Windows, and Mac
- **Pricing Plans**: Three subscription tiers (3, 6, and 12 months)
- **FAQ Section**: Comprehensive frequently asked questions
- **WhatsApp Integration**: Direct contact via WhatsApp button

## 🎨 Design Highlights

- **Color Scheme**: Dark navy/black background with glowing blue accents (#0066FF)
- **Typography**: Modern, clean typography with proper hierarchy
- **Icons**: Professional icons from Lucide React
- **Spacing**: Consistent padding and margins for visual balance
- **Hover Effects**: Interactive hover states on all clickable elements

## 📱 Sections

1. **Header**: Fixed navigation with logo, menu, language switcher, and WhatsApp button
2. **Hero Section**: Large title with subtitle, CTA buttons, and statistics
3. **Features**: 12 key features displayed in a grid with icons
4. **Pricing**: Three subscription plans with features list
5. **Devices**: Supported devices showcase
6. **FAQ**: Expandable frequently asked questions
7. **Contact**: Call-to-action section with WhatsApp integration
8. **Footer**: Company information and quick links

## 🛠️ Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **TailwindCSS 4**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Icon library
- **Wouter**: Lightweight routing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mhmm91642-a11y/EVEREST-TV.git
cd EVEREST-TV

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
EVEREST-TV/
├── client/
│   ├── public/
│   │   └── logo.jpg          # Everest TV logo
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Devices.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/         # React contexts
│   │   │   ├── ThemeContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── lib/
│   │   │   └── translations.ts  # Bilingual content
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── index.css         # Global styles
│   │   └── main.tsx
│   └── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🌐 Bilingual Support

The website supports both Arabic and English with:

- **Language Context**: Global language state management
- **Translations File**: Centralized translation strings for all content
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Language Switcher**: Easy toggle between languages in the header

### Adding Translations

Edit `/client/src/lib/translations.ts` to add or modify translations:

```typescript
export const translations = {
  ar: {
    // Arabic translations
  },
  en: {
    // English translations
  },
};
```

## 🎯 WhatsApp Integration

All WhatsApp buttons link to: `https://wa.me/966580928565`

To change the WhatsApp number, update the URL in:
- `Header.tsx`
- `Hero.tsx`
- `Pricing.tsx`
- `Contact.tsx`
- `FAQ.tsx`
- `Footer.tsx`

## 🔧 Customization

### Change Colors

Edit `/client/src/index.css` to modify the color scheme:

```css
:root {
  --primary: oklch(0.5 0.3 259);  /* Blue accent */
  --background: oklch(0.08 0.01 259);  /* Dark background */
  /* ... more colors ... */
}
```

### Update Content

Edit `/client/src/lib/translations.ts` to update all text content, pricing, features, and FAQ items.

### Modify Logo

Replace `/client/public/logo.jpg` with your logo file.

## 📊 Performance

- **Fast Load Time**: Optimized with Vite
- **Smooth Scrolling**: CSS smooth scroll behavior
- **Lazy Loading**: Images and components load efficiently
- **Mobile Optimized**: Responsive design with mobile-first approach

## 🔐 Security

- No sensitive data stored in frontend
- WhatsApp link uses secure HTTPS
- Clean, maintainable code structure

## 📝 License

This project is proprietary to Everest TV.

## 👨‍💻 Developer

Built with ❤️ by Manus AI

## 📞 Support

For inquiries, contact via WhatsApp: https://wa.me/966580928565

---

**Version**: 1.0.0  
**Last Updated**: June 22, 2026  
**Status**: Production Ready
