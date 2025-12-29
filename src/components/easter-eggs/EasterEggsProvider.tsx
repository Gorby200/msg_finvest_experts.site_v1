'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface EasterEggsContent {
  konami: { title: string; message: string };
  logo: { title: string; message: string };
  tripleClick: { title: string; message: string };
  secretCode: { code: string; title: string; message: string };
  scroll: { title: string; message: string };
  footer: { title: string; message: string };
  tab: { title: string; message: string };
  time: { time: string; title: string; message: string };
}

const loadEasterEggsContent = async (lang: string): Promise<EasterEggsContent> => {
  try {
    const response = await fetch(`/content/easter-eggs/${lang}.json`);
    if (!response.ok) throw new Error('Failed to load');
    return await response.json();
  } catch {
    // Fallback to defaults
    return {
      konami: { title: '🎮 Achievement Unlocked!', message: 'You discovered an Easter Egg!' },
      logo: { title: '🏛️ Loyalty Champion', message: 'Your persistence is admirable!' },
      tripleClick: { title: '⚡ Precision Master', message: 'Triple click detected!' },
      secretCode: { code: '1337', title: '🔢 Elite Code', message: 'Secret number entered!' },
      scroll: { title: '📜 Deep Explorer', message: 'You scrolled to the bottom!' },
      footer: { title: '🦵 Detail Detective', message: 'Found the footer Easter Egg!' },
      tab: { title: '🔄 Keyboard Ninja', message: 'Tab master detected!' },
      time: { time: '03:14', title: 'π Time Traveler', message: 'Pi time!' }
    };
  }
};

interface AchievementModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-8 right-8 z-[9999] max-w-md bg-gradient-to-br from-institutional-navy to-institutional-navy/90 text-white p-6 rounded-lg shadow-2xl border-l-4 border-institutional-gold"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Trophy className="w-12 h-12 text-institutional-gold" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export const EasterEggsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [content, setContent] = useState<EasterEggsContent | null>(null);
  const [activeAchievement, setActiveAchievement] = useState<{ title: string; message: string } | null>(null);

  // Load content
  useEffect(() => {
    loadEasterEggsContent(language).then(setContent);
  }, [language]);

  const showAchievement = useCallback((key: keyof EasterEggsContent) => {
    if (!content) return;
    const item = content[key];
    if (!item) return;

    if (key === 'secretCode') {
      setActiveAchievement({ title: item.title, message: item.message });
    } else if (key === 'time') {
      setActiveAchievement({ title: item.title, message: item.message });
    } else {
      setActiveAchievement({ title: item.title, message: item.message });
    }
  }, [content]);

  // 1. Konami Code
  useEffect(() => {
    const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let buffer: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer = [...buffer, e.key].slice(-10);
      if (buffer.join(',') === KONAMI_CODE.join(',')) {
        showAchievement('konami');
        buffer = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAchievement]);

  // 2. Logo Long Press
  useEffect(() => {
    let logoPressTimer: NodeJS.Timeout | null = null;
    let logoPressed = false;

    const handleLogoMouseDown = () => {
      logoPressTimer = setTimeout(() => {
        if (!logoPressed) {
          logoPressed = true;
          showAchievement('logo');
        }
      }, 3000);
    };

    const handleLogoMouseUp = () => {
      if (logoPressTimer) clearTimeout(logoPressTimer);
      logoPressed = false;
    };

    const logo = document.querySelector('[data-easter-egg="logo"]');
    if (logo) {
      logo.addEventListener('mousedown', handleLogoMouseDown);
      logo.addEventListener('mouseup', handleLogoMouseUp);
      logo.addEventListener('mouseleave', handleLogoMouseUp);
    }

    return () => {
      if (logo) {
        logo.removeEventListener('mousedown', handleLogoMouseDown);
        logo.removeEventListener('mouseup', handleLogoMouseUp);
        logo.removeEventListener('mouseleave', handleLogoMouseUp);
      }
    };
  }, [showAchievement]);

  // 3. Triple Click
  useEffect(() => {
    let clickBuffer: number[] = [];

    const handleTripleClick = (e: MouseEvent) => {
      const now = Date.now();
      clickBuffer = [...clickBuffer, now].filter(t => now - t < 500);

      if (clickBuffer.length === 3) {
        const target = e.target as HTMLElement;
        if (target.closest('[data-triple-click="true"]')) {
          showAchievement('tripleClick');
          clickBuffer = [];
        }
      }
    };

    document.addEventListener('click', handleTripleClick);
    return () => document.removeEventListener('click', handleTripleClick);
  }, [showAchievement]);

  // 4. Secret Code (1337)
  useEffect(() => {
    let inputBuffer = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        inputBuffer += e.key;
        if (inputBuffer.length > 4) {
          inputBuffer = inputBuffer.slice(-4);
        }

        if (content && inputBuffer === content.secretCode.code) {
          showAchievement('secretCode');
          inputBuffer = '';
        }
      } else {
        inputBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAchievement, content]);

  // 5. Scroll Sequence
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (scrollPercent >= 99.5) {
          const lastShown = sessionStorage.getItem('scrollEasterEgg');
          const now = Date.now();
          if (!lastShown || now - parseInt(lastShown) > 60000) { // Once per minute
            showAchievement('scroll');
            sessionStorage.setItem('scrollEasterEgg', now.toString());
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [showAchievement]);

  // 6. Footer Click
  useEffect(() => {
    let footerClickCount = 0;
    let footerClickTimer: NodeJS.Timeout | null = null;

    const handleFooterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('footer')) {
        footerClickCount++;

        if (footerClickTimer) clearTimeout(footerClickTimer);

        footerClickTimer = setTimeout(() => {
          if (footerClickCount >= 5) {
            showAchievement('footer');
          }
          footerClickCount = 0;
        }, 500);
      }
    };

    document.addEventListener('click', handleFooterClick);
    return () => {
      document.removeEventListener('click', handleFooterClick);
      if (footerClickTimer) clearTimeout(footerClickTimer);
    };
  }, [showAchievement]);

  // 7. Tab Combo (Tab Tab Tab)
  useEffect(() => {
    let tabBuffer: number[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const now = Date.now();
        tabBuffer = [...tabBuffer, now].filter(t => now - t < 1000);

        if (tabBuffer.length === 7) { // 7 tabs
          showAchievement('tab');
          tabBuffer = [];
        }
      } else {
        tabBuffer = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAchievement]);

  // 8. Time Trigger (3:14 AM - Pi time)
  useEffect(() => {
    const checkPiTime = () => {
      if (!content) return;

      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const currentTime = `${hours}:${minutes}`;

      if (currentTime === content.time.time) {
        const lastShown = sessionStorage.getItem('timeEasterEgg');
        const today = now.toDateString();
        if (lastShown !== today) {
          showAchievement('time');
          sessionStorage.setItem('timeEasterEgg', today);
        }
      }
    };

    const interval = setInterval(checkPiTime, 60000); // Check every minute
    checkPiTime(); // Check on mount

    return () => clearInterval(interval);
  }, [showAchievement, content]);

  return (
    <>
      {children}
      <AnimatePresence>
        {activeAchievement && (
          <AchievementModal
            title={activeAchievement.title}
            message={activeAchievement.message}
            onClose={() => setActiveAchievement(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggsProvider;
