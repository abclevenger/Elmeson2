"use client";

import ScrollReveal from "@/components/common/ScrollReveal";

export interface ExhibitLabel {
  id: string;
  title: string;
  body: string;
}

interface ExhibitGridProps {
  labels: ExhibitLabel[];
  className?: string;
}

/**
 * Museum exhibit–style label grid. Each card: title + 1–2 lines.
 * Subtle border, generous spacing; scroll-reveal per card.
 */
export default function ExhibitGrid({ labels, className = "" }: ExhibitGridProps) {
  return (
    <section
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}
      aria-label="Exhibit labels"
    >
      {labels.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 60}>
          <div className="border border-[var(--border)] bg-[var(--background)] p-6 lg:p-8 transition-colors hover:border-[var(--gold)]/30">
            <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-[var(--warm-700)] text-sm leading-relaxed font-light">
              {item.body}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
