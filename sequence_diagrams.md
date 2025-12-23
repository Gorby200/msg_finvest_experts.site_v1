# Sequence Diagrams - Key User Interactions
## MsgFinvestExperts Website

### Overview
This document contains sequence diagrams for the most critical user interactions on the MsgFinvestExperts website.

---

## 1. Service Exploration Flow (3-Level Navigation)

### Description
User explores services through the interactive 3-level menu system: Service Card → Sub-Service → Project Details

### Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant ServiceCard
    participant SubServiceMenu
    participant ProjectPreview
    participant ProjectModal
    participant Analytics
    participant Data

    User->>Browser: Hovers on "Corporate Finance" card
    Browser->>ServiceCard: onMouseEnter event
    ServiceCard->>ServiceCard: Set hover state = true
    ServiceCard->>SubServiceMenu: Trigger expand animation
    SubServiceMenu->>SubServiceMenu: height: 0 → auto (300ms)
    SubServiceMenu->>Data: Fetch sub-services for category
    Data-->>SubServiceMenu: Return sub-service array
    SubServiceMenu->>SubServiceMenu: Render sub-service items with stagger
    ServiceCard->>Analytics: Track event('service_view', {service: 'corporate-finance'})
    Analytics-->>GA4: Send event
    
    Note over User,SubServiceMenu: User sees sub-services: Investment Feasibility, Financial Modeling, etc.
    
    User->>Browser: Hovers on "Investment Feasibility"
    Browser->>SubServiceMenu: onMouseEnter on sub-service
    SubServiceMenu->>ProjectPreview: Trigger side panel
    ProjectPreview->>ProjectPreview: slideIn from right (250ms)
    ProjectPreview->>Data: Fetch first 3 projects for sub-service
    Data-->>ProjectPreview: Return [Project1, Project2, Project3]
    ProjectPreview->>ProjectPreview: Render project cards with stagger (80ms)
    SubServiceMenu->>Analytics: Track event('sub_service_view', {name: 'investment-feasibility'})
    
    Note over User,ProjectPreview: User sees: Index Consulting ($1.2B), Exchange One, OOO Fort
    
    User->>Browser: Clicks "View All Projects"
    Browser->>ProjectPreview: onClick event
    ProjectPreview->>ProjectModal: Open modal
    ProjectModal->>ProjectModal: Background blur + scale animation (400ms)
    ProjectModal->>Data: Fetch ALL projects for sub-service
    Data-->>ProjectModal: Return all 6 projects
    ProjectModal->>ProjectModal: Render filterable grid (3 columns)
    ProjectModal->>Analytics: Track event('project_modal_open', {subService: 'investment-feasibility'})
    Analytics-->>GA4: Send event
    Analytics-->>Hotjar: Record interaction
    
    Note over User,ProjectModal: User browses all projects, filters by year/size
    
    User->>Browser: Presses ESC or clicks outside
    Browser->>ProjectModal: onClose event
    ProjectModal->>ProjectModal: Reverse animation (scale + fade)
    ProjectModal->>ProjectModal: Remove from DOM
    ProjectModal->>Browser: Return focus to trigger element
```

### Technical Details

**Performance Considerations:**
- Sub-service data pre-loaded at build time (no API call)
- Project data bundled in JavaScript (static import)
- Animations use GPU-accelerated transforms
- Modal uses React Portal for proper layering
- Intersection Observer for scroll-based reveals

**Accessibility:**
- Keyboard navigation: Tab through cards, Enter to open
- ARIA labels on all interactive elements
- Focus management on modal open/close
- Screen reader announcements for state changes
- ESC key closes modal

**State Management:**
```typescript
// Service Card State
const [isHovered, setIsHovered] = useState(false);
const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

