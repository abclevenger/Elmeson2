"use client";

export interface PlacardFact {
  label: string;
  value: string;
}

interface PlacardFactsProps {
  facts: PlacardFact[];
  className?: string;
}

/**
 * Museum-style placard facts row (DOB, birthplace, years active, etc.).
 * Uses warm neutrals and subtle brass/gold accents per design system.
 */
export default function PlacardFacts({ facts, className = "" }: PlacardFactsProps) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-x-2 gap-y-1 text-[var(--warm-300)] text-xs uppercase tracking-[0.2em] ${className}`}
      role="list"
      aria-label="Key facts"
    >
      {facts.map(({ label, value }, i) => (
        <span key={i} className="inline-flex items-center gap-x-1.5" role="listitem">
          <span className="text-[var(--warm-500)]">{label}</span>
          <span aria-hidden="true">·</span>
          <span>{value}</span>
          {i < facts.length - 1 && (
            <span className="text-[var(--warm-500)]/40" aria-hidden="true">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
