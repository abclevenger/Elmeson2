"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const EXPERIENCES = [
  { id: "sunset" as const, href: "/sunset", image: "/sunset-from-el-meson-2048x1087.png" },
  { id: "patio" as const, href: "/patio", image: "/images/key-west-bars-el-meson-patio-2048x751.png" },
  { id: "liveSalsa" as const, href: "/sunset", image: "/images/live-band-90-miles.png" },
];

export default function ExperienceHighlights() {
  const { t } = useLanguage();
  return (
    <section
      className="section-anchor bg-[var(--charcoal)] text-[var(--warm-100)] overflow-hidden"
      aria-label={t.experiences.ariaLabel}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-500)] mb-3">
            {t.experiences.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-2">
            {t.experiences.title}
          </h2>
          <div className="h-px w-16 bg-[var(--gold)] mx-auto mt-4" />
          <p className="text-[var(--warm-300)] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            {t.experiences.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {EXPERIENCES.map((item, index) => {
            const block = t.experiences[item.id];
            return (
              <ScrollReveal key={item.id} delay={index * 100}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-sm overflow-hidden border border-white/10 hover:border-[var(--gold)]/40 transition-all duration-500 bg-[var(--charcoal-muted)]"
                  aria-label={`${block.title} — ${block.blurb.slice(0, 50)}…`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={block.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--warm-100)] group-hover:text-[var(--gold)] transition-colors duration-300">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[var(--warm-300)] text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-[var(--warm-200)] transition-colors duration-300 font-light">
                      {block.blurb}
                    </p>
                    <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] group-hover:translate-x-1 transition-transform duration-300">
                      {t.experiences.enter}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
