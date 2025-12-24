'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of our translations (loose typing for flexibility with CMS)
type Translations = any;

interface LanguageContextType {
    language: 'en' | 'ru';
    setLanguage: (lang: 'en' | 'ru') => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
    children,
    dictionaries
}: {
    children: React.ReactNode,
    dictionaries: { en: Translations, ru: Translations }
}) => {
    const [language, setLanguage] = useState<'en' | 'ru'>('en');

    // Simple nested key retrieval
    const t = (key: string) => {
        const keys = key.split('.');
        let value = dictionaries[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
