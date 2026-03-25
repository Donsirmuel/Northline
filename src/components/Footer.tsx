import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-card/60">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-tight">{siteConfig.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">Starter Checklist</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-muted-foreground">Rename site in siteConfig</span>
              </li>
              <li>
                <span className="text-muted-foreground">Replace copy and CTAs</span>
              </li>
              <li>
                <span className="text-muted-foreground">Update metadata in index.html</span>
              </li>
              <li>
                <span className="text-muted-foreground">Add your own sections/components</span>
              </li>
              <li>
                <span className="text-muted-foreground">Connect APIs where needed</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">Contact</h4>
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

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
