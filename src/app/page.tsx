import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import InfoSection from "@/components/home/InfoSection";
import PeopleAsLegacy from "@/components/home/PeopleAsLegacy";
import MenuPreview from "@/components/home/MenuPreview";
import ExperienceHighlights from "@/components/home/ExperienceHighlights";
import PrivatePartiesSection from "@/components/home/PrivatePartiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { RestaurantSchema, BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "El Mesón de Pepe — A Living Museum of Cuban American Heritage | Key West",
  description: "Where Cuban culture became Cuban American history. A living archive of Cuban American Conch heritage in Mallory Square. Enter the legacy.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "El Mesón de Pepe — Living Museum of Cuban American Heritage | Key West",
    description: "Where Cuban culture became Cuban American history. Guardian of Cuban American Conch heritage at Mallory Square.",
    url: "https://www.elmesondepepe.com",
    images: [{ url: "/sunset-from-el-meson-2048x1087.png", width: 1200, height: 630, alt: "Mallory Square, Key West — El Mesón de Pepe" }],
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <RestaurantSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <Hero />
      <FeaturedEpisode
        imageSrc="/images/food-paradise-meals-over-miami.png"
        imageAlt="Food Paradise — Meals Over Miami: El Mesón de Pepe featured with Cuban meal and Travel Channel"
        ctaHref="https://www.imdb.com/title/tt13410186/"
      />
      <InfoSection />
      <PeopleAsLegacy />
      <MenuPreview />
      <TestimonialsSection />
      <ExperienceHighlights />
      <PrivatePartiesSection />
    </>
  );
}
