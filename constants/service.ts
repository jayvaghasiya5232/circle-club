export interface serviceList {
  id: string;
  title: string;
  bullets?: string[];
  description?: string;
  overlay?: string;
  href: string;
  cta: string;
  src: string;
}

// export const SERVICES_LIST: serviceList[] = [
//   {
//     id: "001",
//     title: "Automotive Detailing - Monaco & Cannes",
//     bullets: [
//       "Two detailing garages delivering high-end automotive care.",
//       "Precision, discretion, excellence.",
//     ],
//     cta: "CONTACT Us",
//     src: "/images/ecosystem/eco_6.webp",
//     href: "/contact?type=cars",
//   },
//   {
//     id: "002",
//     title: "Prestigious Valet Services - Cannes",
//     bullets: [
//       "Two active valet services serving prestigious restaurants in Cannes.",
//       "Operational excellence, trusted presence, premium service.",
//     ],
//     cta: "CONTACT Us",
//     src: "/images/ecosystem/eco_9.webp",
//     href: "/contact?type=cars",
//   },
//   {
//     id: "003",
//     title: "Monaco Property Expertise",
//     bullets: [
//       "Strategic access to Monaco’s real estate market.",
//       "Acquisition, advisory, and high-value positioning.",
//       "Operated by experienced professionals with strong local presence.",
//     ],
//     cta: "CONTACT Us",
//     src: "/images/ecosystem/eco_3.webp",
//     href: "/contact?type=real-estate",
//   },
//   {
//     id: "004",
//     title: "Luxury Villas - Short & Long Term",
//     bullets: [
//       "Exclusive villa portfolio managed directly.",
//       "Short-term stays during major events.",
//       "Long-term premium agreements.",
//     ],
//     cta: "CONTACT VILLA SPECIALIST",
//     src: "/images/ecosystem/eco_7.webp",
//     overlay: "We structure deals, not just bookings",
//     href: "/contact?type=real-estate",
//   },
//   {
//     id: "005",
//     title: "Prestige Rental Fleet",
//     description:
//       "No brokers. No hidden intermediaries. For specific requests, we work directly with trusted partners — always with full control.",
//     cta: "SPEAK WITH AUTOMOTIVE DIRECTOR",
//     src: "/images/ecosystem/eco_8.webp",
//     href: "/contact?type=cars",
//   },
// ];

export const SERVICES_LIST: serviceList[] = [
  {
    id: "001",
    title: "Luxury Villas - Short & Long Term",
    bullets: [
      "Exclusive villa portfolio managed directly.",
      "Short-term stays during major events.",
      "Long-term premium agreements.",
    ],
    cta: "CONTACT VILLA SPECIALIST",
    src: "/images/ecosystem/eco_7.webp",
    overlay: "",
    href: "/contact?type=real-estate",
  },
  {
    id: "002",
    title: "Prestige Rental Fleet",
    description:
      "No brokers. No hidden intermediaries. For specific requests, we work directly with trusted partners — always with full control.",
    cta: "SPEAK WITH AUTOMOTIVE DIRECTOR",
    src: "/images/ecosystem/eco_8.webp",
    href: "/contact?type=cars",
  },
  {
    id: "003",
    title: "Transport — Van,Helicopter & Jet",
    bullets:[
      "Private van transfers across Monaco and the French Riviera.",
"Helicopter charters — Nice, Cannes, Monaco.",
"Private jet coordination for international arrivals.",
"Door-to-door logistics, fully managed."
    ],
    cta: "contact us",
    src: "/images/ecosystem/eco_8.webp",
    href: "/contact?type=cars",
  },
  {
    id: "004",
    title: "Automotive Detailing - Monaco & Cannes",
    bullets: [
      "Two detailing garages delivering high-end automotive care.",
      "Precision, discretion, excellence.",
    ],
    cta: "CONTACT DETAILING EXPERT",
    src: "/images/ecosystem/eco_10.jpeg",
    href: "/contact?type=cars",
  },
  {
    id: "005",
    title: "Prestigious Valet Services - Cannes",
    bullets: [
      "Two active valet services serving prestigious restaurants in Cannes.",
      "Operational excellence, trusted presence, premium service.",
    ],
    cta: "CONTACT VALET DIRECTOR",
    src: "/images/ecosystem/eco_9.webp",
    href: "/contact?type=cars",
  },
  // {
  //   id: "006",
  //   title: "Monaco Property",
  //   bullets: [],
  //   cta: "CONTACT Us",
  //   src: "",
  //   href: "/contact?type=cars",
  // }
  
];