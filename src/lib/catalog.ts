export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: "Hoodies" | "T-Shirts" | "Outerwear";
  color: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "northline-tee-3d-script",
    slug: "3d-script-tee",
    name: "3D Script Tee",
    subtitle: "Textured script print with chest crest",
    price: 35,
    image: "/assets/pictures%20with%20names/the-3d-tee-mock.png",
    category: "T-Shirts",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-new-standard",
    slug: "new-standard-tee",
    name: "New Standard Tee",
    subtitle: "Typography essential with subtle luxury balance",
    price: 34,
    image: "/assets/pictures%20with%20names/the-new-standard-tee-mock.png",
    category: "T-Shirts",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-tee-god",
    slug: "god-tee",
    name: "God Tee",
    subtitle: "Floral angel artwork with statement lockup",
    price: 42,
    image: "/assets/pictures%20with%20names/the-god-tee-mock.png",
    category: "T-Shirts",
    color: "Black / Violet",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-tee-astro",
    slug: "astro-tee",
    name: "Astro Tee",
    subtitle: "Retro-space graphic from the cosmic capsule",
    price: 44,
    image: "/assets/pictures%20with%20names/the-astro-tee.png",
    category: "T-Shirts",
    color: "Black / Neon",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-space-ape",
    slug: "space-ape-tee",
    name: "Space Ape Tee",
    subtitle: "Interstellar combat visual from the Space Ape drop",
    price: 46,
    image: "/assets/pictures%20with%20names/the-space-ape-tee-mock.png",
    category: "T-Shirts",
    color: "Black / Yellow",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-rilla",
    slug: "rilla-tee",
    name: "Rilla Tee",
    subtitle: "Character-led graphic from the Animal Icon series",
    price: 40,
    image: "/assets/pictures%20with%20names/the-rilla-tee-mock.png",
    category: "T-Shirts",
    color: "Black / Gold",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-roco",
    slug: "roco-tee",
    name: "Roco Tee",
    subtitle: "Red-letter street graphic from the Animal Icon series",
    price: 40,
    image: "/assets/pictures%20with%20names/the-roco-tee-mock.png",
    category: "T-Shirts",
    color: "Black / Red",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-street",
    slug: "street-tee",
    name: "Street Tee",
    subtitle: "Spray graphic composition with high-contrast lettering",
    price: 38,
    image: "/assets/pictures%20with%20names/the-street-tee.png",
    category: "T-Shirts",
    color: "Black / Red",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-hoodie-revenge",
    slug: "revenge-void-hoodie",
    name: "Revenge Void Hoodie",
    subtitle: "Dark archive artwork in ultraviolet treatment",
    price: 68,
    image: "/assets/pictures%20with%20names/the-revenge-tee.png",
    category: "Hoodies",
    color: "Black / Violet",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-hoodie-eternal",
    slug: "eternal-hoodie",
    name: "Eternal Hoodie",
    subtitle: "Classical bust remix with neon geometry",
    price: 66,
    image: "/assets/pictures%20with%20names/the-eternal-tee.png",
    category: "Hoodies",
    color: "Black / Cyan",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-tee-fitness-club",
    slug: "arc-fitness-club-tee",
    name: "Fitness Club Tee",
    subtitle: "Clean collaboration style for minimal capsule drops",
    price: 33,
    image: "/assets/pictures%20with%20names/the-arc-fitness-club-tee.png",
    category: "T-Shirts",
    color: "Black",
    sizes: ["S", "M", "L"],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
