import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { featuredProducts, products, seriesOrder } from "@/lib/catalog";
import { useCart } from "@/hooks/use-cart";

const filters = ["All", ...seriesOrder] as const;
const GBP = "\u00A3";

function ProductCard({ product, featured = false }: { product: (typeof products)[number]; featured?: boolean }) {
  const { addItem } = useCart();

  return (
    <article
      className={`group overflow-hidden rounded-[1.8rem] border border-border/70 bg-card/80 transition-transform duration-300 hover:-translate-y-1 ${
        featured ? "xl:col-span-2 xl:grid xl:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <Link to={`/shop/${product.slug}`} className={featured ? "block h-full" : "block"}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
            featured ? "aspect-[4/3] xl:h-full xl:min-h-[26rem]" : "aspect-[4/5]"
          }`}
          loading="lazy"
        />
      </Link>
      <div className={`space-y-4 p-5 ${featured ? "xl:flex xl:flex-col xl:justify-between xl:p-7" : ""}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">{product.series}</p>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{product.category}</span>
          </div>
          <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.04em]">{product.name}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{product.subtitle}</p>
          <p className="text-sm leading-6 text-muted-foreground">{product.fit}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-heading text-xl font-bold">
            {GBP}
            {product.price}
          </span>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="h-10 rounded-full px-4 text-[10px] uppercase tracking-[0.24em]"
              onClick={() => {
                addItem(product.id, product.sizes[0]);
                toast.success("Added to cart", { description: `${product.name} in size ${product.sizes[0]}` });
              }}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-10 rounded-full border-primary/20 bg-transparent px-4 text-[10px] uppercase tracking-[0.24em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to={`/shop/${product.slug}`}>View</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Shop() {
  const [activeSeries, setActiveSeries] = useState<(typeof filters)[number]>("All");
  const leadProduct = featuredProducts[0] ?? products[0];

  const filteredProducts = useMemo(() => {
    if (activeSeries === "All") return products;
    return products.filter((product) => product.series === activeSeries);
  }, [activeSeries]);

  const primaryProduct = filteredProducts[0] ?? leadProduct;
  const remainingProducts = filteredProducts.slice(1);

  return (
    <div className="bg-background pb-16 md:pb-24">
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="section-kicker">Shop Northline</p>
            <h1 className="section-title mt-4 text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.88]">
              Find the piece that fits your week.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Browse heavyweight tees that are easy to wear, easy to style, and built with enough room to move. If you need help choosing, the fit notes and product details do the heavy lifting.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                [Truck, "Tracked shipping", "Fast dispatch and clear updates."],
                [ShieldCheck, "Simple returns", "30-day return window on unworn pieces."],
                [Clock3, "Easy support", "Quick help if you need sizing advice."],
              ].map(([Icon, title, description]) => (
                <article key={title as string} className="editorial-frame rounded-[1.1rem] p-4">
                  <Icon className="h-4 w-4 text-primary" />
                  <h2 className="mt-4 font-heading text-base font-bold uppercase tracking-[0.04em]">{title as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description as string}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="gloss-panel overflow-hidden rounded-[2rem]">
            <img src={leadProduct.image} alt={leadProduct.name} className="aspect-[4/5] w-full object-cover object-center" />
            <div className="border-t border-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker">Customer favorite</p>
                  <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-[0.04em]">{leadProduct.name}</h2>
                </div>
                <span className="font-heading text-xl font-bold">
                  {GBP}
                  {leadProduct.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{leadProduct.story}</p>
              <div className="mt-5 flex items-center gap-3">
                <Button asChild className="h-11 rounded-full px-5 text-[10px] uppercase tracking-[0.26em]">
                  <Link to={`/shop/${leadProduct.slug}`}>
                    View piece
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-primary/20 bg-transparent px-5 text-[10px] uppercase tracking-[0.26em] text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/collections">See collections</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveSeries(filter)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors ${
                filter === activeSeries
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProductCard product={primaryProduct} featured />
          {remainingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="gloss-panel grid gap-6 rounded-[1.8rem] p-6 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Need help choosing?</p>
            <h2 className="section-title mt-3 text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[0.92]">We can help with size, fit, or what to buy first.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              If you are buying for the first time, start with the fit notes and the shortest product line. If you need a recommendation, contact the studio and we'll point you to the right piece.
            </p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]">
            <Link to="/contact">Ask for help</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
