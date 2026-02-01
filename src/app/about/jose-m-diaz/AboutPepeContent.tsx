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
  {
    id: "origins",
    year: "1941",
    label: "Origins",
    detail:
      "January 24, 1941: Pepe is born in Yaguajay, Cuba, the son of Sergio Díaz and Hortensia Marrero. He grows up with his sisters Sofía and Marta in a rural, close-knit community.",
  },
  {
    id: "youth",
    year: "Late 1950s",
    label: "Youth and Political Involvement",
    detail:
      "As a teenager, Pepe joins the early uprisings against Batista, aligned with Camilo Cienfuegos.",
  },
  {
    id: "imprisonment",
    year: "1959–1960s",
    label: "Opposition and Labor Camps",
    detail:
      "After the Cuban Revolution, Pepe becomes one of the early opponents of the new regime. He is sent to Cuban labor camps for about three years. While imprisoned, he begins cooking—preferable to forced agricultural labor—marking the start of his culinary path.",
  },
  {
    id: "spain",
    year: "Late 1960s–Early 1970s",
    label: "Leaving Cuba via Spain",
    detail:
      "With no direct visas to the U.S., Pepe leaves Cuba through Spain. He works in Spanish restaurants and mesones, refining his skills. The idea is born: when he reaches the U.S., he will open his own Spanish-style \"Mesón.\"",
  },
  {
    id: "miami",
    year: "1973",
    label: "Arrival in Miami",
    detail:
      "Pepe arrives in Miami. He works at a well-known restaurant (\"La Esquina de Tejas\"), cooks for Ronald Reagan, meets Kachi (Tania), and they begin their family.",
  },
  {
    id: "grocery-deli",
    year: "Mid-1970s–1980s",
    label: "From Grocery Store to Deli",
    detail:
      "The family opens a grocery store, living upstairs. Children help from a young age. The grocery evolves into a small deli, serving sandwiches through a take-out window.",
  },
  {
    id: "bolito",
    year: "1980s",
    label: "The Dish That Funded the Dream",
    detail:
      "Pepe creates \"el bolito\": yellow rice, black beans, ground beef, fried sweet plantain, and bread. This affordable, filling meal becomes a big seller and helps finance the future restaurant.",
  },
  {
    id: "first-meson",
    year: "1986",
    label: "First El Mesón Opens",
    detail:
      "The family purchases Papa's Place and opens the first El Mesón at 1215 Duval Street, Key West (previously a laundromat). Entirely family-run: Pepe cooks, Kachi works the front, children help however needed.",
  },
  {
    id: "fire",
    year: "1987",
    label: "Fire and Rebirth",
    detail:
      "The restaurant burns down on July 4th. The entire family works together to rebuild.",
  },
  {
    id: "reopening",
    year: "Late 1987",
    label: "Reopening for Fantasy Fest",
    detail:
      "The restaurant reopens within the same year, just in time for Fantasy Fest. Pepe's persistence convinces a city inspector to grant permission to open. The community strongly supports them.",
  },
  {
    id: "robleto",
    year: "1994",
    label: "Building a Long-Term Team",
    detail:
      "David Robleto (chef) and Laura Robleto (cook) join. The menu, quality, and family spirit remain the same. The transition from small family business to stable, professional operation.",
  },
  {
    id: "mallory",
    year: "1997",
    label: "Major Expansion",
    detail:
      "The restaurant expands to Mallory Square, 410 Wall Street. More seating, larger space, stronger retail component.",
  },
  {
    id: "big-pine",
    year: "1998",
    label: "Big Pine and Hurricane Georges",
    detail:
      "Pepe buys property in Big Pine Key. Hurricane Georges (1998) strikes shortly after.",
  },
  {
    id: "twenty-years",
    year: "2017",
    label: "20 Years and Community Service",
    detail:
      "The family celebrates 20 years at the Wall Street location. After a major hurricane, the restaurant stays open, serving hundreds of free meals to the community. El Mesón de Pepe's role as a community anchor is reinforced.",
  },
  {
    id: "present",
    year: "Present",
    label: "Legacy Continues",
    detail:
      "Pepe is partially retired, helping his daughter open a restaurant in Tampa. Many staff have been with the restaurant for decades. The lease with the city has been extended for another 10 years, securing the future.",
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
                José &ldquo;Pepe&rdquo; M. Díaz was born in Yaguajay, Cuba. His early life was shaped by
                rural community, work, and upheaval. After opposing the Cuban regime and
                enduring years of forced labor, he left the island and learned his craft in
                the mesones of Spain—where cooking was not only sustenance, but culture,
                discipline, and refuge.
              </p>
              <p>
                In 1973, Pepe arrived in Miami and soon after made his way to Key West. The
                Díaz family became Conch the way Conchs always have: by working, serving, and
                staying. Through the Cuban Club, Tony&apos;s Grocery, and a modest deli counter
                where regulars gathered for Cuban coffee and sandwiches, the foundation was
                laid. Those years were not incidental. They were preparation.
              </p>
              <p>
                In 1986, El Mesón de Pepe opened on Duval Street—small, family-run, and built
                on persistence. After a fire nearly ended it, the restaurant reopened the same
                year through sheer tenacity and community support. In 1997, El Mesón moved to
                Mallory Square, where it remains today: a permanent home for Cuban American
                heritage in Key West.
              </p>
              <p>
                For nearly four decades, the table has carried that purpose. Cuisine as
                cultural expression. Music, mojitos, recipes passed hand to hand—not preserved
                as nostalgia, but practiced as living tradition. We carry the weight of that
                history deliberately. We do not reference it. We live it.
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
              Pepe → El Mesón de Pepe
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
