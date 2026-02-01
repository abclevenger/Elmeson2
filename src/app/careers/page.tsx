import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Join Our Family — Careers at El Mesón de Pepe | Key West Jobs",
  description:
    "El Mesón de Pepe is hiring in Key West. Join our family for front-of-house and back-of-house roles. Servers, bartenders, hosts, line cooks, and more. Apply today.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Careers | El Mesón de Pepe — Key West Cuban Restaurant Jobs",
    description: "Join our family. Key West jobs in an authentic Cuban restaurant. Servers, bartenders, hosts, kitchen staff.",
    url: "https://www.elmesondepepe.com/careers",
  },
  alternates: { canonical: "/careers" },
};

const ROLES_TABLE = [
  { role: "Host", responsibilities: "Greet and seat guests, manage reservations, maintain waiting list", skills: "Friendly demeanor, organizational skills, clear communication" },
  { role: "Server", responsibilities: "Welcome guests, take orders, provide attentive service", skills: "Clear communication, multitasking, friendly attitude" },
  { role: "Bartender", responsibilities: "Prepare drinks, run bar service, engage with guests", skills: "Mixology basics, guest engagement, speed" },
  { role: "Line Cook", responsibilities: "Prepare dishes, maintain station, follow recipes", skills: "Culinary fundamentals, organization, teamwork" },
  { role: "Food Expediter", responsibilities: "Coordinate orders, ensure accuracy and presentation, manage timing", skills: "Strong communication, organizational skills, attention to detail" },
  { role: "Sanitation", responsibilities: "Maintain cleanliness, wash dishes, dispose of waste, follow health codes", skills: "Attention to detail, efficiency, knowledge of sanitation practices" },
  { role: "Floor Manager", responsibilities: "Oversee dining room operations, manage FOH staff, ensure guest satisfaction", skills: "Leadership, problem-solving, customer service, staff management" },
  { role: "Bar Manager", responsibilities: "Manage bar staff, inventory, cocktail menu, ensure profitability", skills: "Leadership, inventory management, mixology expertise, financial acumen" },
];

