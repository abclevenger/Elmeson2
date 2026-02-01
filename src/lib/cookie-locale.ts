import type { Locale } from "./translations";

const COOKIE_NAME = "elmeson-lang";
const MAX_AGE_YEAR = 60 * 60 * 24 * 365;

export function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`)
  );
  const v = match?.[1];
  if (v === "es" || v === "en") return v;
  return null;
}

export function setLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${MAX_AGE_YEAR}; SameSite=Lax`;
}
