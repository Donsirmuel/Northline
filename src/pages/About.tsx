import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

const benefits = [
  {
    title: "Easy to wear",
    body: "Relaxed shapes, clear size notes, and graphics that feel confident without being difficult to style.",
  },
  {
    title: "Built to last",
    body: "Heavyweight cotton, sturdy print finishes, and cuts made to hold their shape after repeat wear.",
  },
  {
    title: "Simple support",
    body: "Clear product pages, direct contact, and a returns process that stays straightforward.",
  },
];

const stats = [
  ["240 gsm", "Core tee weight"],
  ["30 days", "Return window"],
  ["UK", "Dispatch base"],
  ["24h", "Drop access"],
];

export default function About() {
  return (
    <div className="bg-background pb-16 md:pb-24">
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-end lg:px-8 lg:py-20">
          <div>
            <p className="section-kicker">About Northline</p>
            <h1 className="section-title mt-4 text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.88]">
              Designed to make buying
              <span className="block text-primary/60">feel straightforward.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {siteConfig.description} We keep the range focused so customers can choose quickly, understand the fit, and feel good about what they're getting.
            </p>
          </div>

          <div className="gloss-panel grid gap-4 p-4 sm:grid-cols-[1fr_0.8fr]">
            <img
              src="/assets/northline/Model%20Male.png"
              alt="Northline model on a dark industrial backdrop"
              className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
            />
            <div className="grid gap-4">
              <img
                src="/assets/northline/Model%20Female.png"
                alt="Northline model in layered streetwear"
                className="aspect-[3/4] w-full rounded-[1.2rem] object-cover"
              />
              <img
                src="/assets/northline/Polar%20Bear-back%20view.png"
                alt="Northline product detail image"
                className="aspect-[3/2] w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label}>
              <div className="font-heading text-3xl font-bold uppercase tracking-[0.04em] sm:text-4xl">{value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Why Northline works</p>
            <h2 className="section-title mt-3 text-[clamp(2rem,5vw,4rem)] leading-[0.92]">The goal is fewer choices and better ones.</h2>
          </div>
          <div className="grid gap-4">
            {benefits.map((item, index) => (
              <article key={item.title} className="editorial-frame grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="section-kicker">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="section-kicker">What you can expect</p>
            <h2 className="section-title mt-3 text-[clamp(2rem,5vw,4rem)] leading-[0.92]">
              Clear fit notes, honest product details, and support when you need it.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Northline keeps the experience simple: the shop is easy to browse, the product pages explain the fit and material, and the team is easy to contact if you need help deciding.
            </p>
          </div>

          <div className="editorial-frame p-5">
            <div className="flex items-center justify-between">
              <p className="section-kicker">Next drop</p>
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Drop 002</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The next release will keep the same formula: a smaller edit, clearer size guidance, and product stories written in plain language.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]">
                <Link to="/shop">Browse the shop</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-primary/20 bg-transparent px-6 text-[11px] uppercase tracking-[0.28em] text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Get help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
