import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, Minus, Plus, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { appConfig } from "@/lib/config";
import { useCart } from "@/hooks/use-cart";

type CheckoutFormState = {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  notes: string;
};

type CheckoutResponse = {
  orderId: string;
  message?: string;
};

const initialFormState: CheckoutFormState = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  region: "",
  postalCode: "",
  country: "United Kingdom",
  notes: "",
};

export default function Cart() {
  const { items, subtotal, itemCount, updateQuantity, removeItem, clearCart } = useCart();
  const [formState, setFormState] = useState<CheckoutFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrderId, setSubmittedOrderId] = useState<string | null>(null);

  const shipping = useMemo(() => {
    return subtotal >= 120 ? 0 : 8;
  }, [subtotal]);

  const total = subtotal + shipping;

  const endpointUrl = appConfig.apiBaseUrl && appConfig.apiBaseUrl !== "https://api.example.com"
    ? `${appConfig.apiBaseUrl.replace(/\/$/, "")}/orders`
    : "/api/orders";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            fullName: formState.fullName,
            email: formState.email,
            phone: formState.phone,
          },
          shippingAddress: {
            addressLine1: formState.addressLine1,
            addressLine2: formState.addressLine2,
            city: formState.city,
            region: formState.region,
            postalCode: formState.postalCode,
            country: formState.country,
          },
          notes: formState.notes,
          subtotal,
          shipping,
          total,
          items: items.map((item) => ({
            productId: item.productId,
            slug: item.slug,
            name: item.name,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Order submission failed");
      }

      const payload = (await response.json()) as CheckoutResponse;
      setSubmittedOrderId(payload.orderId);
      clearCart();
      setFormState(initialFormState);
      toast.success("Order request sent", {
        description: `Reference ${payload.orderId} created.`,
      });
    } catch {
      toast.error("Could not send order request", {
        description: "Check your backend endpoint and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/70 bg-card/80 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Cart</p>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">Your cart is empty.</h1>
          <p className="mt-3 text-muted-foreground">Add a piece to see your order summary and shipping options here.</p>
          <Button asChild className="mt-6">
            <Link to="/shop">Go to shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-14 md:py-20">
      <h1 className="text-4xl font-black md:text-5xl">Your bag</h1>

      <div className="mt-3 text-sm text-muted-foreground">{itemCount} item{itemCount === 1 ? "" : "s"} in cart</div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-4">
          {items.map((item) => (
            <article
              key={`${item.productId}-${item.size}`}
              className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card/90 p-4 sm:flex-row"
            >
              <img src={item.image} alt={item.name} className="h-28 w-24 rounded-md object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h2 className="text-lg font-extrabold">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                  </div>
                  <p className="text-lg font-extrabold">{"\u00A3"}{item.price}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      className="rounded-full p-1 transition-colors hover:bg-muted"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      className="rounded-full p-1 transition-colors hover:bg-muted"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.productId, item.size)}
                    className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="h-fit space-y-6 rounded-xl border border-border/80 bg-card/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Order summary</p>
          <div className="mt-4 flex items-center justify-between border-b border-border/70 pb-4">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-2xl font-extrabold">{"\u00A3"}{subtotal.toFixed(2)}</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `\u00A3${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Total</span>
              <span>{"\u00A3"}{total.toFixed(2)}</span>
            </div>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Guest checkout. No account required.
          </p>

          {submittedOrderId ? (
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-900 dark:text-emerald-100">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Order request received
              </div>
              <p className="mt-2">Reference: {submittedOrderId}</p>
            </div>
          ) : null}

          <form className="space-y-4 border-t border-border/70 pt-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  required
                  value={formState.fullName}
                  onChange={(event) => setFormState((current) => ({ ...current, fullName: event.target.value }))}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formState.phone}
                  onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="+44 7700 900123"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="addressLine1">Address line 1</Label>
                <Input
                  id="addressLine1"
                  required
                  value={formState.addressLine1}
                  onChange={(event) => setFormState((current) => ({ ...current, addressLine1: event.target.value }))}
                  placeholder="12 Market Street"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="addressLine2">Address line 2</Label>
                <Input
                  id="addressLine2"
                  value={formState.addressLine2}
                  onChange={(event) => setFormState((current) => ({ ...current, addressLine2: event.target.value }))}
                  placeholder="Apartment, suite, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  required
                  value={formState.city}
                  onChange={(event) => setFormState((current) => ({ ...current, city: event.target.value }))}
                  placeholder="Cardiff"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">County / region</Label>
                <Input
                  id="region"
                  value={formState.region}
                  onChange={(event) => setFormState((current) => ({ ...current, region: event.target.value }))}
                  placeholder="Wales"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal code</Label>
                <Input
                  id="postalCode"
                  required
                  value={formState.postalCode}
                  onChange={(event) => setFormState((current) => ({ ...current, postalCode: event.target.value }))}
                  placeholder="CF10 1AA"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  required
                  value={formState.country}
                  onChange={(event) => setFormState((current) => ({ ...current, country: event.target.value }))}
                  placeholder="United Kingdom"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Delivery notes</Label>
              <Textarea
                id="notes"
                rows={3}
                value={formState.notes}
                onChange={(event) => setFormState((current) => ({ ...current, notes: event.target.value }))}
                placeholder="Leave gate code, preferred delivery instructions, etc."
              />
            </div>

            <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isSubmitting ? "Sending order request..." : "Place guest order request"}
            </Button>

            <p className="text-xs text-muted-foreground">
              Note: We don't save your details, all details are saved locally in your browser and will be lost if you clear your cookies or local storage. You will receive an email with your order reference number, which you can use to track your order.
            </p>
          </form>
        </aside>
      </div>
    </div>
  );
}
