import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { products, seriesOrder } from "@/lib/catalog";

const collectionNotes = {
  "Core Drop": "The easiest place to start if you want a clean everyday tee with minimal styling effort.",
  "Predator Series": "For customers who want a stronger graphic and a bit more visual impact.",
  "Explorer Series": "A more expressive option with a colder colour palette and standout front artwork.",
  "Industrial Exploration": "The loudest option in the range, built for when the print should do the talking.",
  "Northern Myth": "A darker mood with enough character to feel premium but still wearable.",
};

export default function Collections() {
  return (
    <div className="bg-background pb-16 md:pb-24">
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8 lg:py-20">
          <div>
            <p className="section-kicker">Collections</p>
            <h1 className="section-title mt-4 text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.88]">
              Choose by mood,
              <span className="block text-primary/60">fit, or graphic weight.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Northline keeps the line organized into a few clear collection groups so it is easier to find the piece that matches how you actually wear clothes.
            </p>
          </div>

          <div className="gloss-panel overflow-hidden rounded-[2rem]">
            <img
              src="/assets/northline/Industrial%20Tactical.png"
              alt="Northline collection preview"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-4">
          {seriesOrder.map((series, index) => {
            const seriesProducts = products.filter((product) => product.series === series);
            const preview = seriesProducts[0];

            return (
            <article key={series} className="editorial-frame grid gap-5 overflow-hidden p-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.4rem]">
                <img src={preview.image} alt={preview.name} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="space-y-4 p-2 lg:p-4">
                <div className="flex items-center justify-between gap-4">
                    <p className="section-kicker">{String(index + 1).padStart(2, "0")}</p>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {seriesProducts.length} pieces
                    </span>
                  </div>
                  <h2 className="section-title text-[clamp(1.8rem,4vw,3rem)] leading-[0.92]">{series}</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                    {collectionNotes[series as keyof typeof collectionNotes] ?? "A focused group of products with a shared graphic direction and easy wearability."}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="h-11 rounded-full px-5 text-[10px] uppercase tracking-[0.26em]">
                      <Link to="/shop">Shop this collection</Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full border-primary/20 bg-transparent px-5 text-[10px] uppercase tracking-[0.26em] text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to={`/shop/${preview.slug}`}>View first piece</Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gloss-panel grid gap-6 rounded-[1.8rem] p-6 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">How to shop Northline</p>
            <h2 className="section-title mt-3 text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[0.92]">
              Start with the fit, then choose the graphic.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              If you want something easy to wear every day, start in Core Drop. If you want a stronger graphic statement, move into Predator or Industrial Exploration.
            </p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]">
            <Link to="/shop">Browse the shop</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
