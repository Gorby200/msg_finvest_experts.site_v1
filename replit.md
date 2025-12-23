# MSG FinVest Experts

## Overview
A professional institutional consulting website for MSG FinVest Experts, built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion animations.

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with Inter font, loading screen, and ambient background
│   ├── page.tsx        # Main landing page with all sections
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── AmbientBackground.tsx  # Animated background effects
│   ├── Clients.tsx            # Client logos section
│   ├── Contact.tsx            # Contact form/section
│   ├── Hero.tsx               # Hero section
│   ├── LoadingScreen.tsx      # Animated loading screen (2s)
│   ├── MagneticCursor.tsx     # Custom cursor effect
│   ├── Navbar.tsx             # Navigation bar
│   ├── Portfolio.tsx          # Portfolio section
│   ├── Services.tsx           # Services section
│   └── Stats.tsx              # Statistics section
```

## Tech Stack
- **Framework**: Next.js 14.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11
- **Icons**: Lucide React

## Running the Project
- **Development**: `npm run dev` (runs on 0.0.0.0:5000)
- **Build**: `npm run build`
- **Production**: `npm run start` (runs on 0.0.0.0:5000)

## Color Scheme
Custom institutional colors defined in `tailwind.config.ts`:
- Navy: #0A192F (primary background)
- Gold: #C5A059 (accent)
- Slate: #2D3748
- Cream: #F7FAFC
- Aurora: #E6FFFA

## Deployment
Configured for Replit autoscale deployment with:
- Build command: `npm run build`
- Run command: `npm run start`
