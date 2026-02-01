"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

interface LanguageToggleProps {
  /** Transparent navbar style (light text) */
  transparent?: boolean;
  /** Dark background (e.g. footer) — use light text */
  dark?: boolean;
  /** Compact style for mobile menu */
  compact?: boolean;
  className?: string;
}

export default function LanguageToggle({
  transparent = false,
  dark = false,
  compact = false,
  className = "",
}: LanguageToggleProps) {
  const { lang, setLang, t } = useLanguage();

  const base =
    "min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-md " +
    (dark ? "focus:ring-offset-2 focus:ring-offset-[var(--charcoal)]" : "focus:ring-offset-2 focus:ring-offset-[var(--warm-100)]");
  const active = dark
    ? "text-[var(--gold)] font-semibold"
    : transparent
      ? "text-[var(--gold)]"
      : "text-[var(--charcoal)] font-semibold";
  const inactive = dark
    ? "text-[var(--warm-500)] hover:text-[var(--warm-100)]"
    : transparent
      ? "text-[var(--warm-300)] hover:text-[var(--warm-100)]"
      : "text-[var(--warm-500)] hover:text-[var(--charcoal)]";

  const locales: { locale: Locale; label: string }[] = [
    { locale: "en", label: "EN" },
    { locale: "es", label: "ES" },
  ];

  const borderCls = dark ? "border-white/20" : "border-current/20";

  return (
    <div
      suppressHydrationWarning
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-lg border ${borderCls} overflow-hidden ${className}`}
    >
      {locales.map(({ locale, label }, i) => (
        <span key={locale} className="inline-flex">
          {i > 0 && (
            <span
              className={`w-px self-stretch shrink-0 ${dark ? "bg-white/20" : "bg-[var(--border)]"}`}
              aria-hidden="true"
            />
          )}
          <button
            type="button"
            onClick={() => setLang(locale)}
            aria-pressed={lang === locale}
            aria-label={`${locale === "en" ? "English" : "Español"}${lang === locale ? " (current)" : ""}`}
            className={`${base} ${compact ? "px-2.5 py-2" : "px-3 py-2.5"} ${lang === locale ? active : inactive}`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
