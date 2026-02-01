export interface LegacyFigure {
  id: string;
  name: string;
  role: string;
  dates: string;
  quote?: string;
  impact: string;
  image?: string;
  imageAlt?: string;
}

export const LEGACY_FIGURES: LegacyFigure[] = [
  {
    id: "pepe-diaz",
    name: "Jose \"Pepe\" M. Diaz",
    role: "Chef, Founder",
    dates: "b. Yaguajay, Cuba",
    quote: "We didn't bring a restaurant. We brought a history.",
    impact: "Trained in the mesones of Spain; brought his craft to Key West via Miami. From the Cuban Club to Tony's Grocery to El Mesón de Pepe on Duval (1986) and Mallory Square (1997). His table has been a permanent site of Cuban American Conch heritage for nearly four decades.",
    image: "/images/jose-m-diaz-portrait.png",
    imageAlt: "Jose \"Pepe\" M. Diaz — Chef, Founder of El Mesón de Pepe, Key West",
  },
  {
    id: "jose-marti",
    name: "José Martí",
    role: "Poet, Revolutionary",
    dates: "1853–1895",
    quote: "Key West became a cradle of Cuban liberty.",
    impact: "His words and his cause found refuge in Cayo Hueso. The San Carlos Institute, founded by Cuban exiles in 1871, welcomed him; the island sustained the independence movement. The bond between Key West and Cuba—cultural, political, culinary—remains inseparable.",
    image: "/images/jose-marti-portrait.png",
    imageAlt: "José Martí — Key West and Cuban independence",
  },
  {
    id: "diazes",
    name: "The Díaz Family",
    role: "Keepers of the Table",
    dates: "1973–present",
    impact: "Three generations in Key West. From grocery and deli to a landmark table at Mallory Square. They did not simply preserve recipes—they turned Cuban tradition into Conch permanence. The dining room, the patio, the music: all continuity. Today, Jose M. Diaz Jr., son of Jose \"Pepe\" M. Diaz, carries the legacy forward as General Manager and Co-owner.",
    image: "/images/diaz-family.png",
    imageAlt: "The Díaz family — three generations, El Mesón de Pepe, Key West",
  },
];
