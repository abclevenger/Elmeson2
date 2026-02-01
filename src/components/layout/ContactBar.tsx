"use client";

import { Phone, MapPin } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/site";

export default function ContactBar() {
  return (
    <div
      suppressHydrationWarning
      className="no-print lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--charcoal)]/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4 safe-area-pb"
      role="complementary"
      aria-label="Quick contact"
    >
      <a
        href="tel:+13052952620"
        className="flex items-center gap-2 text-[var(--warm-100)] text-sm font-medium hover:text-[var(--gold)] transition-colors min-h-[44px]"
      >
        <Phone size={18} aria-hidden="true" />
        <span>305-295-2620</span>
      </a>
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[var(--warm-100)] text-sm font-medium hover:text-[var(--gold)] transition-colors min-h-[44px]"
      >
        <MapPin size={18} aria-hidden="true" />
        <span>Get Directions</span>
      </a>
    </div>
  );
}
