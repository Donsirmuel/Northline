export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Northline Studio",
  tagline: "Street essentials, reimagined.",
  description:
    "An independent streetwear label balancing clean tailoring, elevated fabrics, and bold visual identity.",
  ctaPrimary: {
    label: "Shop collection",
    href: "/shop",
  },
  ctaSecondary: {
    label: "Our story",
    href: "/about",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as SiteNavItem[],
  contact: {
    email: "support@northlinestudio.co",
    phone: "+44 20 7123 8890",
    address: "Cardiff Creative Quarter, UK",
  },
};
