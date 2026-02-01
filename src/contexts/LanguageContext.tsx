"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getLocaleFromCookie, setLocaleCookie } from "@/lib/cookie-locale";
import { translations, type Locale } from "@/lib/translations";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "elmeson-lang";

interface LanguageContextValue {
  lang: Locale;
  setLang: (locale: Locale) => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const fromCookie = getLocaleFromCookie();
  if (fromCookie) return fromCookie;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "es" || v === "en") return v;
  } catch {
    /* ignore */
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [lang, setLangState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getStoredLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setLocaleCookie(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang, mounted]);

  const setLang = useCallback(
    (locale: Locale) => {
      setLangState(locale);
      setLocaleCookie(locale);
      try {
        localStorage.setItem(STORAGE_KEY, locale);
      } catch {
        /* ignore */
      }
      router.refresh();
    },
    [router]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang] as (typeof translations)["en"],
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
