import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import type { Language, Translations } from './translations/types';
import { ptBR } from './translations/pt-BR';
import { en } from './translations/en';

const STORAGE_KEY = 'portfolio-language';

const translations: Record<Language, Translations> = {
  'pt-BR': ptBR,
  'en': en,
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * Detects if user is in Brazil based on browser language.
 * Returns 'pt-BR' if Brazilian Portuguese, 'en' otherwise.
 */
function detectLanguage(): Language {
  // First, check localStorage for saved preference
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt-BR' || saved === 'en') {
      return saved;
    }

    // Detect based on browser language
    const browserLang = navigator.language || (navigator as unknown as { userLanguage: string }).userLanguage;

    // Check if browser language is Portuguese (Brazil)
    if (browserLang?.toLowerCase().startsWith('pt')) {
      return 'pt-BR';
    }
  }

  // Default to English for all other locales
  return 'en';
}

function saveLanguagePreference(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, language);
  }
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to detect language immediately for SSR compatibility
    if (typeof window !== 'undefined') {
      return detectLanguage();
    }
    return 'en';
  });

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Ensure correct language on client side
    const detectedLanguage = detectLanguage();
    setLanguageState(detectedLanguage);
    setIsHydrated(true);

    // Update document lang attribute
    document.documentElement.lang = detectedLanguage === 'pt-BR' ? 'pt-BR' : 'en';
  }, []);

  useEffect(() => {
    // Update document lang attribute when language changes
    if (isHydrated) {
      document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en';
    }
  }, [language, isHydrated]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguagePreference(lang);
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  // Show nothing briefly while hydrating to prevent flash of wrong language
  if (!isHydrated) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

/**
 * Convenience hook for accessing translations.
 */
export function useTranslation() {
  const { t, language, setLanguage } = useLanguage();
  return { t, language, setLanguage };
}
