export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Northline",
  tagline: "Made to wear, easy to choose.",
  description:
    "An independent streetwear label making heavyweight pieces that are easy to wear, easy to style, and built to last.",
  ctaPrimary: {
    label: "Shop collection",
    href: "/shop",
  },
  ctaSecondary: {
    label: "Browse collections",
    href: "/collections",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as SiteNavItem[],
  contact: {
    email: "support@northline.co",
    phone: "+44 20 7123 8890",
    address: "Cardiff Creative Quarter, UK",
  },
};
