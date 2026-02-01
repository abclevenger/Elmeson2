import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sunset } from "lucide-react";
import { BreadcrumbSchema } from "@/lib/schema";
import { GOOGLE_MAPS_URL } from "@/lib/site";
import SunsetTime from "@/components/SunsetTime";

export const metadata: Metadata = {
  title: "Sunset Celebration — Live Music & Key West Sunset | El Mesón de Pepe",
  description:
    "In the heart of the Mallory Square Sunset Celebration. Live Caribbean music nightly, Cuban tapas, and the Key West sunset. No reservations—walk in or join the waitlist for a specific time.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sunset Celebration — Live Music & Key West Sunset | El Mesón de Pepe",
    description: "In the heart of the Mallory Square Sunset Celebration. Live Caribbean music nightly, Cuban tapas, and the Key West sunset.",
    url: "https://www.elmesondepepe.com/sunset",
    images: [{ url: "/sunset-from-el-meson-2048x1087.png", width: 1200, height: 630, alt: "Sunset Celebration at El Mesón de Pepe" }],
  },
  alternates: { canonical: "/sunset" },
};

export default function SunsetCelebrationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Sunset Celebration", url: "/sunset" }]} />

      <div className="min-h-screen bg-[var(--background)]">
        <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/sunset-from-el-meson-2048x1087.png"
              alt="Mallory Square Sunset Celebration — Key West"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--charcoal)]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-transparent to-[var(--charcoal)]/30" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-3">
              The Key West Sunset, Live Music, and You
            </h1>
            <div className="h-0.5 w-20 bg-[var(--gold)] mx-auto mb-4" />
            <p className="text-lg md:text-xl text-[var(--warm-300)] max-w-2xl mx-auto font-light mb-6">
              We&apos;re in the middle of the Mallory Square Sunset Celebration. Cuban tapas, cold drinks, and the island&apos;s only local Salsa band—right at the water.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--charcoal)]/40 border border-[var(--gold)]/40 backdrop-blur-sm mb-6">
              <Sunset className="w-5 h-5 text-[var(--gold)] shrink-0" aria-hidden="true" />
              <span className="text-[var(--warm-200)] text-sm sm:text-base font-medium">
                Sunset tonight:{" "}
                <span className="text-[var(--gold)] font-semibold">
                  <SunsetTime />
                </span>
              </span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/priority-seating" className="btn-primary btn-waitlist inline-flex">
                Join the Waitlist
              </Link>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex border border-[var(--warm-100)] text-[var(--warm-100)] hover:bg-[var(--warm-100)] hover:text-[var(--charcoal)]">
                Get Directions
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--warm-100)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Tonight&apos;s Flow</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ol className="space-y-4 text-[var(--warm-700)] text-base md:text-lg font-light">
              <li><strong className="text-[var(--charcoal)] font-medium">1. Arrive</strong> — Get to Mallory Square 1–2 hours before sunset. Walk in or put your name on the waitlist for a specific time.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">2. Find us</strong> — We&apos;re in the heart of the celebration. Patio and dining right on the water.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">3. Order</strong> — <Link href="/patio" className="text-[var(--gold)] hover:underline">Mojitos, tapas, or a full dinner</Link>. Live Caribbean music nightly.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">4. Sunset</strong> — The Gulf, the sky, the crowd. One of the world&apos;s best sunsets.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">5. Stay or head to Duval</strong> — Keep the night going here or walk to Duval.</li>
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Why the Sunset</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ul className="space-y-3 text-[var(--warm-700)] text-base md:text-lg font-light">
              <li><strong className="text-[var(--charcoal)]">In the middle of the Mallory Square Sunset Celebration</strong> — we&apos;re part of it</li>
              <li><strong className="text-[var(--charcoal)]">Live Caribbean music nightly</strong> — Caribe of Key West, the island&apos;s only local Salsa band</li>
              <li><strong className="text-[var(--charcoal)]">Cuban tapas and cocktails</strong> — <Link href="/patio" className="text-[var(--gold)] hover:underline">full drink and cocktail menu on our Patio Bar page</Link></li>
              <li><strong className="text-[var(--charcoal)]">Front-row Key West sunset views</strong> over the Gulf</li>
              <li><strong className="text-[var(--charcoal)]">No reservations</strong> — walk in (first come, first served) or join the waitlist for a specific time</li>
              <li><strong className="text-[var(--charcoal)]">Couples and groups</strong> — romantic or lively, same waterfront patio</li>
            </ul>
            <p className="mt-8 text-[var(--warm-700)] text-lg leading-relaxed text-center">
              When you think of Key West, the Mallory Square Sunset Celebration is usually at the top of the list. We&apos;re right in the middle of it—and nothing pairs better with that golden hour than a mojito and a plate of Cuban tapas. The celebration starts about two hours before sunset. Come early, grab a table, and stay for the show.
            </p>
            <div className="relative aspect-video w-full max-w-2xl mx-auto mt-10 rounded overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/sunset-dramatic.png"
                alt="Dramatic Key West sunset over the Gulf — orange and purple sky"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="text-center mt-8">
              <a href="https://www.sunsetcelebration.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline font-medium text-base uppercase tracking-wider">
                Sunset Celebration ↗
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-[var(--warm-100)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Sunset drinks &amp; bites</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-[var(--warm-700)] text-center mb-8 font-light">
              Sunset calls for a drink and a bite. We do Cuban: mojitos, cold beers, and tapas made for sharing.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-[var(--background)] border border-[var(--border)]">
                <h3 className="font-serif font-medium text-[var(--charcoal)] mb-2">Mojito</h3>
                <p className="text-[var(--warm-700)] text-sm font-light">Mint, lime, rum. The drink that goes with a Key West sunset.</p>
              </div>
              <div className="p-6 bg-[var(--background)] border border-[var(--border)]">
                <h3 className="font-serif font-medium text-[var(--charcoal)] mb-2">Cuba Libre</h3>
                <p className="text-[var(--warm-700)] text-sm font-light">Rum and Mexican Coke on ice with lime. Simple, cold, classic.</p>
              </div>
            </div>
            <p className="text-center mt-6">
              <Link href="/patio" className="text-[var(--gold)] hover:underline font-medium text-sm uppercase tracking-wider">
                See our Patio Bar
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">What guests say about the Sunset</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ul className="space-y-6 text-[var(--warm-700)] text-base md:text-lg font-light italic">
              <li>&ldquo;Sat on the patio for sunset with the band—couldn&apos;t have asked for more.&rdquo;</li>
              <li>&ldquo;This is the Mallory Square experience we were looking for.&rdquo;</li>
              <li>&ldquo;Live music, mojitos, and the sun going down. Perfect Key West evening.&rdquo;</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-[var(--warm-100)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Sunset FAQ</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <dl className="space-y-6 text-[var(--warm-700)]">
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Do we take reservations?</dt>
                <dd>We don&apos;t take reservations. You can walk in (first come, first served) or put your name on the waitlist for a specific time. Arrive early for the best patio seats at sunset.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">What&apos;s the best time to come for the Key West sunset?</dt>
                <dd>Get here 1–2 hours before sunset. You&apos;ll get a seat, enjoy the build-up, and catch the full show.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">When does the live music play?</dt>
                <dd>Live Caribbean music every evening, starting before sunset. We&apos;re open before, during, and after the celebration.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Can we come with a group?</dt>
                <dd>Yes. We seat couples and groups. Walk in or join the waitlist for a specific time; we fit you in as tables open.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Is it okay for families?</dt>
                <dd>Yes. All ages welcome. Kids love the music and the sunset.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">What should we wear?</dt>
                <dd>Key West casual. Comfortable, relaxed. You&apos;re at the water watching the sunset.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)] mb-6">
              Join us at Mallory Square
            </h2>
            <div className="p-6 md:p-8 bg-[var(--warm-100)] border border-[var(--border)] inline-block text-left mb-8">
              <p className="text-[var(--charcoal)] font-medium mb-1">Monday – Thursday</p>
              <p className="text-[var(--warm-700)] mb-4">11am – 9pm</p>
              <p className="text-[var(--charcoal)] font-medium mb-1">Friday – Sunday</p>
              <p className="text-[var(--warm-700)] mb-4">11am – 10pm</p>
              <p className="text-[var(--warm-700)] text-sm mt-4">
                First come, first served. We&apos;re open for lunch.
              </p>
            </div>
            <p className="text-[var(--warm-700)] text-lg font-light max-w-xl mx-auto mb-8">
              The Key West sunset happens every night. We&apos;re here for it—with live music, Cuban food, and a seat by the water. No reservations—walk in or join the waitlist for a specific time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex">
                Get Directions
              </a>
              <Link href="/priority-seating" className="btn-primary btn-waitlist inline-flex">
                Join Waitlist
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
