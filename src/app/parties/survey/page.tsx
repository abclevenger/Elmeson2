import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Events Survey — El Mesón de Pepe Key West",
  description:
    "Tell us about your private event or party plans. Fill out our survey and we'll get back to you with a custom quote for your celebration at El Mesón de Pepe.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Private Events Survey | El Mesón de Pepe — Key West",
    description: "Private events survey. Share your party plans and we'll provide a custom quote.",
    url: "https://www.elmesondepepe.com/parties/survey",
  },
  alternates: { canonical: "/parties/survey" },
};

const SURVEY_URL = "https://link.ymbs.pro/widget/survey/kMRy3pvDuAIZdO18sI2m";

export default function PrivateEventsSurveyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Private Parties", url: "/parties" },
          { name: "Private Events Survey", url: "/parties/survey" },
        ]}
      />
      <div className="min-h-screen bg-[var(--background)]">
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Private Parties
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-4">
              Private Events Survey
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base leading-relaxed mb-8 font-light">
              Tell us about your event or party plans. We&apos;ll use your answers to prepare a custom quote and follow up with you.
            </p>
            <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--warm-100)] shadow-[0_8px_30px_rgba(28,27,25,0.08)]">
              <iframe
                src={SURVEY_URL}
                style={{ border: "none", width: "100%", minHeight: "800px" }}
                scrolling="no"
                id="kMRy3pvDuAIZdO18sI2m"
                title="Private Events Survey — El Mesón de Pepe"
              />
            </div>
            <p className="mt-8 text-center">
              <Link
                href="/parties"
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
              >
                Back to Private Parties
              </Link>
            </p>
          </div>
        </section>
      </div>
      <Script src="https://link.ymbs.pro/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
