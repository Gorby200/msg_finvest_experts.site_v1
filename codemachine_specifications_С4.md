# MsgFinvestExperts.com - Complete Project Specification

## Project Overview

**Project Name:** MsgFinvestExperts Corporate Website  
**Domain:** msgfinvestexperts.com  
**Type:** Single-page professional consulting website  
**Technology Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion  
**Target Audience:** CFOs, CEOs, Investment Bankers, PE/VC Investors  
**Primary Goal:** Position company in Top 10 global consulting firms through exceptional digital presence

---

## Business Context

### Company Profile
- **Name:** MsgFinvestExperts (ООО «Современные технологии бизнеса»)
- **Industry:** Corporate Finance Consulting & Investment Project Development
- **Track Record:** 20+ years, $5B+ in secured investments, 200+ successful projects
- **Geographic Presence:** Russia, Spain, Uzbekistan, Tajikistan, Estonia, Kyrgyzstan
- **Offices:** Saint Petersburg (HQ), Tashkent
- **Key Differentiator:** 100% project success rate, zero failures due to their work

### Target Users
1. **Primary:** CFOs & Finance Directors ($50M-$1B+ enterprises)
2. **Secondary:** CEOs seeking $10M-$100M+ project financing
3. **Tertiary:** Investment bankers at VEB, VTB, Sberbank, EBRD
4. **Additional:** PE/VC investors, government officials (PPP projects)

### Business Objectives
1. Generate 3% conversion rate on contact form (industry avg: 2-3%)
2. Establish Top 10 global consulting firm positioning
3. Achieve 4+ minute average time on site
4. Generate qualified leads for $10M+ investment projects
5. Build trust and credibility within 3 seconds of landing

---

## Technical Requirements

### Platform & Technology

**Frontend Framework:**
```typescript
{
  "framework": "Next.js 14.x",
  "runtime": "React 18.2+",
  "language": "TypeScript 5.x (strict mode)",
  "styling": "Tailwind CSS 3.4",
  "animations": "Framer Motion 11.x",
  "icons": "Lucide React"
}
```

**Required Libraries:**
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "react-intersection-observer": "^9.5.0",
    "react-countup": "^6.4.0",
    "swiper": "^11.0.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "i18next": "^23.7.0",
    "react-i18next": "^13.5.0",
    "react-helmet-async": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Performance Requirements

**Lighthouse Targets (MANDATORY):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Cumulative Layout Shift: <0.1
- Total Blocking Time: <200ms

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Responsive Breakpoints
```css
mobile: 320px - 767px
tablet: 768px - 1023px
desktop: 1024px - 1439px
large: 1440px+
```

---

## Design System

### Color Palette

**Primary Colors:**
```css
--navy: #0A2847;        /* Primary brand, headers, trust */
--gold: #C9A961;         /* Success, premium, CTA accents */
--slate: #2D3748;        /* Professional gray, secondary text */
```

**Secondary Colors:**
```css
--electric-blue: #2E90FA;  /* Innovation, interactive elements */
--deep-green: #0F7A5D;     /* Growth, financial metrics */
--charcoal: #1A202C;       /* Dark sections, depth */
```

**Neutral Palette:**
```css
--white: #FFFFFF;
--off-white: #F7FAFC;
--light-gray: #E2E8F0;
--medium-gray: #718096;
```

### Typography

**Font Stack:**
- Headlines: Montserrat (700, 800)
- Body: Inter (400, 500, 600)
- Numbers: IBM Plex Mono (500)

**Type Scale (Desktop):**
```css
H1: 64px / 72px line-height / 700 weight
H2: 48px / 56px line-height / 700 weight
H3: 36px / 44px line-height / 600 weight
H4: 24px / 32px line-height / 600 weight
Body: 16px / 24px line-height / 400 weight
```

**Type Scale (Mobile):**
```css
H1: 40px / 48px line-height
H2: 32px / 40px line-height
H3: 24px / 32px line-height
Body: 16px / 24px line-height
```

