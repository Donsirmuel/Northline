import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { featuredProducts, products, seriesOrder } from "@/lib/catalog";
import { siteConfig } from "@/lib/siteConfig";

const heroImages = [
  {
    src: "/assets/northline/Puff%20Print%20Typography.png",
    alt: "Northline puff print typography tee shown as the main feature piece",
  },
  {
    src: "/assets/northline/Industrial%20Tactical.png",
    alt: "Northline industrial tactical tee used as the secondary product image",
  },
  {
    src: "/assets/northline/Explorer%20Cosmic.png",
    alt: "Northline explorer cosmic tee used as supporting product imagery",
  },
];

const principles = [
  {
    title: "Fit",
    description: "Clear size guidance, relaxed cuts, and silhouettes that are easy to style.",
    icon: Sparkles,
  },
  {
    title: "Shipping",
    description: "Tracked dispatch updates, a simple checkout flow, and no surprises at the finish line.",
    icon: Truck,
  },
  {
    title: "Support",
    description: "Straightforward product pages, secure payment flows, and a 30-day returns window.",
    icon: ShieldCheck,
  },
];

const marqueeItems = [
  "Drop 001 live now",
  "Heavyweight cotton",
  "Cold-weather graphics",
  "Cardiff studio",
  "Short-run editions",
  "Built for concrete light",
];

const GBP = "\u00A3";

