import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-card/80">
      <div className="container mx-auto px-4 py-6 md:py-7">
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

        <div className="hidden items-start justify-between gap-8 md:grid md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <h3 className="text-lg font-black tracking-tight">{siteConfig.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-5 text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold">Explore</h4>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold">Contact</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Email: </span>{siteConfig.contact.email}
              </li>
              <li>
                <span className="font-medium text-foreground">Phone: </span>{siteConfig.contact.phone}
              </li>
              <li>
                <span className="font-medium text-foreground">Address: </span>{siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 hidden border-t pt-4 text-center text-xs text-muted-foreground md:block">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
