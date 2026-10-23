// Shared config + copy for the mission-growth landing.

// Every "Check if you qualify" CTA scrolls to the eligibility quiz; only the
// quiz's eligible result links out to the booking widget (with the answers and
// UTM params appended).
export const QUALIFY_HREF = "#quiz";
export const QUALIFY_LABEL = "Check if you qualify";
export const BOOK_CALL =
  "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits";

export const CONTACT = {
  email: "nonprofit@dgtl-house.com",
  phone: "+1 (224) 313-4445",
  phoneHref: "tel:+12243134445",
  address: "1635 Eagle Grove Ct., Wheeling, IL 60090",
} as const;

export const IRS_501C3_URL =
  "https://www.irs.gov/charities-non-profits/application-for-recognition-of-exemption";

// Header / mobile menu / floating pill nav.
export const NAV = [
  { label: "Google Ad Grants", short: "Ad Grants", href: "#ad-grants" },
  { label: "How we work", short: "How we work", href: "#how-we-work" },
  { label: "Results", short: "Results", href: "#results" },
  { label: "Pricing", short: "Pricing", href: "#pricing" },
  { label: "FAQ", short: "FAQ", href: "#faq" },
] as const;

// TODO: real profile URLs — neither the layout nor the sibling projects have
// them yet, so the icons point nowhere for now.
export const SOCIALS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
] as const;

// Mobile (<768px) hero image. Hero.astro and the <head> preload in
// Layout.astro must use the same srcset/sizes, or the preload is wasted.
// Tablet and desktop keep their own <source> elements in Hero.astro.
export const HERO_MOBILE = {
  src: "/img/hero-m-600.webp",
  srcset:
    "/img/hero-m-400.webp 400w, /img/hero-m-600.webp 600w, /img/hero-m-800.webp 800w",
  sizes: "calc(100vw - 40px)",
} as const;
