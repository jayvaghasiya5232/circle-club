export const TERRACE_LIST = [
  "Panoramic views overlooking the circuit.",
  "Premium hospitality environment.",
  "Strategic positioning during race weekend.",
  "This is controlled access and not resold tickets.",
];

export const YACHT_LIST = [
  "Front-row positioning in Port Hercule.",
  "Private hosting environment.",
  "Immersive race atmosphere from the sea.",
];

export type HospitalityItem = {
  num: string;
  title: string;
  description: string;
};

export const HOSPITALITY_ITEMS: HospitalityItem[] = [
  {
    num: "01",
    title: "Premium Champagne & Cocktails",
    description:
      "Signature cocktails and premium spirits served throughout the day on the private terrace",
  },
  {
    num: "02",
    title: "Gourmet Culinary Selection",
    description:
      "Curated culinary experience from arrival to close, crafted for an international clientele",
  },
  {
    num: "03",
    title: "Live DJ Sets",
    description:
      "Exclusive atmosphere from the private terrace throughout the entire race weekend",
  },
  {
    num: "04",
    title: "After GP Party",
    description:
      "Private celebration every evening with open bar and DJ · 19:00 – 21:00",
  },
  {
    num: "05",
    title: "Dedicated Professional Staff",
    description:
      "Full service team exclusively dedicated to the Circle Club private terrace at all times",
  },
  {
    num: "06",
    title: "Curated Guest List",
    description:
      "Selective international clientele. A private environment. Access is strictly limited.",
  },
];

export type BeyondItem = {
  name: string;
  description: string;
};

export const BEYOND_ITEMS: BeyondItem[] = [
  {
    name: "Luxury Car Rentals",
    description:
      "Direct access to high-performance and ultra-luxury vehicles. Ferraris, Lamborghinis, Rolls-Royces — available throughout the race weekend in Monaco.",
  },
  {
    name: "Yacht Charters",
    description:
      "Front-row positioning in Port Hercule. Private deck, champagne service, and an immersive race atmosphere from the sea during the Monaco GP weekend.",
  },
  {
    name: "Villa Reservations",
    description:
      "Short and long-term curated properties in Monaco and the French Riviera. Handpicked for privacy, location, and elevated standards.",
  },
  {
    name: "Helicopter Transfers",
    description:
      "Private helicopter transfers between Monaco, Nice, Cannes and beyond. Seamless arrivals and departures throughout the race weekend.",
  },
  {
    name: "Private Chauffeurs",
    description:
      "Dedicated professional drivers available throughout your stay. Discreet, punctual, and fully briefed on Monaco GP circuit restrictions.",
  },
  {
    name: "Restaurant & Club Bookings",
    description:
      "Access to Monaco's most exclusive restaurants and private clubs. Tables reserved at impossible-to-book venues throughout race weekend.",
  },
];

export type AccessPackage = {
  price: string;
  name: string;
  date: string;
  tag: string;
};

export const ACCESS_PACKAGES: AccessPackage[] = [
  {
    price: "€800",
    name: "Thursday Practice",
    date: "F2 · F3 · Porsche Sessions · 4 June 2026",
    tag: "1 Day",
  },
  {
    price: "€1,000",
    name: "F1 Practice Day",
    date: "Free Practice Sessions · 5 June 2026",
    tag: "1 Day",
  },
  {
    price: "€2,000",
    name: "Qualification Day",
    date: "F1 Qualifying Sessions · 6 June 2026",
    tag: "1 Day",
  },
  {
    price: "€3,000",
    name: "Race Day",
    date: "81st Monaco Grand Prix · 7 June 2026",
    tag: "1 Day",
  },
  {
    price: "€4,000",
    name: "Full 4-Day Package",
    date: "Complete Weekend · 4 – 7 June 2026",
    tag: "Best Value",
  },
];

export const PACKAGE_INCLUDED = [
  "All-Inclusive Hospitality",
  "Premium Champagne & Drinks",
  "Gourmet Culinary Selection",
  "Live DJ Sets",
  "After GP Party 19:00 – 21:00",
  "Dedicated Professional Staff",
];

export type ProgramDay = {
  num: string;
  name: string;
  date: string;
  mobileDate?: string;
  events: string[];
  isRace?: boolean;
};

export const PROGRAM_DAYS: ProgramDay[] = [
  {
    num: "Day 01",
    name: "Thursday",
    date: "4 June 2026",
    events: [
      "F2 / F3 / Porsche Sessions",
      "Private Terrace Access",
      "All-day Hospitality",
      "Premium Drinks & Gourmet",
    ],
  },
  {
    num: "Day 02",
    name: "Friday",
    date: "5 June 2026",
    events: [
      "F1 Free Practice Sessions",
      "Private Terrace Access",
      "All-day Hospitality",
      "After GP Party 19:00 – 21:00",
    ],
  },
  {
    num: "Day 03",
    name: "Saturday",
    date: "6 June 2026",
    events: [
      "F1 Qualifying Sessions",
      "Private Terrace Access",
      "All-day Hospitality",
      "After GP Party 19:00 – 21:00",
    ],
  },
  {
    num: "Day 04",
    name: "Sunday",
    date: "7 June 2026 · Race Day",
    mobileDate: "Race Day · 7 June",
    events: [
      "Drivers' Parade",
      "Starting Grid",
      "National Anthem",
      "81st Monaco Grand Prix",
      "Race Day Climax",
    ],
    isRace: true,
  },
];
