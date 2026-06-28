import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/lib/catalog";
import { useCart } from "@/hooks/use-cart";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? "M");
  const [selectedImage, setSelectedImage] = useState(product?.image ?? "");
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedSize(product?.sizes[0] ?? "M");
    setSelectedImage(product?.image ?? "");
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products.filter((item) => item.id !== product.id).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="section-kicker">Shop</p>
        <h1 className="section-title mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.92]">Product not found.</h1>
        <p className="mt-4 text-muted-foreground">It may have moved into the archive.</p>
        <Button asChild className="mt-8 h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]">
          <Link to="/shop">Back to shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/shop" className="transition-colors hover:text-primary">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{product.series}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-14">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 shadow-[0_30px_80px_-38px_rgba(0,0,0,0.78)]">
            <img src={selectedImage} alt={product.name} className="aspect-[4/5] w-full object-cover" />
          </div>

          <div className="mobile-product-rail flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-[1rem] border transition-colors ${
                  selectedImage === image ? "border-primary" : "border-border/70 hover:border-primary/60"
                }`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} className="aspect-square w-24 shrink-0 object-cover sm:w-full" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="section-kicker">{product.category}</p>
          <h1 className="section-title mt-4 text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.9]">{product.name}</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{product.subtitle}</p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <span className="font-heading text-3xl font-bold">{"\u00A3"}{product.price}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Free UK shipping over £100</span>
          </div>

          <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-border/70 bg-card/60 p-5">
            <div>
              <p className="section-kicker">Short line</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.shortLine}</p>
            </div>
            <div>
              <p className="section-kicker">Story</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.story}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between gap-4">
              <p className="section-kicker">Size</p>
              <button className="text-[10px] uppercase tracking-[0.28em] text-primary hover:underline">Sizing guide</button>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-card/40 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 flex-1 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]"
              onClick={() => {
                addItem(product.id, selectedSize);
                toast.success("Added to cart", { description: `${product.name} in size ${selectedSize}` });
              }}
            >
              Add to bag
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary/20 bg-transparent px-6 text-[11px] uppercase tracking-[0.28em] text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/cart">Go to bag</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="editorial-frame p-5">
              <Truck className="h-5 w-5 text-primary" />
              <h2 className="mt-5 font-heading text-xl font-bold uppercase tracking-[0.04em]">Shipping</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                UK orders ship within 2 working days via tracked delivery. International shipping rates are shown at checkout.
              </p>
            </article>
            <article className="editorial-frame p-5">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="mt-5 font-heading text-xl font-bold uppercase tracking-[0.04em]">Returns</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                30-day returns on unworn pieces with tags attached. The return flow stays simple and direct.
              </p>
            </article>
          </div>

          <div className="mt-8 grid gap-4">
            <article className="editorial-frame p-5">
              <p className="section-kicker">Materials</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.materials}</p>
            </article>
            <article className="editorial-frame p-5">
              <p className="section-kicker">Fit</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.fit}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/70 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Pairs well with</p>
              <h2 className="section-title mt-3 text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[0.92]">More from the current edit.</h2>
            </div>
            <Link to="/shop" className="hidden text-[11px] font-semibold uppercase tracking-[0.26em] text-primary hover:underline sm:inline-flex">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/shop/${item.slug}`}
                className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/75 transition-transform duration-300 hover:-translate-y-1"
              >
                <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{item.series}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-[0.04em]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.shortLine}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