const BENEFITS_TABLE = [
  { benefit: "Flexible Scheduling", description: "Shift options that fit your life", value: "High" },
  { benefit: "Employee Discounts", description: "Discounted meals for staff", value: "Medium" },
  { benefit: "Career Advancement", description: "Promotions and on-the-job training", value: "High" },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Careers", url: "/careers" }]} />
      <div className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[var(--charcoal)] text-[var(--warm-100)]">
          <div className="absolute inset-0 bg-[url('/images/key-west-restaurant-private-parties-2048x751.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[var(--charcoal)]/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] mb-3">We&apos;re Hiring</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-4">
              Join Our Family at El Mesón de Pepe
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-lg md:text-xl text-[var(--warm-200)] font-light max-w-3xl mx-auto">
              Key West jobs in an authentic Cuban restaurant. We&apos;re looking for hardworking, friendly people to join our family.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-16 md:space-y-24">
          {/* Intro */}
          <section>
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light">
              El Mesón de Pepe — a Key West favorite known for true Cuban flavor and warm hospitality — is looking for hardworking, friendly people to join our family. Below you&apos;ll find the types of roles we hire for, the perks of working at our family‑owned restaurant in Mallory Square, and the skills that help teammates thrive. Whether you&apos;re interested in front‑of‑house roles like server, host, or bartender, or back‑of‑house kitchen work, our team offers a lively, hands‑on environment and clear paths to grow. Read on to learn how to apply, advance your career, and get answers to common questions about working with us.
            </p>
          </section>

          {/* Career opportunities */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              What Career Opportunities Are Available at El Mesón de Pepe in Key West?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              We hire for a mix of positions that fit different strengths and schedules. From our busy dining room to the kitchen where recipes are perfected, El Mesón de Pepe is a place to learn, earn, and be part of a close‑knit team that celebrates Cuban food and island life.
            </p>
          </section>

          {/* Front-of-house */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              Which Front-of-House Roles Can You Apply for at Our Cuban Restaurant?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              Front‑of‑house openings usually include hosts, servers, bartenders, and floor managers. Hosts greet guests, manage reservations, and set the tone for a welcoming experience. Servers take orders, provide attentive service, and make sure every visit feels welcoming and well paced. Bartenders craft classic and inventive cocktails, run bar service, and connect with guests to elevate their experience. Floor managers oversee dining room operations, ensuring smooth service and guest satisfaction. All these roles call for clear communication, a friendly attitude, and the ability to stay calm and efficient during busy service.
            </p>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              It helps to understand how front‑of‑house and back‑of‑house roles differ: each needs different skills and ways of working, and both are essential to smooth service.
            </p>
          </section>

          {/* Back-of-house */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              What Back-of-House Positions Support Our Authentic Cuban Cuisine?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              Our back‑of‑house team keeps food consistent and delicious. Key roles include line cooks who execute recipes and manage station prep, food expediters who ensure orders are accurate and timely, kitchen assistants who keep the kitchen clean, stocked, and organized, and sanitation staff who maintain hygiene standards. Line cooks need solid knife skills, cooking fundamentals, and the ability to work quickly during service. Food expediters require strong organizational and communication skills. Kitchen assistants and sanitation staff make sure everything runs smoothly so the whole team can do their best work.
            </p>
          </section>

          {/* Why choose us */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              Why Choose a Career at El Mesón de Pepe: Benefits and Company Culture
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              Working here means joining a family‑minded crew that cares about one another and the food we serve. Our culture is built on teamwork, respect, and a shared love for Cuban cooking and island living.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">How Does Our Family-Owned Heritage Enhance Your Work Experience?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              As a family‑owned restaurant, we treat staff like family — we learn names, celebrate milestones, and invest in long‑term relationships. That heritage creates a supportive workplace where people feel connected, heard, and proud of the food and service they deliver.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">What Unique Perks Come with Working in Mallory Square&apos;s Vibrant Atmosphere?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              Mallory Square brings daily energy — street performers, sunset celebrations, and visitors from around the world. Working here means you&apos;ll meet interesting people, enjoy a lively backdrop to your shift, and build strong guest‑service skills from interacting with a wide mix of locals and travelers.
            </p>
          </section>

          {/* How to apply */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              How Can You Apply for El Mesón de Pepe Job Openings in Key West?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light mb-6">
              Applying is simple and welcoming. We look for people who care about great food and friendly service — if that sounds like you, we want to hear from you.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">What Is the Hiring Process for Server and Bartender Jobs?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              For servers, hosts, and bartenders, the process usually starts with an application and moves to a short interview. Expect questions about your experience, availability, and how you handle busy shifts. We keep interviews relaxed so candidates can be themselves and show what they do best.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">Where Can You Find Current Job Listings and Submit Applications?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              Current openings are posted on our website — that&apos;s the best place to apply. Check back often, especially before and during the busy season, since positions open regularly as our needs change.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              What Skills and Qualifications Are Needed for Key West Restaurant Jobs at El Mesón de Pepe?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              Success here comes from a mix of practical skills, a positive attitude, and a willingness to learn. Specific qualifications vary by role, but teamwork and reliability matter everywhere.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">What Experience Is Preferred for Front-of-House Positions?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              Front‑of‑house candidates with customer service or restaurant experience are preferred. Strong communication, a friendly manner, multitasking, and the ability to stay composed during busy times are key. For management roles like floor manager or bar manager, leadership and operational experience are highly valued. We also welcome people ready to learn and grow on the job.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">Which Culinary Skills Are Essential for Kitchen Staff Roles?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              Kitchen staff should know basic food‑prep techniques, kitchen safety, and sanitation practices. Being able to work well with others, follow recipes, and keep your station organized are essential. For roles like food expediter, strong communication and organizational skills are crucial. A real interest in Cuban cuisine and a willingness to learn our recipes are big pluses.
            </p>
          </section>

          {/* Career growth */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              How Does Working at El Mesón de Pepe Support Career Growth in the Hospitality Industry?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              We support teammates who want to build a career in hospitality by offering hands‑on training and chances to advance. Many of our managers and trainers started in entry‑level roles.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">What Training and Development Opportunities Are Offered?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              New hires get practical, on‑the‑job training for their role — from service flow to menu knowledge. Ongoing opportunities like cross‑training and skill refreshers help staff expand their abilities and prepare for the next step, potentially into roles like floor manager or bar manager.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">How Can Employees Advance to Management Positions?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              We promote from within whenever possible. Team members who show leadership, dependability, and a commitment to our values are often mentored and given chances to move into supervisory and management roles, such as floor manager or bar manager.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              What Are Common Questions About Working at El Mesón de Pepe in Key West?
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              We hear the same questions from applicants — pay, scheduling, and seasonality — so here are straightforward answers to help you decide if we&apos;re the right fit.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">What Are the Typical Wages and Benefits for Restaurant Jobs Here?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
              Wages are competitive and depend on experience and position. Staff also enjoy flexible scheduling, team meal discounts, and opportunities for advancement. We aim to reward hard work and recognize strong contributors.
            </p>
            <h3 className="text-xl font-serif font-light text-[var(--charcoal)] mb-3">How Does Seasonal Employment Affect Job Availability?</h3>
            <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
              Because Key West is a tourist destination, hiring often increases in busy seasons and eases during quieter months. We do our best to offer stable, year‑round positions, but some openings may be seasonal depending on demand.
            </p>
          </section>

          {/* Roles table */}
          <section className="overflow-x-auto">
            <h2 className="text-2xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              Roles at a Glance
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <div className="border border-[var(--border)] rounded-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--warm-100)] border-b border-[var(--border)]">
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Role</th>
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Responsibilities</th>
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Skills Required</th>
                  </tr>
                </thead>
                <tbody>
                  {ROLES_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-0 bg-[var(--background)]">
                      <td className="p-4 font-medium text-[var(--charcoal)]">{row.role}</td>
                      <td className="p-4 text-[var(--warm-700)]">{row.responsibilities}</td>
                      <td className="p-4 text-[var(--warm-700)]">{row.skills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Benefits table */}
          <section className="overflow-x-auto">
            <h2 className="text-2xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-6">
              Benefits at a Glance
            </h2>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <div className="border border-[var(--border)] rounded-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--warm-100)] border-b border-[var(--border)]">
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Benefit</th>
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Description</th>
                    <th className="p-4 font-serif font-medium text-[var(--charcoal)]">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {BENEFITS_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-0 bg-[var(--background)]">
                      <td className="p-4 font-medium text-[var(--charcoal)]">{row.benefit}</td>
                      <td className="p-4 text-[var(--warm-700)]">{row.description}</td>
                      <td className="p-4 text-[var(--warm-700)]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-12 border-t border-[var(--border)]">
            <p className="text-[var(--warm-700)] text-lg leading-relaxed font-light mb-8">
              El Mesón de Pepe is more than a job — it&apos;s a community where people learn from each other, grow their skills, and share in serving memorable Cuban food. If you&apos;re ready to join a spirited team in the heart of Key West, we&apos;d love to meet you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex justify-center min-h-[var(--touch-target-min)] px-6"
              >
                Apply Now — Get in Touch
              </Link>
              <Link
                href="/"
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider inline-flex items-center justify-center py-3"
              >
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