// Project Modal State
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
const [filterYear, setFilterYear] = useState<number | null>(null);
const [filterSize, setFilterSize] = useState<string | null>(null);
```

---

## 2. Contact Form Submission Flow

### Description
User fills and submits contact form, triggering validation, email delivery, and analytics tracking.

### Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant ContactForm
    participant Validation
    participant API
    participant SMTP
    participant Analytics
    participant SuccessModal

    User->>Browser: Fills form fields (name, email, message, etc.)
    Browser->>ContactForm: onChange events
    ContactForm->>Validation: Validate field (real-time)
    Validation-->>ContactForm: Return validation result
    ContactForm->>ContactForm: Show inline errors (if any)
    
    Note over User,ContactForm: User fills all required fields
    
    User->>Browser: Clicks "Send Inquiry" button
    Browser->>ContactForm: onSubmit event
    ContactForm->>ContactForm: Set loading state = true
    ContactForm->>ContactForm: Disable button, show spinner
    ContactForm->>Validation: Validate all fields with Zod
    
    alt Validation Fails
        Validation-->>ContactForm: Return errors array
        ContactForm->>ContactForm: Show error messages
        ContactForm->>ContactForm: Set loading state = false
        ContactForm->>Browser: Focus first error field
    else Validation Passes
        Validation-->>ContactForm: Return validated data
        ContactForm->>API: POST /api/contact with form data
        
        API->>Validation: Server-side validation with Zod
        Validation-->>API: Confirm valid
        API->>API: Sanitize inputs (XSS prevention)
        API->>API: Check rate limit (IP-based)
        
        alt Rate Limit Exceeded
            API-->>ContactForm: Return 429 Too Many Requests
            ContactForm->>ContactForm: Show rate limit error
            ContactForm->>ContactForm: Set loading state = false
        else Within Rate Limit
            API->>SMTP: Send company notification email
            SMTP-->>API: Email sent successfully
            
            API->>SMTP: Send user auto-reply email
            SMTP-->>API: Auto-reply sent
            
            API->>Analytics: Track server-side conversion
            Analytics-->>GA4: conversion event sent
            
            API-->>ContactForm: Return 200 success
            ContactForm->>ContactForm: Set loading state = false
            ContactForm->>SuccessModal: Open success modal
            SuccessModal->>SuccessModal: Fade in animation (300ms)
            
            ContactForm->>Analytics: Track client-side conversion
            Analytics-->>GA4: "contact_form_success" event
            Analytics-->>Yandex: Goal "contact_submission"
            Analytics-->>Hotjar: Tag session as "conversion"
            
            Note over User,SuccessModal: Success modal shows:<br/>- Thank you message<br/>- Expected response time (24h)<br/>- Alternative contact methods
            
            User->>Browser: Clicks "Close" on modal
            Browser->>SuccessModal: onClose event
            SuccessModal->>SuccessModal: Fade out (200ms)
            SuccessModal->>ContactForm: Clear form fields
            ContactForm->>ContactForm: Reset to initial state
        end
    end
```

### Email Templates

**Company Notification Email:**
```
Subject: New Website Inquiry - [Service Interest]

From: [User Name] <[User Email]>
Company: [Company Name]
Phone: [Phone Number]
Service Interest: [Selected Services]
Project Budget: [Selected Range]

Message:
[User Message]

---
Submitted: [Timestamp]
Language: [EN/RU]
User IP: [IP Address]
Referrer: [Referrer URL]
```

**User Auto-Reply Email:**
```
Subject: Thank You for Contacting MsgFinvestExperts

Dear [User Name],

Thank you for your inquiry regarding our [Service Interest] services.

We have received your message and will respond within 24 hours. A member of our team will contact you at [User Email] or [Phone Number] to discuss your project needs.

In the meantime, you may find these resources helpful:
- Our Capabilities Brochure: [Download Link]
- Case Studies: [Website Link]
- Schedule a Call: [Calendly Link]

Best regards,
MsgFinvestExperts Team

---
This is an automated message. Please do not reply to this email.
```

### API Implementation Details

```typescript
// /app/api/contact/route.ts
export async function POST(request: Request) {
  try {
    // 1. Parse request body
    const body = await request.json();
    
    // 2. Validate with Zod schema
    const validated = contactFormSchema.parse(body);
    
    // 3. Check rate limit
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitKey = `contact_${ip}`;
    if (await isRateLimited(rateLimitKey, 10, 3600)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // 4. Sanitize inputs
    const sanitized = {
      ...validated,
      name: sanitizeHtml(validated.name),
      message: sanitizeHtml(validated.message)
    };
    
    // 5. Send emails
    await Promise.all([
      sendCompanyNotification(sanitized),
      sendAutoReply(sanitized)
    ]);
    
    // 6. Track conversion (server-side)
    await trackConversion('contact_form_submit', sanitized);
    
    // 7. Return success
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
```

---

## 3. Language Switch Flow

### Description
User switches website language, triggering content translation and preference persistence.

### Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant LanguageSwitcher
    participant i18n
    participant Storage
    participant React
    participant Analytics

    User->>Browser: Clicks language toggle (EN → RU)
    Browser->>LanguageSwitcher: onClick event
    LanguageSwitcher->>i18n: changeLanguage('ru')
    i18n->>i18n: Load Russian translations
    i18n->>Storage: localStorage.setItem('language', 'ru')
    Storage-->>i18n: Preference saved
    
    i18n->>React: Trigger re-render with new language
    React->>React: Update all translated strings
    
    par Parallel Updates
        React->>Header: Update navigation labels
        React->>Hero: Update headline & subheadline
        React->>Services: Update service titles & descriptions
        React->>Portfolio: Update project descriptions
        React->>About: Update company content
        React->>Contact: Update form labels
        React->>Footer: Update footer content
    end
    
    React->>React: Update number formatting (1,000 → 1.000)
    React->>React: Update currency symbols ($ → ₽)
    React->>React: Maintain scroll position
    
    LanguageSwitcher->>Analytics: Track event('language_switch', {from: 'en', to: 'ru'})
    Analytics-->>GA4: Send event
    Analytics-->>Yandex: Update session language
    
    Browser->>User: Display website in Russian
    
    Note over User,Browser: All content now in Russian,<br/>scroll position maintained,<br/>preferences saved for next visit
```

### i18n Implementation

```typescript
// lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '@/locales/en/translation.json';
import translationRU from '@/locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU }
    },
    lng: typeof window !== 'undefined' 
      ? localStorage.getItem('language') || 'en'
      : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```

**Translation File Structure:**
```json
// locales/en/translation.json
{
  "header": {
    "nav": {
      "home": "Home",
      "services": "Services",
      "projects": "Projects",
      "about": "About",
      "contact": "Contact"
    }
  },
  "hero": {
    "headline": "Transforming Vision into Funded Reality",
    "subheadline": "Premier consulting firm managing $5B+ in secured investments"
  },
  "services": {
    "title": "Comprehensive Consulting Solutions",
    "categories": {
      "corporateFinance": {
        "title": "Corporate Finance Consulting",
        "description": "Comprehensive investment project development..."
      }
    }
  }
}
```

---

## 4. Page Load & Analytics Initialization

### Description
Complete sequence from initial page request to fully interactive website with analytics tracking.

### Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant CDN
    participant HTML
    participant JS
    participant React
    participant Analytics
    participant GA4
    participant Yandex
    participant Hotjar

    User->>Browser: Navigates to msgfinvestexperts.com
    Browser->>CDN: Request HTML
    CDN-->>Browser: Return cached HTML (SSG)
    Browser->>HTML: Parse HTML
    HTML->>Browser: Request CSS bundle
    Browser->>CDN: GET styles.css
    CDN-->>Browser: Return CSS (cached)
    Browser->>Browser: Render initial HTML (FCP < 1.5s)
    
    HTML->>Browser: Request JS bundle
    Browser->>CDN: GET main.js
    CDN-->>Browser: Return JavaScript bundle
    Browser->>JS: Execute JavaScript
    JS->>React: Hydrate static HTML
    React->>React: Attach event listeners
    React->>React: Initialize state
    
    par Analytics Initialization
        React->>Analytics: Initialize GA4
        Analytics->>GA4: Load gtag.js
        GA4-->>Analytics: SDK loaded
        
        React->>Analytics: Initialize Yandex.Metrica
        Analytics->>Yandex: Load ym script
        Yandex-->>Analytics: SDK loaded
        
        React->>Analytics: Initialize Hotjar
        Analytics->>Hotjar: Load hj script
        Hotjar-->>Analytics: SDK loaded
    end
    
    Analytics->>GA4: Track page_view
    GA4-->>Analytics: Event recorded
    Analytics->>Yandex: Track page_view
    Yandex-->>Analytics: Event recorded
    
    opt Hotjar Sampling (10%)
        Analytics->>Hotjar: Start session recording
        Hotjar-->>Analytics: Recording started
    end
    
    React->>Browser: Website fully interactive (TTI < 3s)
    
    User->>Browser: Scrolls page
    Browser->>React: Scroll event
    React->>React: Trigger scroll animations
    React->>Analytics: Track scroll depth (25%)
    Analytics-->>GA4: scrollDepth event
    
    User->>Browser: Hovers on element
    Browser->>React: MouseEnter event
    React->>React: Trigger hover animation
    opt Hotjar Recording Active
        React->>Hotjar: Record interaction
    end
```

### Performance Timeline

```
0ms:    User requests page
50ms:   HTML received from CDN
100ms:  CSS parsed, initial render
200ms:  FCP (First Contentful Paint)
500ms:  JavaScript bundle loads
700ms:  React hydration begins
1000ms: React hydration complete
1200ms: Analytics SDKs initialize
1500ms: LCP (Largest Contentful Paint)
2000ms: All animations ready
2500ms: TTI (Time to Interactive)
3000ms: Page fully loaded
```

