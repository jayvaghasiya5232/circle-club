export interface EcosystemCard {
  title: string;
  description: string;
  buttonText: string;
  thumbnail: string;
  href: string;
}

export const ECOSYSTEM_CARD: EcosystemCard[] = [
  {
    title: "Prestige Rental Cars",
    description: "Direct access to high-performance and ultra-luxury vehicles.",
    buttonText: "Contact Our Rental Car Experts",
    thumbnail: "/images/ecosystem/eco_1.webp",
    href: "/contact?type=cars",
  },
  // {
  //   title: "Private Villas",
  //   description:
  //     "Short and long-term curated properties in Monaco and the Riviera.",
  //   buttonText: "Contact Property Advisor",
  //   thumbnail: "/images/ecosystem/eco_2.webp",
  //   href: "/contact?type=real-estate",
  // },
  {
    title: "Exclusive Summer Rentals",
    description:
      "Short and long-term curated properties in Monaco and the Riviera.",
    buttonText: "Contact Our Villa Rental Experts",
    thumbnail: "/images/ecosystem/eco_2.webp",
    href: "/contact?type=real-estate",
  },
  {
    title: "Car Support",
    description: "Professional detailing facilities in Monaco & Cannes.",
    buttonText: "Contact Detailing Expert",
    // buttonText: "Contact Garage Manager",
    thumbnail: "/images/ecosystem/eco_10.jpeg",
    href: "/contact?type=cars",
  },
  {
    title: "Valet Services",
    description: "Prestigious restaurant partnerships.",
    buttonText: "Contact Valet Director",
    thumbnail: "/images/ecosystem/eco_9.webp",
    href: "/contact?type=cars",
  },
];
