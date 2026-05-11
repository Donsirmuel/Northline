import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-card/70">
      <div className="container mx-auto px-4 py-6 md:py-14">
        <div className="md:hidden">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-black tracking-tight">{siteConfig.name}</h3>
              <p className="mt-1 max-w-[13rem] text-xs leading-5 text-muted-foreground">Premium streetwear essentials from Wales.</p>
            </div>
            <Link to="/contact" className="rounded-full border border-border px-3 py-1.5 text-xs font-bold">
              Contact
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/70 pt-4 text-xs font-semibold text-muted-foreground">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} to={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-5 text-center text-[11px] text-muted-foreground">&copy; {currentYear} {siteConfig.name}.</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base font-black tracking-tight md:text-lg">{siteConfig.name}</h3>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:leading-relaxed">{siteConfig.description}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
              Elevated essentials from Wales
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm font-bold md:text-base md:font-semibold">Explore</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm md:block md:space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm font-bold md:text-base md:font-semibold">Customer Care</h4>
            <ul className="space-y-2 text-sm md:space-y-2.5">
              <li>
                <span className="text-muted-foreground">Shipping and delivery</span>
              </li>
              <li>
                <span className="text-muted-foreground">Returns and exchanges</span>
              </li>
              <li>
                <span className="text-muted-foreground">Sizing and fit guide</span>
              </li>
              <li>
                <span className="text-muted-foreground">Secure Stripe payments</span>
              </li>
              <li>
                <span className="text-muted-foreground">Wholesale and collaborations</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm font-bold md:text-base md:font-semibold">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <span className="block font-medium text-foreground mb-1">Email:</span>
                {siteConfig.contact.email}
              </li>
              <li>
                <span className="block font-medium text-foreground mb-1">Phone:</span>
                {siteConfig.contact.phone}
              </li>
              <li>
                <span className="block font-medium text-foreground mb-1">Address:</span>
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 hidden border-t pt-8 text-center text-sm text-muted-foreground md:block">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
