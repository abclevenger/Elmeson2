"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivatePartiesSection() {
  const { t } = useLanguage();
  return (
    <section
      className="section-anchor bg-[var(--background)] text-[var(--charcoal)] overflow-hidden border-t border-[var(--border)]"
      aria-label={t.privateParties.ariaLabel}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <ScrollReveal className="flex-1 space-y-6 order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)]">
              {t.privateParties.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] leading-tight">
              {t.privateParties.title}
            </h2>
            <div className="h-px w-14 bg-[var(--gold)]" aria-hidden="true" />

            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed max-w-xl font-light">
              {t.privateParties.body}
            </p>

            <div className="pt-2">
              <Link
                href="/parties"
                className="btn-primary inline-flex"
                aria-label={t.privateParties.ctaAria}
              >
                {t.privateParties.cta}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={150}
            className="flex-1 relative h-[300px] sm:h-[400px] md:h-[460px] w-full order-1 md:order-2"
          >
            <div className="absolute inset-0 border border-[var(--border)] overflow-hidden">
              <Image
                src="/images/2017/10/el-meson-restaurant-1-768x259.jpg"
                alt={t.privateParties.imgAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={88}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