### Critical Rendering Path Optimization

**Strategies Implemented:**
1. **Inline Critical CSS:** Above-the-fold styles inlined in HTML
2. **Async JavaScript:** Non-critical scripts loaded asynchronously
3. **Preload Fonts:** WOFF2 fonts preloaded with `<link rel="preload">`
4. **Image Optimization:** WebP/AVIF with lazy loading
5. **Code Splitting:** Route-based chunking for optimal bundle size
6. **Resource Hints:** DNS prefetch for external domains (analytics)

---

## 5. Easter Egg Discovery Flow (Konami Code Example)

### Description
User discovers hidden easter egg by entering the Konami Code sequence.

### Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant KeyListener
    participant KonamiCode
    participant Confetti
    participant Modal
    participant Analytics

    Browser->>KeyListener: Mount keyboard event listener
    KeyListener->>KeyListener: Initialize sequence buffer []
    
    User->>Browser: Presses ArrowUp
    Browser->>KeyListener: keydown event
    KeyListener->>KeyListener: Add 'ArrowUp' to buffer [↑]
    KeyListener->>KonamiCode: Check sequence match
    KonamiCode-->>KeyListener: No match (incomplete)
    
    User->>Browser: Presses ArrowUp again
    Browser->>KeyListener: keydown event
    KeyListener->>KeyListener: Add to buffer [↑,↑]
    KeyListener->>KonamiCode: Check sequence
    KonamiCode-->>KeyListener: No match (incomplete)
    
    Note over User,KeyListener: User continues sequence:<br/>↓ ↓ ← → ← → b a
    
    User->>Browser: Presses 'a' (final key)
    Browser->>KeyListener: keydown event
    KeyListener->>KeyListener: Buffer now [↑,↑,↓,↓,←,→,←,→,b,a]
    KeyListener->>KonamiCode: Check complete sequence
    KonamiCode-->>KeyListener: MATCH! Konami Code entered
    
    KeyListener->>Confetti: Trigger confetti animation
    Confetti->>Browser: Create 100 particles
    Confetti->>Confetti: Animate particles (3s duration)
    
    KeyListener->>Modal: Open achievement modal
    Modal->>Modal: Fade in + scale animation
    Modal->>Modal: Show congratulations message
    Modal->>Modal: Display achievement badge
    
    KeyListener->>Analytics: Track event('easter_egg_found', {type: 'konami_code'})
    Analytics-->>GA4: Send event
    
    KeyListener->>KeyListener: Color scheme → party mode (3s)
    
    Note over User,Browser: Confetti falls, colors change,<br/>modal shows achievement,<br/>badge appears in corner
    
    User->>Browser: Clicks "Close" or waits 3s
    Browser->>Modal: onClose event
    Modal->>Modal: Fade out animation
    KeyListener->>KeyListener: Reset color scheme to normal
    Confetti->>Confetti: Clear particles
    KeyListener->>KeyListener: Clear buffer []
```

### Implementation

```typescript
// components/easterEggs/KonamiCode.tsx
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function KonamiCode() {
  const [buffer, setBuffer] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newBuffer = [...buffer, e.key].slice(-10);
      setBuffer(newBuffer);

      if (newBuffer.join(',') === KONAMI_SEQUENCE.join(',')) {
        setActivated(true);
        trackEvent('easter_egg_found', { type: 'konami_code' });
        
        // Trigger effects
        triggerConfetti();
        setPartyMode(true);
        showAchievementModal();
        
        // Reset after 3 seconds
        setTimeout(() => {
          setActivated(false);
          setPartyMode(false);
          setBuffer([]);
        }, 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buffer]);

  return activated ? <ConfettiAnimation /> : null;
}
```

---

## Summary

These sequence diagrams illustrate the critical user interaction flows for the MsgFinvestExperts website:

1. **Service Exploration** - Complex 3-level navigation system
2. **Contact Form** - Form validation, submission, and email delivery
3. **Language Switch** - i18n implementation with persistence
4. **Page Load** - Performance-optimized initialization
5. **Easter Egg** - Example of hidden interaction discovery

Each flow is designed for:
- **Performance:** Optimized animations, lazy loading, caching
- **Accessibility:** Keyboard navigation, ARIA labels, focus management
- **Analytics:** Comprehensive event tracking for business insights
- **User Experience:** Smooth transitions, clear feedback, error handling

These diagrams serve as the technical blueprint for implementing the website's interactive features.