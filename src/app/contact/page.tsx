import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Visit El Meson de Pepe in Key West",
  description:
    "Contact El Meson de Pepe in Mallory Square, Key West. Call us at 305-295-2620 or visit us at 410 Wall Street. Open daily 11 AM - 10 PM.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us - Visit El Meson de Pepe in Key West",
    description:
      "Contact El Meson de Pepe in Mallory Square, Key West. Call us at 305-295-2620 or visit us at 410 Wall Street.",
    url: "https://www.elmesondepepe.com/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contact" }]} />
      <ContactPageContent />
    </>
  );
}
