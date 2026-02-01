import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import StoryPageContent from "./StoryPageContent";

export const metadata: Metadata = {
  title: "The Archive — Living Museum of Cuban American Heritage",
  description:
    "El Mesón de Pepe guards Cuban American Conch history. The Díaz family, Key West, and the table that turned Cuban culture into permanent legacy.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Archive | El Mesón de Pepe — Living Museum of Cuban American Heritage",
    description: "Where Cuban culture became Cuban American history. The story, the people, the permanence.",
    url: "https://www.elmesondepepe.com/story",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "El Mesón de Pepe — Mallory Square, Key West" }],
  },
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "The Archive", url: "/story" }]} />
      <StoryPageContent />
    </>
  );
}
