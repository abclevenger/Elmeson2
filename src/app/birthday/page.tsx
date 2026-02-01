import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Birthday Club — El Mesón de Pepe | Key West",
  description:
    "Join our birthday club. Share your contact and birthday for exclusive offers and a taste of Cuba at El Mesón de Pepe, Mallory Square, Key West.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Birthday Club | El Mesón de Pepe — Key West",
    description: "Join our birthday club for exclusive offers. Contact and birthday form.",
    url: "https://www.elmesondepepe.com/birthday",
  },
  alternates: { canonical: "/birthday" },
};

export default function BirthdayPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Birthday Club", url: "/birthday" }]} />
      <div className="min-h-screen bg-[var(--background)]">
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Join the Family
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-4">
              Birthday Club
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base leading-relaxed mb-8 font-light">
              Share your contact and birthday for exclusive offers, event updates, and a taste of Cuba delivered to your inbox.
            </p>
            <div
              className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--warm-100)] shadow-[0_8px_30px_rgba(28,27,25,0.08)]"
              style={{ minHeight: "905px" }}
            >
              <iframe
                src="https://link.ymbs.pro/widget/form/0mI4YQNFbupQRbICs3BY"
                style={{ width: "100%", height: "905px", border: "none", borderRadius: "3px" }}
                id="inline-0mI4YQNFbupQRbICs3BY"
                title="Birthday Form — Contact &amp; Birthday"
              />
            </div>
          </div>
        </section>
      </div>
      <Script src="https://link.ymbs.pro/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