### Spacing System (8px base unit)
```css
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

---

## Page Structure

### Section Layout (Single Page Application)

1. **Header/Navigation** (Fixed)
2. **Hero Section** (Full viewport)
3. **Statistics Bar** (120px height)
4. **Services Section** (Interactive grid)
5. **Portfolio Highlights** (Carousel + grid)
6. **Client Logos** (Infinite scroll)
7. **About Section** (Two-column)
8. **Contact Section** (Form + info)
9. **Footer** (Multi-column)

### Detailed Section Specifications

#### 1. Header/Navigation
```typescript
interface HeaderProps {
  sticky: boolean;
  transparent: boolean; // Becomes solid after 50px scroll
  language: 'en' | 'ru';
}

const navigation = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];
```

**Features:**
- Logo (left) - clickable, smooth scroll to top
- Navigation menu (center) - active section highlighting
- Language switcher (right) - EN | RU toggle with persistence
- Mobile: Hamburger → full-screen slide-out menu
- Scroll behavior: Transparent → solid white with shadow (300ms transition)

#### 2. Hero Section
```typescript
interface HeroSection {
  headline: LocalizedString;
  subheadline: LocalizedString;
  statistics: [
    { value: '20+', label: 'Years' },
    { value: '$5B+', label: 'Investments' },
    { value: '200+', label: 'Projects' }
  ];
  cta: {
    primary: { text: 'Request Consultation', action: 'scrollToContact' };
    secondary: { text: 'View Projects', action: 'scrollToPortfolio' };
  };
  background: 'animated-gradient-mesh';
}
```

**Animations:**
- Load sequence: Logo (0ms) → Nav (200ms) → Headline (400ms) → Subheadline (600ms) → CTAs (800ms) → Statistics (1000ms)
- Parallax background: 0.4x scroll speed
- Floating particles: Very subtle, low opacity

#### 3. Statistics Bar
```typescript
interface StatisticsBar {
  statistics: [
    { value: 20, suffix: '+', label: 'Years of Excellence', countUp: true },
    { value: 5, prefix: '$', suffix: 'B+', label: 'Investment Secured', countUp: true },
    { value: 200, suffix: '+', label: 'Successful Projects', countUp: true },
    { value: 100, suffix: '%', label: 'Client Satisfaction', countUp: true }
  ];
  layout: '4-column-desktop' | '2x2-grid-mobile';
}
```

**Features:**
- Count-up animation on scroll into view (2000ms duration)
- Vertical dividers between stats (desktop only)
- Background: light gray (#F7FAFC)

#### 4. Services Section
```typescript
interface ServicesSection {
  title: LocalizedString;
  subtitle: LocalizedString;
  services: Service[]; // 8 total
  layout: '2x4-grid-desktop' | '1-column-mobile';
  interactions: {
    level1: 'hover-card-expand-submenu';
    level2: 'hover-submenu-show-3-projects';
    level3: 'click-submenu-show-all-projects-modal';
  };
}

interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  color: string;
  subServices: SubService[];
}

interface SubService {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  projects: Project[];
}

interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  investmentSize?: string;
  year?: number;
  location: string;
  outcome: string;
  tags: string[];
  featured?: boolean;
}
```

**Interaction Flow:**
1. **Hover Service Card** → Card lifts 8px, submenu expands below (300ms)
2. **Hover Sub-Service** → Side panel slides in from right (300px wide), shows first 3 projects
3. **Click Sub-Service** → Full modal with all projects, filterable grid, close with X or ESC

#### 5. Portfolio Highlights Section
```typescript
interface PortfolioSection {
  title: LocalizedString;
  subtitle: LocalizedString;
  featured: Project[]; // 5 featured projects
  carousel: {
    autoPlay: true;
    pauseOnHover: true;
    navigation: 'dots' | 'arrows';
  };
  grid: {
    columns: { desktop: 3, tablet: 2, mobile: 1 };
    filters: ['All', 'By Service', 'By Industry', 'By Location'];
    pagination: 'infinite-scroll' | 'pagination';
  };
}
```

#### 6. Client Logos Section
```typescript
interface ClientLogosSection {
  title: LocalizedString;
  subtitle: LocalizedString;
  clients: Client[]; // 30+ clients
  carousel: {
    type: 'infinite-marquee';
    rows: 2;
    direction: ['left', 'right']; // Opposite directions
    speed: 30000; // 30s per cycle
    pauseOnHover: true;
  };
  logoStyle: {
    height: 60;
    grayscale: true; // Color on hover
    hoverScale: 1.15;
    spacing: 40; // horizontal px between logos
  };
}

interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description?: LocalizedString;
}
```

#### 7. About Section
```typescript
interface AboutSection {
  title: LocalizedString;
  content: {
    mission: LocalizedString;
    differentiators: Array<{ icon: string; title: LocalizedString; description: LocalizedString }>;
    methodology: LocalizedString;
    offices: Array<{ city: string; address: string; phone: string; email: string }>;
  };
  layout: 'two-column-desktop' | 'stacked-mobile';
}
```

#### 8. Contact Section
```typescript
interface ContactSection {
  title: LocalizedString;
  form: ContactForm;
  information: ContactInfo;
  layout: 'split-50-50-desktop' | 'stacked-mobile';
}

interface ContactForm {
  fields: {
    name: { required: true; minLength: 2 };
    email: { required: true; validation: 'email' };
    phone: { required: false; validation: 'phone' };
    company: { required: false };
    serviceInterest: { required: true; type: 'checkbox-multiple'; options: Service[] };
    projectBudget: { required: false; type: 'dropdown'; options: ['<$1M', '$1-10M', '$10-50M', '$50-100M', '$100M+'] };
    message: { required: true; minLength: 20; maxLength: 1000 };
  };
  validation: 'zod-schema';
  submission: {
    endpoint: '/api/contact';
    successModal: true;
    autoReply: true;
  };
}

