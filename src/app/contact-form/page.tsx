import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us — El Mesón de Pepe Key West",
  description:
    "Send us a message. Contact El Mesón de Pepe in Mallory Square, Key West. We'd love to hear from you.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us | El Mesón de Pepe — Key West",
    description: "Send us a message. Contact form for El Mesón de Pepe.",
    url: "https://www.elmesondepepe.com/contact-form",
  },
  alternates: { canonical: "/contact-form" },
};

const CONTACT_FORM_ID = "HlSLUw7LS7ZdHcOlpl7j";

export default function ContactFormPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
          { name: "Contact Form", url: "/contact-form" },
        ]}
      />
      <div className="bg-white min-h-screen">
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/key-west-cuban-food.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
              Send us a message
            </h1>
            <div className="h-1.5 w-32 bg-secondary mx-auto my-4 shadow-lg" />
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-light drop-shadow-md">
              We&apos;d love to hear from you. Fill out the form below.
            </p>
          </div>
        </section>

        <div className="pb-20 px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <iframe
                src={`https://link.ymbs.pro/widget/form/${CONTACT_FORM_ID}`}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                id={`inline-${CONTACT_FORM_ID}`}
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact us"
                data-height="905"
                data-layout-iframe-id={`inline-${CONTACT_FORM_ID}`}
                data-form-id={CONTACT_FORM_ID}
                title="Contact us"
                className="w-full min-h-[905px]"
              />
            </div>
            <p className="mt-8 text-center">
              <Link
                href="/contact"
                className="link-underline text-gray-700 hover:text-primary font-medium text-sm uppercase tracking-wider"
              >
                Back to Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Script src="https://link.ymbs.pro/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
