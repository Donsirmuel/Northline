import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/catalog";
import { siteConfig } from "@/lib/siteConfig";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Craft",
    description: "Heavyweight fabrics, clean stitching, and fit engineering designed for daily movement.",
    icon: Sparkles,
  },
  {
    title: "Delivery",
    description: "Fast dispatch, transparent shipping updates, and tracked checkout from start to finish.",
    icon: Truck,
  },
  {
    title: "Trust",
    description: "Secure Stripe checkout and a 30-day return window for confident buying decisions.",
    icon: ShieldCheck,
  },
];

const heroFrames = [
  {
    src: "/assets/pictures%20with%20names/the-arora-cap-mock.png",
    alt: "Editorial cap campaign",
  },
  {
    src: "/assets/pictures%20with%20names/the-3d-tee-mock.png",
    alt: "3D script tee campaign",
  },
  {
    src: "/assets/pictures%20with%20names/the-fallen-tee-mock.png",
    alt: "Fallen graphic tee campaign",
  },
];

export default function Home() {
  const carouselFrames = heroFrames;
  const [hoveredPos, setHoveredPos] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden pb-12 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 top-36 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-secondary/55 to-transparent" />
      </div>

      <section className="container mx-auto grid gap-7 px-4 pb-12 pt-10 md:pb-20 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:min-h-[72vh]">
        <div className="order-1 lg:order-1">
          <p className="reveal-up mb-4 inline-flex rounded-full border border-accent/30 bg-card/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
            New Arrivals 2026
          </p>
          <h1 className="reveal-up max-w-3xl text-3xl font-black leading-[0.98] sm:text-5xl md:text-7xl">
            {siteConfig.name}
            <span className="mt-2 block text-muted-foreground">{siteConfig.tagline}</span>
          </h1>
          <p className="reveal-up mt-4 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Street-lux essentials built with premium cotton, oversized confidence, and silhouettes made for movement.
          </p>
          <div className="reveal-up mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to={siteConfig.ctaPrimary.href}>
                {siteConfig.ctaPrimary.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to={siteConfig.ctaSecondary.href}>{siteConfig.ctaSecondary.label}</Link>
            </Button>
          </div>
        </div>

        <div className="reveal-up mt-8 lg:hidden">
          <div className="relative rounded-[1.6rem] border border-border/70 bg-card/85 p-3 shadow-lg">
            <div className="overflow-hidden rounded-[1.2rem] border border-border/60 bg-background">
              <img
                src={heroFrames[1].src}
                alt={heroFrames[1].alt}
                className="aspect-[16/11] max-h-[12rem] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 right-4 w-[46%] overflow-hidden rounded-[1rem] border border-border/70 bg-background shadow-[0_16px_30px_-20px_rgba(15,23,42,0.45)]">
              <img
                src={heroFrames[0].src}
                alt={heroFrames[0].alt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="reveal-up order-3 hidden h-full items-center hero-3d-viewport lg:flex">
          <div className="relative h-[28rem] w-full overflow-hidden sm:h-[34rem] lg:h-full">
            <div className="hero-carousel-track flex h-full items-center gap-4 sm:gap-6">
              {carouselFrames.map((frame, index) => {
                const position = index; // 0,1,2
                const isHovered = hoveredPos === position;

                const baseTransform =
                  position === 0
                    ? "origin-right -rotate-6 translate-x-8 translate-y-8 scale-[0.92] z-10 hidden sm:block"
                    : position === 1
                      ? "relative z-40 scale-[1] sm:-translate-y-6 sm:scale-[1.04] shadow-[0_28px_44px_-22px_rgb(20_26_45_/_0.38)]"
                      : "origin-left rotate-6 -translate-x-8 translate-y-8 scale-[0.92] z-10 hidden sm:block";

                const activeTransform = "relative z-50 -translate-y-2 scale-[1.08] rotate-0 translate-x-0 shadow-[0_40px_80px_-30px_rgb(20_26_45_/_0.5)]";

                const transformClass = isHovered ? activeTransform : baseTransform;

                return (
                  <div
                    key={`${frame.alt}-${index}`}
                    className="hero-carousel-slide basis-full shrink-0 px-1 sm:basis-1/3 sm:px-2 h-full"
                    onMouseEnter={() => setHoveredPos(position)}
                    onMouseLeave={() => setHoveredPos(null)}
                  >
                    <div
                      className={`overflow-hidden rounded-3xl bg-card h-full min-h-[22rem] transition-transform duration-600 ease-custom will-change-transform ${transformClass}`}
                    >
                      <img
                        src={frame.src}
                        alt={frame.alt}
                        className="w-full h-full object-cover slide-sway"
                        style={{ animationDelay: `${index * 0.35}s` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-8 md:pb-16">
        <div className="reveal-up rounded-[1.6rem] border border-border/70 bg-card/75 p-4 md:p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Featured products</p>
              <h2 className="text-lg font-black leading-tight sm:text-xl md:text-4xl">A closer look at the pieces people actually buy.</h2>
            </div>
            <Button asChild variant="outline" className="w-full md:w-auto">
              <Link to="/shop">
                View full shop
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:grid-cols-3 md:gap-3">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/shop/${product.slug}`}
                className="group overflow-hidden rounded-xl border border-border/70 bg-background"
                style={{ animationDelay: `${80 * index}ms` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[4/5]"
                />
                <div className="p-2 sm:p-3 md:p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">{product.category}</p>
                  <h2 className="mt-1 text-sm font-black sm:mt-2 sm:text-base md:text-xl lg:text-2xl">{product.name}</h2>
                  <div className="mt-2 flex items-center justify-between sm:mt-3">
                    <p className="text-[11px] text-muted-foreground sm:text-xs md:text-sm">${product.price}</p>
                    <span className="text-xs font-semibold sm:text-sm">View item</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          <Link to="/shop" className="group rounded-2xl border border-border/70 bg-card/80 p-5 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Shop by edit</p>
            <h3 className="mt-2 text-2xl font-black">Statement tees</h3>
            <p className="mt-2 text-sm text-muted-foreground">Bold graphics, clean cuts, and the pieces that define the drop.</p>
          </Link>
          <Link to="/shop" className="group rounded-2xl border border-border/70 bg-card/80 p-5 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Shop by edit</p>
            <h3 className="mt-2 text-2xl font-black">Heavy layers</h3>
            <p className="mt-2 text-sm text-muted-foreground">Street-ready hoodies and outerwear with a sharper silhouette.</p>
          </Link>
          <Link to="/shop" className="group rounded-2xl border border-border/70 bg-card/80 p-5 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Shop by edit</p>
            <h3 className="mt-2 text-2xl font-black">New season essentials</h3>
            <p className="mt-2 text-sm text-muted-foreground">Quiet pieces, premium fabric, and the foundation of the collection.</p>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="reveal-up grid gap-5 rounded-[1.6rem] border border-border/75 bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground md:grid-cols-3 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Editorial Capsule</p>
            <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">Built for presence. Designed for movement.</h3>
          </div>
          <div className="text-sm leading-relaxed text-primary-foreground/82 md:col-span-2 md:text-base">
            Northline combines fitted tailoring with expressive graphics and heavyweight textile standards to create pieces
            that feel contemporary, confident, and unmistakably premium.
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-4 px-4 pb-12 md:grid-cols-3">
        {values.map((feature, index) => (
          <article
            key={feature.title}
            className="reveal-up rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <feature.icon className="mb-4 h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold sm:text-xl">{feature.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="container mx-auto px-4">
        <div className="reveal-up rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/40 p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Join the private list</p>
              <h3 className="mt-2 text-2xl font-black md:text-4xl">Get first access to drops and restocks.</h3>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Request early access</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
