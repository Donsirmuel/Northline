import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    toast.success("You're on the list.", {
      description: "Northline drop notes only. No noise.",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-card/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <div className="font-heading text-lg font-bold uppercase tracking-[0.22em]">{siteConfig.name}</div>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{siteConfig.description}</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Drop culture / editorial streetwear / Cardiff
            </p>
          </div>

          <div>
            <div className="section-kicker">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-kicker">Drop access</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              One short email when a drop lands, when a restock opens, or when the studio has something worth seeing.
            </p>
            <form onSubmit={submit} className="mt-5 flex flex-col overflow-hidden border border-white/10 bg-white/5 focus-within:border-primary sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:py-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 text-sm text-muted-foreground md:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{siteConfig.contact.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-primary">
              {siteConfig.contact.email}
            </a>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 transition-colors hover:text-primary"
          >
            <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>@northline.uk</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Northline. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/about" className="transition-colors hover:text-primary">
              Philosophy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
            <Link to="/shop" className="transition-colors hover:text-primary">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
