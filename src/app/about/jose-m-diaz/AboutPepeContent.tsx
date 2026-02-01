"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import PlacardFacts, { type PlacardFact } from "@/components/about/PlacardFacts";
import ExhibitGrid, { type ExhibitLabel } from "@/components/about/ExhibitGrid";
import HeritageTimeline, { type TimelineEntry } from "@/components/about/HeritageTimeline";

/* Archival portrait of Jose "Pepe" M. Diaz. */
const USE_HERO_PLACEHOLDER = false;
const HERO_IMAGE = "/images/jose-m-diaz-portrait.png";
const HERO_IMAGE_ALT = "Jose \"Pepe\" M. Diaz — founder of El Mesón de Pepe; Cuban American heritage, Key West.";

const PLACARD_FACTS: PlacardFact[] = [
  { label: "Born", value: "24 Jan 1941" },
  { label: "Birthplace", value: "Yaguajay, Cuba" },
  { label: "Active", value: "1973–2023" },
  { label: "Passed", value: "19 Dec 2023" },
];

const EXHIBIT_LABELS: ExhibitLabel[] = [
  {
    id: "survival",
    title: "Survival as craft",
    body: "In confinement, scarce staples became meals for others. Craft born of necessity became the foundation of a lifetime of hospitality.",
  },
  {
    id: "memory",
    title: "Food as memory",
    body: "Recipes carried across water. Each dish a thread between Cuba and Key West—culture preserved at the table.",
  },
  {
    id: "home",
    title: "Key West as home",
    body: "Cayo Hueso welcomed him. Here he built not only a restaurant but a place where Cuban American Conch identity could endure.",
  },
  {
    id: "legacy",
    title: "Cuban American Conch legacy",
    body: "He did not simply open a business. He helped turn Cuban tradition into Conch permanence—history made visible at Mallory Square.",
  },
  {
    id: "inheritance",
    title: "Hospitality as inheritance",
    body: "The table as offering. What began in confinement as care for others became El Mesón de Pepe: a living museum of that inheritance.",
  },
];

const TIMELINE_ENTRIES: TimelineEntry[] = [
  { id: "birth", year: "1941", label: "Born, Yaguajay, Cuba", detail: "Jose \"Pepe\" M. Diaz." },
  {
    id: "imprisonment",
    label: "Reported imprisonment",
    detail:
      "According to U.S. media reports: one year in a Cuban prison and four years in a labor camp for anti-Castro activity. Learned to cook while imprisoned, turning scarce staples into meals for fellow prisoners.",
  },
  {
    id: "key-west",
    year: "1973",
    label: "Key West",
    detail: "The Díaz family arrived. Cuban Club, Tony's Grocery, the deli counter—roots of the table to come.",
  },
  {
    id: "founding",
    year: "Mid-1980s",
    label: "El Mesón de Pepe",
    detail: "Founded on Duval Street (sources cite 1984 or 1985). Later moved to Mallory Square, where it remains.",
  },
  {
    id: "passing",
    year: "2023",
    label: "Passed",
    detail: "19 December, after a long battle with Parkinson's disease.",
  },
];

export default function AboutPepeContent() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* 1. Hero — full-bleed, quiet */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-end pb-12 md:pb-16 pt-28 md:pt-32 overflow-hidden"
        aria-labelledby="pepe-hero-title"
      >
        <div className="absolute inset-0">
          {USE_HERO_PLACEHOLDER ? (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[var(--charcoal-muted)] via-[var(--charcoal)] to-[var(--charcoal-muted)]"
              role="img"
              aria-label="Archival image placeholder"
            >
              {/* TODO: add subtle grain overlay (e.g. CSS pseudo-element) when desired */}
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--warm-300)]/70 text-xs uppercase tracking-[0.2em]">
                Archival image placeholder
              </span>
            </div>
          ) : (
            <Image
              src={HERO_IMAGE}
              alt={HERO_IMAGE_ALT}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-[var(--charcoal)]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/95 via-[var(--charcoal)]/50 to-[var(--charcoal)]/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-300)] mb-3">
            Cuban American Heritage · Key West
          </p>
          <h1
            id="pepe-hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-3"
          >
            Jose &quot;Pepe&quot; M. Diaz
          </h1>
          <p className="text-lg md:text-xl text-[var(--warm-200)] font-light max-w-2xl mx-auto mb-6">
            A life that carried history across water—and turned survival into hospitality.
          </p>
          <PlacardFacts facts={PLACARD_FACTS} />
        </div>
      </section>

      {/* 2. The Story, Told Carefully */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-4">
              The Story, Told Carefully
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-8" />
            <div className="space-y-6 text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light">
              <p>
                Jose &ldquo;Pepe&rdquo; M. Diaz was born 24 January 1941 in Yaguajay, Cuba.
                According to U.S. media reports, he spent one year in a Cuban prison and four
                years in a labor camp for anti-Castro activity. In confinement, he learned to
                cook, turning scarce staples into meals for fellow prisoners. That act of care
                foreshadowed a life of hospitality.
              </p>
              <p>
                After arriving in Key West in 1973, the Díaz family became Conch: the Cuban
                Club, Tony&apos;s Grocery, the deli counter where regulars came for Cuban coffee
                and sandwiches. In the mid-1980s (sources differ between 1984 and 1985), El
                Mesón de Pepe opened—first on Duval, later at Mallory Square—where it remains
                a permanent site of Cuban American heritage.
              </p>
              <p>
                Jose &ldquo;Pepe&rdquo; M. Diaz passed on 19 December 2023 after a long battle with Parkinson&apos;s
                disease. The table he built continues to hold history: food as cultural
                continuity, the restaurant as a living archive.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Exhibit Labels grid */}
      <section className="section-anchor bg-[var(--warm-100)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Exhibit labels
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-tight text-[var(--charcoal)]">
              Themes
            </h2>
            <div className="h-px w-16 bg-[var(--gold)] mx-auto mt-4" />
          </ScrollReveal>
          <ExhibitGrid labels={EXHIBIT_LABELS} />
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Timeline
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)]">
              A Curated Chronology
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mt-4" />
          </ScrollReveal>
          <HeritageTimeline entries={TIMELINE_ENTRIES} />
        </div>
      </section>

      {/* 5. A Living Museum — mission tie-in */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--warm-100)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-4">
              A Living Museum
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-8" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              El Mesón de Pepe preserves Cuban American heritage through food, story, and
              community memory. The restaurant is also a museum: it honors notable Key West
              Cubans and Cuban American Conch history, ensuring that the contributions and
              identity forged here remain visible and permanent.
            </p>
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light">
              Pepe&apos;s life—from Yaguajay to Key West, from survival to hospitality—is
              integral to that mission. The table carries it forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Footer CTA — quiet */}
      <section className="py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ScrollReveal delay={0}>
            <Link
              href="/heritage"
              className="btn-primary inline-flex justify-center min-h-[var(--touch-target-min)] px-6"
              aria-label="Explore the Heritage — living museum of Cuban American Conch history"
            >
              Explore the Heritage
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link
              href="/story"
              className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm py-2"
              aria-label="View the story of El Meson de Pepe"
            >
              View the Story of El Meson de Pepe
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
