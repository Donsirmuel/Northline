import { ArrowRight, Blocks, Compass, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

const features = [
  {
    title: "Fast setup",
    description: "Typed routes, utility-first styling, and prewired UI primitives help you move quickly.",
    icon: Rocket,
  },
  {
    title: "Flexible structure",
    description: "Use this as a landing page, SaaS front site, product website, or internal portal shell.",
    icon: Blocks,
  },
  {
    title: "Easy customization",
    description: "Centralized site config lets you rename, relink, and retheme without searching every file.",
    icon: Compass,
  },
];

const starterSteps = [
  "Update src/lib/siteConfig.ts with your brand and contact info.",
  "Customize colors and typography tokens in src/index.css.",
  "Swap section copy and wire forms/APIs where needed.",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-secondary/50 to-transparent" />
      </div>

      <section className="container mx-auto px-4 pb-14 pt-16 md:pb-20 md:pt-24">
        <p className="reveal-up mb-4 inline-flex rounded-full border border-accent/30 bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Website Starter
        </p>
        <h1 className="reveal-up max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          {siteConfig.name}
          <span className="block text-muted-foreground">{siteConfig.tagline}</span>
        </h1>
        <p className="reveal-up mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {siteConfig.description}
        </p>
        <div className="reveal-up mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to={siteConfig.ctaPrimary.href}>
              {siteConfig.ctaPrimary.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to={siteConfig.ctaSecondary.href}>{siteConfig.ctaSecondary.label}</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto grid gap-4 px-4 pb-14 md:grid-cols-3 md:pb-20">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="reveal-up rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <feature.icon className="mb-4 h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">{feature.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="reveal-up rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/40 p-8 md:p-10">
          <h3 className="text-2xl font-bold md:text-3xl">Recommended first edits</h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground md:text-base">
            {starterSteps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
