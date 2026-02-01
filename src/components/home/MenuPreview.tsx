"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FEATURED = [
  { id: "completaCaballoGrande" as const, image: "/images/lechon-asado.png", price: "—" },
  { id: "cayoHueso" as const, image: "/images/2017/05/ultimate-guide-to-the-cuban-sandwich-768x244.jpg", price: "—" },
  { id: "pepesCubanNachos" as const, image: "/images/cuban-nachos.png", price: "—" },
];

export default function MenuPreview() {
  const { t } = useLanguage();
  return (
    <section
      className="section-anchor bg-[var(--warm-100)] text-[var(--charcoal)] overflow-hidden border-t border-[var(--border)]"
      aria-label={t.menuPreview.ariaLabel}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
            {t.menuPreview.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-2">
            {t.menuPreview.title}
          </h2>
          <div className="h-px w-16 bg-[var(--gold)] mx-auto mt-4" />
          <p className="text-[var(--warm-700)] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            {t.menuPreview.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {FEATURED.map((item, index) => {
            const block = t.menuPreview[item.id];
            const menuAnchor = item.id === "completaCaballoGrande" ? "/menu#featured" : item.id === "cayoHueso" ? "/menu#sandwiches" : "/menu#tapas";
            return (
              <ScrollReveal key={item.id} delay={index * 80}>
                <Link href={menuAnchor} className="block h-full" aria-label={`View ${block.name} on our menu`}>
                <article className="group flex flex-col h-full bg-[var(--background)] border border-[var(--border)] overflow-hidden transition-all duration-300 hover:border-[var(--gold)]/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={block.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={88}
                    />
                    <div
                      className="absolute inset-0 ring-1 ring-inset ring-[var(--charcoal)]/5"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-baseline gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--charcoal)]">
                        {block.name}
                      </h3>
                      {item.price !== "—" && (
                        <span className="text-sm font-medium uppercase tracking-wider text-[var(--gold)] shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--warm-700)] text-sm md:text-base leading-relaxed mb-4">
                      {block.description}
                    </p>
                    <p className="text-[var(--warm-700)] text-sm leading-relaxed italic border-l-2 border-[var(--gold)] pl-4 mt-auto">
                      {block.story}
                    </p>
                  </div>
                </article>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="text-center mt-14 md:mt-20">
          <Link
            href="/menu"
            className="btn-primary inline-flex"
            aria-label={t.menuPreview.ctaAria}
          >
            {t.menuPreview.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
