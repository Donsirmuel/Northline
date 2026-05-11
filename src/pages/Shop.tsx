import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/catalog";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

const categories = ["All", "Hoodies", "T-Shirts", "Outerwear"] as const;

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-14 md:py-20">
      <section className="reveal-up max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Northline Shop</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Curated streetwear for everyday impact.</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Precision cuts, premium fabrics, and statement graphics designed for people who dress with intent.
        </p>
      </section>

      <section className="reveal-up mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible" style={{ animationDelay: "120ms" }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
              category === activeCategory
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/50"
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <article
            key={product.id}
            className="reveal-up overflow-hidden rounded-[1.2rem] border border-border/80 bg-card/90"
            style={{ animationDelay: `${160 + index * 70}ms` }}
          >
            <Link to={`/shop/${product.slug}`} className="block overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </Link>
            <div className="space-y-3 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{product.category}</p>
                  <h2 className="mt-2 text-lg font-extrabold sm:text-xl">{product.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
                <p className="text-lg font-extrabold">${product.price}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  addItem(product.id, product.sizes[0]);
                  toast.success("Added to cart", { description: `${product.name} in size ${product.sizes[0]}` });
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to cart
              </Button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
