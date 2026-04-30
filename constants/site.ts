export type ContactType = "real-estate" | "cars";

export type PhoneEntry = {
  type: ContactType;
  value: string;
  href: string;
};

export interface ContactInfo {
  icon: string;
  label: string;
  // phone can have multiple typed entries
  phones?: PhoneEntry[];
  // other contact types
  value?: string;
  href?: string;
}

export const SITE_CONFIG = {
  name: "Circle Club",
  description: "Exclusive Social Club for the Elite",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "icons/email.svg",
    label: "Email",
    value: "contact@circleclub.co",
    href: "mailto:contact@circleclub.co",
  },
  {
    icon: "images/Whatsapp.svg",
    label: "Phone",
    phones: [
      {
        type: "real-estate",
        value: "+33 6 27 08 53 55",
        href: "https://wa.me/+33627085355",
      },
      {
        type: "cars",
        value: "+41 78 303 83 13",
        href: "https://wa.me/+41783038313",
      }
    ],
  },
];

export const WA_LINK: string = "https://wa.me/+33627085355";
