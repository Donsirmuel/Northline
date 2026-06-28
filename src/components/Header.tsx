import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/siteConfig";
import { useCart } from "@/hooks/use-cart";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  const isActive = (path: string) => (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-2xl shadow-[0_10px_40px_-28px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:h-11 sm:w-11">
            <img
              src="/assets/northline/Northline%20Logo.png"
              alt="Northline logo"
              className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] invert"
            />
          </span>
          <div className="min-w-0">
            <div className="truncate font-heading text-sm font-bold uppercase tracking-[0.3em] leading-none sm:text-base">
              {siteConfig.name}
            </div>
            <div className="mt-1 hidden truncate text-[10px] uppercase tracking-[0.34em] text-muted-foreground sm:block">
              {siteConfig.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground md:flex">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors hover:text-foreground ${isActive(link.href) ? "text-foreground" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden border border-white/10 bg-white/5 px-3 uppercase tracking-[0.22em] text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:inline-flex">
            <Link to="/shop">Shop drop</Link>
          </Button>

          <Button asChild variant="ghost" size="icon" className="relative h-10 w-10">
            <Link to="/cart" aria-label="Open cart">
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[88vw] border-l border-border bg-background p-0 sm:max-w-sm">
              <SheetHeader className="border-b border-border px-6 py-5 text-left">
                <SheetTitle className="font-heading text-base font-bold uppercase tracking-[0.18em] sm:text-lg">
                  Northline
                </SheetTitle>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Drop culture, built north.
                </p>
              </SheetHeader>

              <nav className="flex flex-col">
                {siteConfig.nav.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`border-b border-border px-6 py-5 font-heading text-2xl font-bold uppercase tracking-[0.06em] transition-colors hover:bg-primary hover:text-primary-foreground ${
                      isActive(link.href) ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto px-6 py-6">
                <Separator className="mb-6 bg-border" />
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Northline / Cardiff / Studio line
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
