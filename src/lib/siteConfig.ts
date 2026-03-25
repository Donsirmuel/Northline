export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Arora",
  tagline: "Build your next website faster",
  description:
    "A flexible React + TypeScript + Vite boilerplate for landing pages, marketing sites, docs fronts, and startup websites.",
  ctaPrimary: {
    label: "Start Building",
    href: "/contact",
  },
  ctaSecondary: {
    label: "See the Blueprint",
    href: "/about",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as SiteNavItem[],
  contact: {
    email: "hello@example.com",
    phone: "+1 (000) 000-0000",
    address: "123 Placeholder Street, Your City",
  },
};
