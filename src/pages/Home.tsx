import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product, products } from "@/lib/catalog";
import { siteConfig } from "@/lib/siteConfig";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Craft",
    description: "Heavyweight fabric, clean finishing, and proportions designed for daily wear.",
    icon: Sparkles,
  },
  {
    title: "Delivery",
    description: "Tracked shipping updates from dispatch through checkout.",
    icon: Truck,
  },
  {
    title: "Trust",
    description: "Secure payments and a 30-day return window.",
    icon: ShieldCheck,
  },
];

const heroImages = [
  {
    src: "/assets/pictures%20with%20names/the-arora-cap-mock.png",
    alt: "Northline cap styled with a black tee",
  },
  {
    src: "/assets/pictures%20with%20names/the-fallen-tee-mock.png",
    alt: "Northline garment texture detail",
  },
];

const categoryLinks = [
  {
    title: "Statement tees",
    description: "Graphic-led pieces that carry the outfit.",
  },
  {
    title: "Daily essentials",
    description: "Clean heavyweight staples for repeat wear.",
  },
  {
    title: "Layering pieces",
    description: "Easy silhouettes built to sit under outerwear.",
  },
];

export default function Home() {
  const leadProduct = products.find((product) => product.slug === "astro-tee") ?? products[0];
  const productPreview = ["space-ape-tee", "rilla-tee", "roco-tee", "street-tee"]
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));

  return (
    <div className="relative overflow-hidden pb-12 md:pb-20">
      <section className="relative overflow-hidden border-b border-border/70 bg-[linear-gradient(180deg,hsl(var(--secondary))_0%,hsl(var(--background))_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-24 hidden h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl md:block" />
          <div className="absolute right-0 top-28 hidden h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl md:block" />
        </div>

        <div className="container relative z-10 mx-auto grid gap-10 px-4 pb-16 pt-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-12 md:pb-24 md:pt-24 lg:min-h-[76vh] lg:gap-16">
        <div className="max-w-3xl">
          <p className="reveal-up mb-4 inline-flex rounded-full border border-accent/25 bg-card/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground shadow-sm md:text-xs">
            New arrivals 2026
          </p>
          <h1 className="reveal-up text-[3.05rem] font-black leading-[0.88] tracking-tight text-foreground sm:text-6xl md:text-[4.7rem] lg:text-[5.8rem]">
            Northline Studio
            <span className="block max-w-[9ch] text-muted-foreground md:max-w-[10ch]">Street essentials.</span>
          </h1>
          <p className="reveal-up mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Premium streetwear built around relaxed proportions, heavyweight comfort, and graphic restraint.
          </p>
          <div className="reveal-up mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6 sm:w-auto md:rounded-md">
              <Link to={siteConfig.ctaPrimary.href}>
                Shop collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6 sm:w-auto md:rounded-md">
              <Link to={siteConfig.ctaSecondary.href}>Our story</Link>
            </Button>
          </div>

          <div className="reveal-up mt-9 grid grid-cols-[5.25rem_1fr] items-center gap-4 md:hidden">
            <div className="overflow-hidden rounded-2xl bg-card shadow-[0_18px_40px_-30px_rgb(20_26_45_/_0.65)]">
              <img src={heroImages[0].src} alt={heroImages[0].alt} className="aspect-[4/5] w-full object-cover object-[50%_22%]" />
            </div>
            <div className="border-l border-border/70 pl-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Fit note</p>
              <p className="mt-2 text-lg font-black leading-tight">Clean shapes, heavyweight feel, daily wear.</p>
            </div>
          </div>
        </div>

        <div className="reveal-up hidden md:block">
          <div className="relative h-[27rem] lg:h-[34rem]">
            <div className="absolute right-0 top-0 h-[82%] w-[72%] overflow-hidden rounded-[2rem] bg-card shadow-[0_34px_72px_-42px_rgb(20_26_45_/_0.62)]">
              <img src={heroImages[0].src} alt={heroImages[0].alt} className="h-full w-full object-cover object-[50%_22%]" />
            </div>
            <div className="absolute bottom-0 left-0 h-[38%] w-[50%] overflow-hidden rounded-3xl bg-primary shadow-[0_28px_62px_-42px_rgb(20_26_45_/_0.72)]">
              <img src={heroImages[1].src} alt={heroImages[1].alt} className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {leadProduct && (
        <section className="container mx-auto px-4 pb-14 pt-14 md:pb-24 md:pt-20">
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground md:text-xs">Featured piece</p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-5xl">{leadProduct.name}</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">{leadProduct.subtitle}. Cut for daily wear with the weight and finish Northline is built around.</p>
              <div className="mt-6 flex items-center gap-4 md:mt-7">
                <Button asChild className="rounded-full px-6 md:rounded-md">
                  <Link to={`/shop/${leadProduct.slug}`}>
                    View piece
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-lg font-black">${leadProduct.price}</p>
              </div>
            </div>
            <Link to={`/shop/${leadProduct.slug}`} className="group block overflow-hidden rounded-[1.75rem] bg-primary shadow-[0_28px_64px_-42px_rgb(20_26_45_/_0.75)]">
              <img
                src={leadProduct.image}
                alt={leadProduct.name}
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] md:aspect-[4/3]"
              />
            </Link>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground md:text-xs">Latest pieces</p>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-5xl">Shop the essentials.</h2>
          </div>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link to="/shop">
              View full shop
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="h-11 w-11 shrink-0 rounded-full md:hidden">
            <Link to="/shop" aria-label="View full shop">
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mobile-product-rail -mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {productPreview.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.slug}`}
              className="group w-[74vw] max-w-[18rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-auto md:max-w-none"
            >
              <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{product.category}</p>
                <h3 className="mt-2 text-lg font-black leading-tight">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-bold text-muted-foreground">${product.price}</span>
                  <span className="font-bold">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="border-y border-border/70 py-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground md:text-xs">Shop by edit</p>
              <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">Shop by category.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {categoryLinks.map((category) => (
                <Link key={category.title} to="/shop" className="group border-b border-border/80 pb-5 md:border md:bg-card md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black leading-tight lg:text-xl">{category.title}</h3>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid gap-7 bg-primary px-5 py-7 text-primary-foreground md:grid-cols-[0.75fr_1.25fr] md:gap-8 md:px-10 md:py-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground/65 md:text-xs">Material and fit</p>
            <h2 className="mt-3 text-2xl font-black leading-tight md:text-4xl">Built for presence. Designed for movement.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-sm leading-6 text-primary-foreground/82 md:text-lg md:leading-7">
              Northline combines heavyweight cotton, relaxed proportions, and considered graphics so each piece feels strong without overpowering the rest of the outfit.
            </p>
            <div className="mt-7 grid gap-4 md:mt-8 md:grid-cols-3 md:gap-5">
              {values.map((feature) => (
                <article key={feature.title} className="grid grid-cols-[auto_1fr] gap-x-3 md:block">
                  <feature.icon className="mt-1 h-4 w-4 text-accent md:mt-0 md:h-5 md:w-5" />
                  <h3 className="text-base font-black md:mt-4 md:text-lg">{feature.title}</h3>
                  <p className="col-start-2 mt-1 text-sm leading-6 text-primary-foreground/72 md:col-start-auto md:mt-2">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid gap-6 border-t border-border/70 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground md:text-xs">Private list</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight md:text-5xl">Get first access to Northline drops.</h2>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-6 md:rounded-md">
            <Link to="/contact">Request early access</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
