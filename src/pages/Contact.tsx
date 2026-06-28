import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/siteConfig";

const topics = ["General", "Order / Returns", "Wholesale", "Press", "Custom work"] as const;

export default function Contact() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("General");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    toast.success("Message sent.", {
      description: "We'll reply within two working days.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-background pb-16 md:pb-24">
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="section-kicker">Contact the studio</p>
          <h1 className="section-title mt-4 text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.88]">
            Talk to Northline
            <span className="block text-primary/60">if you need help choosing.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            For order questions, wholesale, press, or custom enquiries, send us a direct note. We keep the response process short and clear.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="section-kicker">Topic</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors ${
                    topic === item
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="section-kicker">
                Name
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="h-12 border-border/70 bg-card/30 px-4"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="section-kicker">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="h-12 border-border/70 bg-card/30 px-4"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="section-kicker">
              Message
            </Label>
            <Textarea
              id="message"
              required
              rows={8}
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className="resize-none border-border/70 bg-card/30 px-4 py-3"
              placeholder="Tell us what you're building, asking, or ordering."
            />
          </div>

          <Button type="submit" size="lg" className="h-12 rounded-full px-6 text-[11px] uppercase tracking-[0.28em]">
            Send message
          </Button>
        </form>

        <aside className="space-y-5">
          <div className="editorial-frame p-6">
            <p className="section-kicker">Studio</p>
            <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-[0.04em]">Northline HQ</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              A small studio base for products, content, and direct customer support. Everything stays close so the response stays clear.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="editorial-frame flex gap-4 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.address}</p>
              </div>
            </div>
            <div className="editorial-frame flex gap-4 p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
            <div className="editorial-frame flex gap-4 p-5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
              </div>
            </div>
            <div className="editorial-frame flex gap-4 p-5">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Response window</p>
                <p className="mt-1 text-sm text-muted-foreground">Mon to Fri, within two working days.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
