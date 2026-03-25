import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-lg font-black tracking-tight md:text-2xl">{siteConfig.name}</span>
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
            <Button asChild className="hidden md:inline-flex" size="sm">
              <Link to={siteConfig.ctaPrimary.href}>{siteConfig.ctaPrimary.label}</Link>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Menu className="h-[18px] w-[18px]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
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
