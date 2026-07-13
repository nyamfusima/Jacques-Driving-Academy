/**
 * Central business configuration for the demo.
 * Swap these values to instantly re-brand the site for the client.
 */

export const site = {
  name: "Jacques Driving Academy",
  shortName: "Jacques Driving",
  tagline: "Steering Success, One Lesson at a Time",
  // Real Google rating for the business
  googleRating: "5.0",
  // Display + tel-friendly formats
  phoneDisplay: "065 851 8981",
  phoneTel: "+27658518981",
  // WhatsApp uses the international number without "+" or spaces
  whatsappNumber: "27658518981",
  email: "hello@jacquesdriving.co.za",
  addressLine: "4 Billie Rd, Mdantsane Unit 4",
  city: "Mdantsane",
  region: "Eastern Cape",
  postalCode: "5219",
  hours: [
    { day: "Mon to Fri", time: "8am to 5pm" },
    { day: "Saturday", time: "8am to 1pm" },
    { day: "Sunday", time: "Closed" },
  ],
  areas: [
    "Mdantsane",
    "East London",
    "Beacon Bay",
    "Gonubie",
    "Scenery Park",
    "Cambridge",
    "Amalinda",
    "Nahoon",
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },
} as const;

/** Build a pre-filled WhatsApp deep link. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hi ${site.name}! 👋 I'd like to book driving lessons. Could you share availability and pricing?`,
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

/** tel: link for the Call Now CTA. */
export const telLink = `tel:${site.phoneTel}`;

export type NavItem = { label: string; to: string };

/**
 * Section links point at "/#id" (scrolled on the home page); Contact is the
 * only standalone page.
 */
export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/contact" },
];