interface ContactInfo {
  offices: Office[];
  socialLinks: SocialLink[];
  quickActions: ['Download Brochure', 'Schedule Call'];
}
```

#### 9. Footer
```typescript
interface Footer {
  columns: [
    {
      title: 'Company';
      items: ['logo', 'description', 'socialLinks'];
    },
    {
      title: 'Services';
      items: Service[]; // Links to #services
    },
    {
      title: 'Company';
      items: ['About', 'Team', 'Case Studies', 'Methodology', 'Contact'];
    },
    {
      title: 'Legal & Resources';
      items: ['Privacy Policy', 'Terms', 'Cookie Policy', 'Download Brochure', 'Newsletter'];
    }
  ];
  bottomBar: {
    copyright: string;
    languageSwitcher: boolean;
    backToTop: boolean;
  };
  background: 'dark-navy';
}
```

---

## Animation Specifications

### Core Animations (MUST IMPLEMENT)

#### 1. Page Load Sequence (1800ms total)
```typescript
const loadSequence: AnimationSequence = {
  0: { element: 'logo', animation: 'fadeIn + scale(0.95→1.0)', duration: 400 },
  200: { element: 'navigation', animation: 'slideDown', duration: 300 },
  400: { element: 'hero-headline', animation: 'fadeInUp(20px)', duration: 400 },
  600: { element: 'hero-subheadline', animation: 'fadeInUp(20px)', duration: 400 },
  800: { element: 'hero-ctas', animation: 'fadeIn + scale', duration: 300 },
  1000: { element: 'statistics', animation: 'countUp', duration: 800 }
};
```

#### 2. Scroll-Triggered Reveals
```typescript
interface ScrollReveal {
  trigger: 'intersection-observer';
  threshold: 0.2;
  animation: 'fadeInUp(20px)';
  duration: 600;
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)';
  stagger: 100; // ms between elements
  once: true; // Only animate once
}
```

#### 3. Service Menu Interactions
```typescript
const serviceMenuAnimations = {
  cardHover: {
    lift: 'translateY(-8px)',
    duration: 200,
    submenuExpand: {
      height: '0 → auto',
      opacity: '0 → 1',
      duration: 300,
      easing: 'ease-in-out'
    }
  },
  subServiceHover: {
    panel: {
      slideIn: 'translateX(100% → 0)',
      width: '300px',
      duration: 250
    },
    projectCards: {
      staggerFadeIn: 100,
      hoverLift: 'translateY(-4px)'
    }
  },
  modalOpen: {
    background: { blur: 10, opacity: 0.8, duration: 200 },
    modal: { scale: '0.95 → 1.0', opacity: '0 → 1', duration: 400 }
  }
};
```

#### 4. Magnetic Button Effect (Desktop Only)
```typescript
interface MagneticEffect {
  trigger: 'mousemove';
  target: 'buttons, interactive-cards';
  maxDeviation: 8; // pixels
  calculation: 'distance-from-cursor';
  animation: 'spring';
  springConfig: { tension: 300, friction: 20 };
  enableOn: 'min-width: 1024px';
}
```

#### 5. Number Count-Up
```typescript
interface CountUpAnimation {
  trigger: 'scroll-into-view';
  duration: 2000;
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)';
  startValue: 0;
  endValue: 'from-data';
  format: {
    prefix?: '$' | '';
    suffix?: '+' | '%' | '';
    decimals: 0;
  };
}
```

#### 6. Parallax Scrolling
```typescript
interface ParallaxConfig {
  target: 'background-elements';
  speedRatio: 0.4; // Moves at 40% of scroll speed
  direction: 'vertical';
  enableOn: 'min-width: 768px'; // Disabled on mobile for performance
}
```

#### 7. Infinite Logo Scroll
```typescript
interface InfiniteScroll {
  implementation: 'duplicate-array-seamless-loop';
  rows: 2;
  row1Direction: 'left';
  row2Direction: 'right';
  speed: 30000; // 30 seconds per full cycle
  pauseOnHover: true;
  smooth: true;
  gap: 0; // No visible gap in loop
}
```

---

## Easter Eggs Specifications

### 1. Konami Code
```typescript
const konamiCode = {
  sequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
  effect: {
    confetti: { duration: 3000, particleCount: 100 },
    colorScheme: 'party-mode-3s',
    modal: {
      title: 'Achievement Unlocked!',
      message: 'You found our secret. We appreciate attention to detail.',
      badge: 'display-in-corner'
    }
  }
};
```

### 2. Logo Long Press
```typescript
const logoLongPress = {
  trigger: 'press-2000ms',
  effect: {
    rotation: '360deg-smooth',
    carousel: {
      facts: [
        'Did you know? We've analyzed projects in 47 industries',
        'Fun fact: Our team speaks 12 languages collectively',
        'Secret: We've consumed over 5,000 cups of coffee this year',
        'Trivia: Longest project meeting: 8 hours (worth it!)'
      ],
      rotation: 'every-3s'
    }
  }
};
```

### 3. Statistics Triple-Click
```typescript
const statisticsEasterEgg = {
  trigger: 'triple-click-on-$5B',
  effect: {
    explosion: 'number-explodes-into-breakdown',
    pieChart: {
      morphFrom: 'number',
      data: 'investment-distribution',
      duration: 5000
    },
    returnToNormal: 'after-5s'
  }
};
```

### 4. CEO Name Extended Hover
```typescript
const ceoHover = {
  trigger: 'hover-5s-on-ceo-signature',
  effect: {
    badge: {
      text: 'Thanks for your attention to detail',
      fadeIn: 200,
      particles: 'subtle-around-name',
      duration: 3000,
      fadeOut: 500
    }
  }
};
```

### 5. Navigation Sequence
```typescript
const navSequence = {
  trigger: 'click-About → Services → Clients → About (within 5s)',
  effect: {
    navItems: 'rainbow-gradient-pulse',
    duration: 2000,
    console: 'We see you exploring every corner!'
  }
};
```

### 6. Client Logo Rapid Click
```typescript
const logoClick = {
  trigger: 'click-5-different-logos-within-3s',
  effect: {
    allLogos: 'gentle-bounce-animation',
    message: 'Our clients make us proud!',
    duration: 2000
  }
};
```

### 7. Language Switch Spam
```typescript
const languageSwitch = {
  trigger: 'switch-language-10-times-rapidly',
  effect: {
    switcher: 'spin-360deg',
    message: 'Fluent in both business languages!',
    confetti: 'country-flag-colors',
    duration: 3000
  }
};
```

### 8. Footer Secret
```typescript
const footerSecret = {
  trigger: 'type-"excellence"-in-footer-area',
  effect: {
    footer: 'glow-gold-briefly',
    message: 'Excellence is our standard, not our goal',
    duration: 3000
  }
};
```

---

## Internationalization (i18n)

### Language Support
- Primary: English (EN)
- Secondary: Russian (RU)
- Switcher: Toggle in header (persistent via localStorage)
- Format: JSON translation files per language

### Translation Structure
```typescript
interface Translations {
  header: { navigation: NavigationItem[] };
  hero: { headline: string; subheadline: string; cta: CTAButtons };
  services: Service[];
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
}
```

### Localization Requirements
- Number formatting: locale-specific (e.g., 1,000,000 vs 1.000.000)
- Currency: USD ($) and RUB (₽) where applicable
- Date formatting: MM/DD/YYYY (EN) vs DD.MM.YYYY (RU)
- Persistent language preference in localStorage

---

## Analytics & Tracking

### Google Analytics 4 Events
```typescript
const trackingEvents = {
  pageView: 'page_view',
  serviceView: { event: 'service_view', params: { service_name, sub_service_name? } },
  projectView: { event: 'project_view', params: { project_id, client } },
  contactFormSubmit: { event: 'contact_form_submit', params: { form_type, service_interest? } },
  clientLogoClick: { event: 'client_logo_click', params: { client_name } },
  languageSwitch: { event: 'language_switch', params: { from, to } },
  easterEggFound: { event: 'easter_egg_found', params: { egg_type } },
  ctaClick: { event: 'cta_click', params: { cta_text, location } },
  scrollDepth: { event: 'scroll_depth', params: { percentage: 25 | 50 | 75 | 100 } }
};
```

### Yandex.Metrica Goals
- Contact form submission
- Phone number click
- Email click
- Service category expansion
- Project modal open
- Time on site milestones (1min, 3min, 5min+)

### Hotjar Configuration
- Heatmaps: All sections
- Session recordings: 10% sample rate
- Conversion funnels: Track to contact form
- Feedback widget: Optional bottom-right corner

---

## SEO Implementation

### Meta Tags (Bilingual)
```typescript
const seoConfig = {
  en: {
    title: 'MsgFinvestExperts - Top Corporate Finance & Investment Consulting',
    description: 'Premier consulting firm specializing in corporate finance, investment projects, and capital raising. 20+ years, $5B+ in secured funding, 200+ successful projects across Europe and CIS.',
    keywords: 'corporate finance consulting, investment project financing, business planning, financial modeling, due diligence, M&A advisory, PPP projects',
    og: {
      type: 'website',
      locale: 'en_US',
      url: 'https://msgfinvestexperts.com',
      image: '/og-image-en.jpg'
    }
  },
  ru: {
    title: 'MsgFinvestExperts - Консалтинг в области корпоративных финансов',
    description: 'Ведущая консалтинговая компания по корпоративным финансам, инвестиционным проектам и привлечению капитала. 20+ лет опыта, $5 млрд+, 200+ успешных проектов.',
    keywords: 'консалтинг корпоративные финансы, финансирование инвестиционных проектов, бизнес-планирование',
    og: {
      type: 'website',
      locale: 'ru_RU',
      url: 'https://msgfinvestexperts.com/ru',
      image: '/og-image-ru.jpg'
    }
  }
};
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MsgFinvestExperts",
  "alternateName": "Современные технологии бизнеса",
  "description": "Corporate finance consulting and investment project development",
  "url": "https://msgfinvestexperts.com",
  "telephone": "+7-XXX-XXX-XXXX",
  "email": "info@msgfinvestexperts.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Saint Petersburg",
    "addressCountry": "RU"
  },
  "areaServed": ["Russia", "Spain", "Uzbekistan", "Tajikistan", "Estonia", "Kyrgyzstan"],
  "serviceType": ["Corporate Finance Consulting", "Investment Project Development", "Financial Due Diligence", "Capital Raising", "M&A Advisory"]
}
```

---

## API Endpoints

### Contact Form Submission
```typescript
// POST /api/contact
interface ContactFormSubmission {
  endpoint: '/api/contact';
  method: 'POST';
  body: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    serviceInterest: string[];
    projectBudget?: string;
    message: string;
    language: 'en' | 'ru';
  };
  response: {
    success: boolean;
    message: string;
  };
  actions: [
    'send-email-to-company',
    'send-auto-reply-to-user',
    'track-ga4-event',
    'show-success-modal'
  ];
}
```

---

## File Structure

```
msgfinvestexperts/
├── public/
│   ├── logos/           # Client logos (SVG/PNG)
│   ├── images/          # Hero, about section images
│   ├── og-image-en.jpg  # OpenGraph English
│   ├── og-image-ru.jpg  # OpenGraph Russian
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatisticsBar.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── ClientsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   ├── features/
│   │   │   ├── ServiceMenu/
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── SubServiceMenu.tsx
│   │   │   │   ├── ProjectPreview.tsx
│   │   │   │   └── ProjectModal.tsx
│   │   │   │
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── validation.ts
│   │   │   │   └── SuccessModal.tsx
│   │   │   │
│   │   │   └── ClientLogoCarousel/
│   │   │       ├── LogoCarousel.tsx
│   │   │       └── ClientLogo.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   │
│   │   ├── animations/
│   │   │   ├── FadeInUp.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   └── ScrollReveal.tsx
│   │   │
│   │   └── easterEggs/
│   │       ├── KonamiCode.tsx
│   │       ├── LogoLongPress.tsx
│   │       └── [other-easter-eggs].tsx
│   │
│   ├── data/
│   │   ├── services.ts    # All 8 service categories + 200+ projects
│   │   ├── clients.ts     # All 30+ clients
│   │   ├── statistics.ts
│   │   └── team.ts
│   │
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   ├── useMagneticEffect.ts
│   │   ├── useMediaQuery.ts
│   │   └── useAnalytics.ts
│   │
│   ├── lib/
│   │   ├── analytics.ts   # GA4 + Yandex
│   │   ├── i18n.ts        # i18next config
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── service.types.ts
│   │   ├── project.types.ts
│   │   ├── client.types.ts
│   │   └── form.types.ts
│   │
│   └── locales/
│       ├── en/
│       │   └── translation.json
│       └── ru/
│           └── translation.json
│
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Data Requirements

