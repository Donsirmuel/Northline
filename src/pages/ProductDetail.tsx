import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/lib/catalog";
import { useCart } from "@/hooks/use-cart";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? "M");
  const { addItem } = useCart();

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item.id !== product.id).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-black">Product not found.</h1>
        <Button asChild className="mt-6">
          <Link to="/shop">Back to shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <section className="reveal-up overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/90">
          <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
        </section>

        <section className="reveal-up space-y-6" style={{ animationDelay: "100ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">{product.name}</h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">{product.subtitle}</p>
          <p className="text-3xl font-extrabold">${product.price}</p>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-11 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card hover:border-foreground/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full max-w-sm"
            onClick={() => {
              addItem(product.id, selectedSize);
              toast.success("Added to cart", { description: `${product.name} in size ${selectedSize}` });
            }}
          >
            Add to cart
          </Button>

          <div className="space-y-3 rounded-xl border border-border/70 bg-secondary/50 p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-accent" />
              UK shipping in 2 to 4 business days.
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              30-day returns and secure checkout available.
            </p>
          </div>
        </section>
      </div>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black md:text-3xl">You may also like</h2>
          <Link to="/shop" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/shop/${item.slug}`}
              className="overflow-hidden rounded-xl border border-border/70 bg-card/90 transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="text-lg font-extrabold">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
