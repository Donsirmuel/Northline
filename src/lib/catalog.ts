export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  images: string[];
  category: "Hoodies" | "T-Shirts" | "Outerwear";
  color: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "northline-puff-print-typography",
    slug: "puff-print-typography",
    name: "Puff Print Typography Tee",
    subtitle: "Dimensional Northline lettering with a raised print feel",
    price: 35,
    image: "/assets/northline/Puff%20Print%20Typography.png",
    images: ["/assets/northline/Puff%20Print%20Typography.png"],
    category: "T-Shirts",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-standard",
    slug: "northline-standard",
    name: "Northline Standard Tee",
    subtitle: "Clean logo essential with a balanced everyday graphic",
    price: 34,
    image: "/assets/northline/Northline%20Standard.png",
    images: ["/assets/northline/Northline%20Standard.png"],
    category: "T-Shirts",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-snow-leopard",
    slug: "snow-leopard",
    name: "Snow Leopard Tee",
    subtitle: "Wildlife graphic with a crisp vertical composition",
    price: 42,
    image: "/assets/northline/Snow%20Leopard.png",
    images: ["/assets/northline/Snow%20Leopard.png"],
    category: "T-Shirts",
    color: "Black / Violet",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-explorer-cosmic",
    slug: "explorer-cosmic",
    name: "Explorer Cosmic Tee",
    subtitle: "Retro-space graphic from the exploration capsule",
    price: 44,
    image: "/assets/northline/Explorer%20Cosmic.png",
    images: ["/assets/northline/Explorer%20Cosmic.png"],
    category: "T-Shirts",
    color: "Black / Neon",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-industrial-tactical",
    slug: "industrial-tactical",
    name: "Industrial Tactical Tee",
    subtitle: "Technical utility graphic with an industrial Northline lockup",
    price: 46,
    image: "/assets/northline/Industrial%20Tactical.png",
    images: ["/assets/northline/Industrial%20Tactical.png"],
    category: "T-Shirts",
    color: "Black / Yellow",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-timber-wolf",
    slug: "timber-wolf",
    name: "Timber Wolf Tee",
    subtitle: "Character-led graphic from the animal icon series",
    price: 40,
    image: "/assets/northline/Timber%20Wolf.png",
    images: [
      "/assets/northline/Timber%20Wolf.png",
      "/assets/northline/Timber%20Wolf-front%20view.png",
      "/assets/northline/Timber%20Wolf-back%20view.png",
    ],
    category: "T-Shirts",
    color: "Black / Gold",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-valkyrie",
    slug: "valkyrie",
    name: "Valkyrie Tee",
    subtitle: "Mythic figure artwork with a bold red streetwear treatment",
    price: 40,
    image: "/assets/northline/Valkyrie.png",
    images: [
      "/assets/northline/Valkyrie.png",
      "/assets/northline/Valkyrie-front%20view.png",
      "/assets/northline/Valkyrie-back%20view.png",
    ],
    category: "T-Shirts",
    color: "Black / Red",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "northline-polar-bear",
    slug: "polar-bear",
    name: "Polar Bear Tee",
    subtitle: "High-contrast wildlife graphic with Northline edge",
    price: 38,
    image: "/assets/northline/Polar%20Bear.png",
    images: [
      "/assets/northline/Polar%20Bear.png",
      "/assets/northline/Polar%20bear-front%20view.png",
      "/assets/northline/Polar%20Bear-back%20view.png",
    ],
    category: "T-Shirts",
    color: "Black / Red",
    sizes: ["S", "M", "L", "XL"],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
