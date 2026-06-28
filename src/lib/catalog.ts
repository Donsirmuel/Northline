export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  series: string;
  shortLine: string;
  description: string;
  materials: string;
  fit: string;
  story: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "northline-puff-print-typography",
    slug: "puff-print-typography",
    name: "Puff Print Typography Tee",
    subtitle: "Raised letterforms with a soft-hand finish and an easy everyday silhouette.",
    price: 35,
    image: "/assets/northline/Puff%20Print%20Typography.png",
    images: ["/assets/northline/Puff%20Print%20Typography.png", "/assets/northline/Model%20Female.png"],
    category: "Statement tee",
    series: "Core Drop",
    shortLine: "Soft puff print / easy layering / everyday statement",
    description:
      "A clean Northline staple built around dimensional lettering. It feels substantial without being stiff, so it works as an easy first pick for daily wear.",
    materials: "240 gsm organic cotton jersey with a dense, smooth surface and raised puff-print detailing.",
    fit: "Boxy regular fit with a slightly dropped shoulder. Choose your usual size for a relaxed profile.",
    story: "A versatile anchor for Drop 001, made to be the piece you reach for first and wear often.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-standard",
    slug: "northline-standard",
    name: "Northline Standard Tee",
    subtitle: "The essential logo tee, tuned for repeat wear and simple layering.",
    price: 34,
    image: "/assets/northline/Northline%20Standard.png",
    images: ["/assets/northline/Northline%20Standard.png", "/assets/northline/Model%20Male.png"],
    category: "Everyday tee",
    series: "Core Drop",
    shortLine: "Minimal branding / balanced shape / daily rotation",
    description:
      "The simplest garment in the line-up, built to hold the Northline identity without getting in the way of the rest of your outfit.",
    materials: "240 gsm cotton with a smooth, durable finish and a soft hand after the first wash.",
    fit: "Straight, boxy cut with room through the body and a clean hem.",
    story: "A reliable base layer for the Northline wardrobe, designed to pair with almost anything.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-snow-leopard",
    slug: "snow-leopard",
    name: "Snow Leopard Tee",
    subtitle: "High-contrast wildlife artwork with a tall vertical composition and an easy fit.",
    price: 42,
    image: "/assets/northline/Snow%20Leopard.png",
    images: ["/assets/northline/Snow%20Leopard.png", "/assets/northline/Polar%20Bear-back%20view.png"],
    category: "Graphic tee",
    series: "Predator Series",
    shortLine: "Wildlife graphic / sharp contrast / easy statement",
    description:
      "Snow Leopard pushes the animal motif into a more graphic register. The vertical layout gives the print a poster-like rhythm while keeping the garment easy to wear.",
    materials: "240 gsm cotton jersey with screen-printed artwork and a crisp matte finish.",
    fit: "Boxy fit with a wider chest and a slightly shorter length.",
    story: "The cleanest piece in the Predator Series, made for people who want impact without extra noise.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-explorer-cosmic",
    slug: "explorer-cosmic",
    name: "Explorer Cosmic Tee",
    subtitle: "Retro-space graphics cut with industrial restraint and a comfortable everyday fit.",
    price: 44,
    image: "/assets/northline/Explorer%20Cosmic.png",
    images: ["/assets/northline/Explorer%20Cosmic.png", "/assets/northline/Model%20Female.png"],
    category: "Graphic tee",
    series: "Explorer Series",
    shortLine: "Astronaut linework / frosted teal / full-front energy",
    description:
      "Explorer Cosmic is the most narrative-driven tee in the range, pairing space-age illustration with a colder Northline palette and a comfortable, wearable shape.",
    materials: "240 gsm organic cotton with a dual-side screen print and a compact rib collar.",
    fit: "Boxy regular fit. Wear true to size for a relaxed drop or size down for a tighter shoulder.",
    story: "A standout piece for days when you want the outfit to feel more considered without trying too hard.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-industrial-tactical",
    slug: "industrial-tactical",
    name: "Industrial Tactical Tee",
    subtitle: "A poster-like graphic built from steel tones, frost, and utility cues.",
    price: 46,
    image: "/assets/northline/Industrial%20Tactical.png",
    images: ["/assets/northline/Industrial%20Tactical.png", "/assets/northline/Model%20Male.png"],
    category: "Graphic tee",
    series: "Industrial Exploration",
    shortLine: "Technical art / cold-industrial palette / strong daily wear",
    description:
      "The boldest print in the collection. Industrial Tactical feels closer to a screen-printed poster than a standard tee, but the cut keeps it comfortable for everyday wear.",
    materials: "240 gsm cotton jersey with a multi-colour screen print and a slightly dry, structured hand.",
    fit: "Relaxed boxy fit with dropped shoulders and room through the sleeve.",
    story: "Made for customers who want the loudest graphic in the range without losing wearability.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-timber-wolf",
    slug: "timber-wolf",
    name: "Timber Wolf Tee",
    subtitle: "Character-led artwork with a stripped-back silhouette and strong contrast.",
    price: 40,
    image: "/assets/northline/Timber%20Wolf.png",
    images: [
      "/assets/northline/Timber%20Wolf.png",
      "/assets/northline/Timber%20Wolf-front%20view.png",
      "/assets/northline/Timber%20Wolf-back%20view.png",
    ],
    category: "Graphic tee",
    series: "Predator Series",
    shortLine: "Animal iconography / clean contrast / easy layering",
    description:
      "Timber Wolf is the most direct character piece in the lineup. The graphic lands fast, but the overall composition still feels easy to wear and easy to style.",
    materials: "240 gsm cotton jersey with a high-opacity screen print and a smooth, durable surface.",
    fit: "Boxy fit with a clean neckline and slightly longer sleeve length.",
    story: "A strong pick if you want the collection’s bolder side without losing comfort or versatility.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-valkyrie",
    slug: "valkyrie",
    name: "Valkyrie Tee",
    subtitle: "Mythic figure artwork with a deeper tonal treatment and metallic accents.",
    price: 40,
    image: "/assets/northline/Valkyrie.png",
    images: [
      "/assets/northline/Valkyrie.png",
      "/assets/northline/Valkyrie-front%20view.png",
      "/assets/northline/Valkyrie-back%20view.png",
    ],
    category: "Graphic tee",
    series: "Northern Myth",
    shortLine: "Mythic figure / metallic accent / easy premium feel",
    description:
      "Valkyrie leans into folklore without losing the streetwear edge. The imagery is cinematic, but the garment still lands as a clean, wearable essential.",
    materials: "240 gsm cotton jersey with metallic print accents and a dense matte body.",
    fit: "Boxy regular fit with a slightly shorter length for easier layering.",
    story: "For customers who want a darker graphic with enough character to stand on its own.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "northline-polar-bear",
    slug: "polar-bear",
    name: "Polar Bear Tee",
    subtitle: "Bold wildlife graphic with a colder, quieter visual cadence.",
    price: 38,
    image: "/assets/northline/Polar%20Bear.png",
    images: [
      "/assets/northline/Polar%20Bear.png",
      "/assets/northline/Polar%20bear-front%20view.png",
      "/assets/northline/Polar%20Bear-back%20view.png",
    ],
    category: "Graphic tee",
    series: "Predator Series",
    shortLine: "Wildlife icon / winter palette / balanced front and back",
    description:
      "Polar Bear is the coldest piece in the Predator Series. It keeps the visual language restrained so the animal motif feels sharp, premium, and easy to wear.",
    materials: "240 gsm organic cotton with soft-touch screen printing and a smooth collar finish.",
    fit: "Boxy regular fit with enough room to wear over long sleeves.",
    story: "A balanced graphic tee for people who want a statement piece that still plays nicely with the rest of the outfit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export const featuredProducts = products.slice(0, 3);

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getProductsBySeries = () =>
  products.reduce<Record<string, Product[]>>((groups, product) => {
    (groups[product.series] ||= []).push(product);
    return groups;
  }, {});

export const seriesOrder = Array.from(new Set(products.map((product) => product.series)));
