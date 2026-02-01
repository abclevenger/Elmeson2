import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Featured on Food Paradise — Meals Over Miami",
  description:
    "El Mesón de Pepe was featured in Food Paradise (Travel Channel) — 'Meals Over Miami' S14 E2, aired September 2, 2020 — as a living expression of Cuban American heritage in Key West.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Featured on Food Paradise | El Mesón de Pepe",
    description: "Food Paradise (Travel Channel) — Meals Over Miami S14 E2, September 2, 2020. Cuban American heritage in Key West.",
    url: "https://www.elmesondepepe.com/featured",
  },
  alternates: { canonical: "/featured" },
};

/**
 * Placeholder episode-details page.
 * TODO: Add IMDb (or Travel Channel) link when available; optionally embed or link to episode clip.
 */
export default function FeaturedPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Featured", url: "/featured" }]} />
      <div className="min-h-screen bg-[var(--background)]">
        <section className="py-20 md:py-28 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Documented in American Culinary History
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-4">
              Featured on Food Paradise — &ldquo;Meals Over Miami&rdquo;
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mb-8" />
            <p className="text-[var(--warm-700)] text-lg leading-relaxed mb-6 font-light">
              El Mesón de Pepe was featured in Food Paradise not simply as a restaurant, but as a
              living expression of Cuban American heritage in Key West—where food, family, and
              history converge.
            </p>
            <p className="text-[var(--warm-700)] text-sm mb-10">
              <cite className="not-italic text-[var(--warm-500)]">
                Food Paradise (Travel Channel) — &ldquo;Meals Over Miami&rdquo; S14 E2, aired September 2, 2020
              </cite>
            </p>
            <p className="mb-10">
              <a
                href="https://www.imdb.com/title/tt13410186/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
              >
                Watch on IMDb — Meals Over Miami
              </a>
            </p>
            <Link
              href="/"
              className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
            >
              Return home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