### Service Categories (8 Total - COMPLETE IMPLEMENTATION)

All service data MUST be extracted from company MD file and structured according to this schema. Refer to `data-structure.md` for complete project listings (200+ projects across 8 service categories).

---

## Deployment Requirements

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=XXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_SITE_URL=https://msgfinvestexperts.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@msgfinvestexperts.com
SMTP_PASSWORD=xxxxx
CONTACT_EMAIL=info@msgfinvestexperts.com
```

### Build Configuration
```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['msgfinvestexperts.com'],
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  },
  poweredByHeader: false,
  compress: true
};
```

---

## Success Criteria

### Functional Requirements (MUST PASS)
✅ All 8 service categories with sub-services implemented  
✅ All 200+ projects structured and categorized  
✅ All 30+ client logos displayed  
✅ Service menu 3-level interaction functional  
✅ Contact form validation and submission working  
✅ Language switching (EN/RU) with persistence  
✅ All animations smooth at 60fps  
✅ All 8 easter eggs functional  
✅ Responsive on mobile/tablet/desktop  
✅ Analytics tracking implemented  

### Technical Requirements (MUST ACHIEVE)
✅ Lighthouse Performance: 95+  
✅ Lighthouse Accessibility: 100  
✅ Lighthouse Best Practices: 100  
✅ Lighthouse SEO: 100  
✅ Zero console errors  
✅ Zero TypeScript errors  
✅ Cross-browser compatibility verified  

### Business Requirements (TARGET)
✅ Conveys Top 10 global consulting firm positioning  
✅ Establishes trust within 3 seconds of landing  
✅ Professional polish matching $100k+ development budget  
✅ Conversion-optimized for high-value B2B leads  

---

## Code Quality Standards

### TypeScript
- Strict mode enabled
- No `any` types (use `unknown` with type guards)
- Comprehensive interfaces for all data structures
- Proper type exports

### React Best Practices
- Functional components with hooks
- Proper dependency arrays
- Memoization where appropriate (useMemo, useCallback)
- Custom hooks for reusable logic
- Proper error boundaries

### Performance
- Image lazy loading
- Code splitting for heavy components
- Debounced scroll/resize handlers
- Intersection Observer for animations
- Optimized re-renders

### Accessibility
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader optimization
- Color contrast compliance

---

## Final Notes

This specification is COMPLETE and EXHAUSTIVE. Every requirement for building a world-class consulting website has been documented. The implementation should follow this specification precisely to achieve the goal of positioning MsgFinvestExperts in the Top 10 global consulting firms through exceptional digital presence.

**Zero compromises. Zero placeholders. Production-ready excellence.**