export default function Home() {
  const leadProduct = featuredProducts[0] ?? products[0];
  const collectionPreview = products.slice(0, 4);
  const featuredSeries = seriesOrder.slice(0, 3);

  return (
    <div className="overflow-hidden bg-background pb-16 md:pb-24">
      <section className="relative isolate overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_40%),linear-gradient(145deg,hsl(220_28%_9%)_0%,hsl(221_26%_12%)_48%,hsl(216_23%_18%)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute right-14 top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute inset-y-0 right-[18%] w-px bg-white/6" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[92vh] lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-14 lg:px-8 lg:py-14">
          <div className="max-w-3xl pt-4 lg:pt-0">
            <p className="reveal-up section-kicker text-primary/75">Drop 001 / Northline</p>
            <h1 className="reveal-up mt-4 text-balance font-heading text-[clamp(3.2rem,9vw,7.4rem)] font-bold uppercase leading-[0.86] tracking-[0.01em] shine-text">
              Streetwear
              <span className="block text-primary/65">with weight.</span>
            </h1>
            <p className="reveal-up mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              Northline pairs heavyweight fabrics, clear fit notes, and easy styling into one focused drop-led wardrobe. The goal is to make each release feel simple to choose and better to wear.
            </p>

            <div className="reveal-up mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em] shadow-[0_20px_40px_-24px_rgb(255_140_60_/_0.5)]">
                <Link to={siteConfig.ctaPrimary.href}>
                  {siteConfig.ctaPrimary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-primary/20 bg-white/4 px-6 text-[11px] uppercase tracking-[0.28em] text-primary backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
              >
                <Link to={siteConfig.ctaSecondary.href}>{siteConfig.ctaSecondary.label}</Link>
              </Button>
            </div>

            <div className="reveal-up mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["08", "Pieces in Drop 001"],
                ["240 gsm", "Core fabric weight"],
                ["UK", "Studio base"],
                ["24h", "Round the clock access"],
              ].map(([value, label]) => (
                <article key={label} className="gloss-panel rounded-[1.1rem] px-4 py-4">
                  <div className="font-heading text-2xl font-bold uppercase tracking-[0.04em]">{value}</div>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal-slow relative">
            <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="gloss-panel relative overflow-hidden rounded-[2rem]">
                <img src={heroImages[0].src} alt={heroImages[0].alt} className="aspect-[4/5] w-full object-cover object-center" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-sm">
                  Featured piece
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(7,11,19,0.88))] p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70">Customer favorite</p>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="font-heading text-xl font-bold uppercase tracking-[0.04em] sm:text-2xl">{leadProduct.name}</h2>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-primary/80">
                        Simple to style, easy to understand, and built around a clean graphic read.
                      </p>
                    </div>
                    <span className="font-heading text-lg font-bold sm:text-xl">
                      {GBP}
                      {leadProduct.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="gloss-panel overflow-hidden rounded-[1.6rem]">
                  <img src={heroImages[1].src} alt={heroImages[1].alt} className="aspect-[4/3] w-full object-cover object-center" />
                </div>
                <div className="gloss-panel overflow-hidden rounded-[1.6rem]">
                  <img src={heroImages[2].src} alt={heroImages[2].alt} className="aspect-[4/3] w-full object-cover object-center" />
                </div>
                <div className="gloss-panel flex flex-col justify-between rounded-[1.6rem] p-5">
                  <div>
                    <p className="section-kicker">What you get!</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      A personality-driven collection of heavyweight cotton tees, each with a clear fit note, a short-run print, and a simple styling story.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <Button asChild variant="outline" className="h-10 rounded-full border-primary/20 bg-white/4 px-4 text-[10px] uppercase tracking-[0.26em] text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to={`/shop/${leadProduct.slug}`}>
                        View piece
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild className="h-10 rounded-full px-4 text-[10px] uppercase tracking-[0.26em]">
                      <Link to="/collections">Browse collections</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card/20">
        <div className="overflow-hidden py-4">
          <div className="marquee-track flex whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-6 flex shrink-0 items-center gap-6 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
              >
                {item}
                <span className="size-1.5 rounded-full bg-primary/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-10 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="section-kicker">Shop by need</p>
          <h2 className="section-title mt-3 text-[clamp(2rem,5vw,4rem)] leading-[0.92]">A Straightforward way to choose your next piece.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Each piece in the Northline drop is built around a clear fit note, a short-run print, and a simple styling story. The goal is to make each release feel simple to choose and better to wear.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="gloss-panel rounded-[1.5rem] p-5 transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-[0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker">Featured piece</p>
              <h2 className="section-title text-[clamp(2rem,5vw,4.5rem)] leading-[0.92]">{leadProduct.name}</h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">{leadProduct.description}</p>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">{leadProduct.story}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em] shadow-[0_18px_36px_-24px_rgb(255_140_60_/_0.45)]">
                  <Link to={`/shop/${leadProduct.slug}`}>
                    View piece
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="self-center text-lg font-heading font-bold">
                  {GBP}
                  {leadProduct.price}
                </p>
              </div>
            </div>

            <Link to={`/shop/${leadProduct.slug}`} className="gloss-panel group block overflow-hidden rounded-[2rem]">
              <img
                src={leadProduct.image}
                alt={leadProduct.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Latest pieces</p>
            <h2 className="section-title mt-3 text-[clamp(2rem,5vw,4rem)] leading-[0.92]">The current edit.</h2>
          </div>
          <Button asChild variant="outline" className="hidden h-12 rounded-full border-primary/20 bg-white/4 px-5 text-[11px] uppercase tracking-[0.28em] text-primary hover:bg-primary hover:text-primary-foreground md:inline-flex">
            <Link to="/shop">
              View shop
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {collectionPreview.map((product, index) => (
            <Link
              key={product.id}
              to={`/shop/${product.slug}`}
              className="gloss-panel group overflow-hidden rounded-[1.6rem] transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{product.series}</p>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-[0.04em]">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.shortLine}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-heading font-bold">
                    {GBP}
                    {product.price}
                  </span>
                  <span className="font-semibold uppercase tracking-[0.22em] text-primary">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker">Series overview</p>
              <h2 className="section-title mt-3 text-[clamp(2rem,4.5vw,3.8rem)] leading-[0.92]">One line, multiple moods.</h2>
            </div>
            <div className="grid gap-4">
              {featuredSeries.map((series, index) => {
                const productsInSeries = products.filter((product) => product.series === series);

                return (
                  <Link
                    key={series}
                    to="/collections"
                    className="gloss-panel group grid gap-4 rounded-[1.4rem] p-5 transition-colors hover:border-primary"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="section-kicker">{String(index + 1).padStart(2, "0")}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
                      <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.04em]">{series}</h3>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                          {productsInSeries[0]?.story ?? "A focused series built around one visual language, one print attitude, and a short-run rhythm."}
                        </p>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          {productsInSeries.length} pieces
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Private list</p>
            <h2 className="section-title mt-3 text-[clamp(2rem,5vw,4.2rem)] leading-[0.92]">Get first access to the next drop.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Subscribers get the earliest release notes, new product photography, and the 24-hour early access window before each drop lands publicly.
            </p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em] shadow-[0_18px_36px_-24px_rgb(255_140_60_/_0.45)]">
            <Link to="/contact">Request access</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
