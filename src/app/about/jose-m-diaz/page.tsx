import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import AboutPepeContent from "./AboutPepeContent";

export const metadata: Metadata = {
  title: "Jose \"Pepe\" M. Diaz — Cuban American Heritage | Key West",
  description:
    "A life that carried history across water. Jose \"Pepe\" M. Diaz, founder of El Mesón de Pepe: from Yaguajay to Key West, survival as craft, hospitality as inheritance.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jose \"Pepe\" M. Diaz | El Mesón de Pepe — Living Museum of Cuban American Heritage",
    description:
      "Cuban American heritage figure in Key West. A life that turned survival into hospitality.",
    url: "https://www.elmesondepepe.com/about/jose-m-diaz",
  },
  alternates: { canonical: "/about/jose-m-diaz" },
};

export default function AboutJoseMDiazPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "The Archive", url: "/story" },
          { name: "Jose \"Pepe\" M. Diaz", url: "/about/jose-m-diaz" },
        ]}
      />
      <AboutPepeContent />
    </>
  );
}
