import { siteConfig } from "@/lib/siteConfig";

const principles = [
  {
    title: "Opinionated enough",
    body: "Includes practical defaults for speed, but avoids locking you into one architecture pattern.",
  },
  {
    title: "Composable by default",
    body: "Build pages from reusable UI blocks and keep route-level files lightweight and clear.",
  },
  {
    title: "Production-minded",
    body: "Linting, typed code, and easy deployment flow are all present from day one.",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="reveal-up text-4xl font-black md:text-5xl">About This Boilerplate</h1>
        <p className="reveal-up mt-5 text-base text-muted-foreground md:text-lg">
          {siteConfig.name} is designed to become your next website quickly while staying easy to maintain.
          It is intentionally minimal, so every section can be replaced with your own product voice.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="reveal-up rounded-xl border bg-card/90 p-5"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
