import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/siteConfig";
import { useCart } from "@/hooks/use-cart";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/92 backdrop-blur-md md:bg-background/85">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 items-center justify-between gap-3 md:h-20">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img src="/assets/northline/Northline%20Logo.png" alt="Northline crest logo" className="h-7 w-7 rounded-sm object-contain md:h-8 md:w-8" />
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="block truncate text-sm font-black tracking-tight sm:text-lg md:text-2xl">{siteConfig.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block">
                Premium streetwear
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="relative hidden md:inline-flex">
              <Link to="/cart" aria-label="Open cart">
                <ShoppingBag className="h-4 w-4" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button asChild className="hidden md:inline-flex" size="sm">
              <Link to={siteConfig.ctaPrimary.href}>{siteConfig.ctaPrimary.label}</Link>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground transition-colors hover:text-foreground">
                  <Menu className="h-[18px] w-[18px]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <Separator className="my-6" />
                <nav className="flex flex-col space-y-1">
                  {siteConfig.nav.map((link) => {
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-all hover:bg-accent/20 hover:translate-x-1 ${
                          isActive(link.href) ? "bg-accent text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                  <Link
                    to="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-foreground transition-all hover:bg-accent/20"
                  >
                    <span>Cart</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-bold">{itemCount}</span>
                  </Link>
                  <Button asChild className="mt-4 w-full">
                    <Link to={siteConfig.ctaPrimary.href} onClick={() => setMobileMenuOpen(false)}>
                      {siteConfig.ctaPrimary.label}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
