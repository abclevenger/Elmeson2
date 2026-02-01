"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_MAPS_URL } from "@/lib/site";

export default function ContactPageContent() {
  const { t } = useLanguage();
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/key-west-cuban-food.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
            {t.contact.title}
          </h1>
          <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <div className="pb-20 px-4 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-serif font-medium text-gray-900 mb-2">Visit Us</h2>
                  <address className="not-italic text-gray-700 leading-relaxed mb-3">
                    410 Wall Street<br />
                    Mallory Square<br />
                    Key West, FL 33040
                  </address>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium text-sm uppercase tracking-wider transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-serif font-medium text-gray-900 mb-2">Call Us</h2>
                  <a href="tel:+13052952620" className="text-gray-700 hover:text-primary transition-colors font-medium">
                    305-295-2620
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-serif font-medium text-gray-900 mb-2">Email</h2>
                  <a href="mailto:info@elmesondepepe.com" className="text-gray-700 hover:text-primary transition-colors">
                    info@elmesondepepe.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-serif font-medium text-gray-900 mb-2">Hours</h2>
                  <dl className="space-y-1 text-gray-700">
                  <div className="flex justify-between gap-4">
                    <dt>Mon – Thu</dt>
                    <dd>11am – 9pm</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Fri – Sun</dt>
                    <dd>11am – 10pm</dd>
                  </div>
                </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-lg font-serif font-medium text-gray-900 mb-4">Request Priority Seating</h2>
              <p className="text-gray-600 mb-6">
                Join our waitlist or request priority seating for your visit. We&apos;ll get you seated as soon as possible.
              </p>
              <Link
                href="/priority-seating"
                className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-black hover:text-[var(--gold)] transition-all shadow-md uppercase tracking-wider text-sm font-bold"
              >
                Priority Seating / Waitlist Form
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 h-64 mb-16">
            <iframe
              src="https://maps.google.com/maps?cid=12074568368866857534&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="El Mesón de Pepe — Mallory Square, Key West"
            />
          </div>

          {/* Contact form — link to dedicated page */}
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200 mb-8">
            <h2 className="text-xl font-serif font-medium text-gray-900 mb-2">Send us a message</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Have a question or feedback? Use our contact form and we&apos;ll get back to you.
            </p>
            <Link
              href="/contact-form"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-all shadow-md uppercase tracking-wider text-sm font-bold"
            >
              Contact form
            </Link>
          </div>

          {/* Birthday Club */}
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200 mb-8">
            <h2 className="text-xl font-serif font-medium text-gray-900 mb-2">{t.footer.birthday}</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Sign up for exclusive offers, event updates, and a taste of Cuba delivered to your inbox. Share your birthday for special treats.
            </p>
            <Link
              href="/birthday"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-all shadow-md uppercase tracking-wider text-sm font-bold"
            >
              {t.footer.birthdayCta}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
