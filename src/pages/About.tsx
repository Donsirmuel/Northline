import { siteConfig } from "@/lib/siteConfig";

const principles = [
  {
    title: "Intentional design",
    body: "Every drop begins with silhouette studies and fabric tests to keep each release distinctive.",
  },
  {
    title: "Premium materials",
    body: "From dense fleece to soft-wash cotton, each material is selected for comfort and shape retention.",
  },
  {
    title: "Culture first",
    body: "Northline is inspired by street expression, music, and local creative communities across Wales and beyond.",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">About {siteConfig.name}</p>
        <h1 className="reveal-up mt-4 text-4xl font-black leading-tight md:text-6xl">Built from story, shaped by craft.</h1>
        <p className="reveal-up mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
          {siteConfig.name} was founded to create clothing that feels both expressive and elevated. We design with
          clean structure, premium texture, and a visual voice rooted in modern street culture.
        </p>

        <div className="reveal-up mt-10 overflow-hidden rounded-[1.4rem] border border-border/75 bg-card/70 p-2">
          <img
            src="/assets/pictures%20with%20names/the-fallen-tee-mock.png"
            alt="Northline studio moodboard"
            className="aspect-[16/7] w-full rounded-xl object-cover"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="reveal-up rounded-xl border border-border/70 bg-card/90 p-5"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="reveal-up mt-10 rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/40 p-7 md:p-9">
          <h3 className="text-2xl font-black md:text-3xl">What we stand for</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our goal is to create confident pieces that outlast trends. We keep drops focused, improve each collection
            from feedback, and build for people who treat clothing as identity.
          </p>
        </div>
      </div>
    </div>
  );
}
