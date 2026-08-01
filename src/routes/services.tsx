import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";
import { SERVICES } from "../lib/services-data";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      url: `https://www.emet.com.au/services/${s.slug}`,
      provider: { "@type": "Organization", name: "EMET" },
      areaServed: ["AU", "Worldwide"],
    },
  })),
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Software, Web, Creative, Media & Marketing | EMET" },
      {
        name: "description",
        content:
          "EMET services: custom software, web development, branding, photography, videography and digital marketing. Built on truth.",
      },
      { property: "og:title", content: "EMET Services · Software, Web, Creative, Media, Marketing" },
      { property: "og:description", content: "Five disciplines, one standard of craft. Built on truth." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "EMET Services" },
      { name: "twitter:description", content: "Software, web, creative, media and marketing built with integrity." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicesJsonLd) }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />What we do</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Five disciplines. One standard of <span className="italic text-gold">craft.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Everything a modern business needs under one roof. Transparent
          quotes and honest reporting.
        </p>
      </section>

      <section className="border-t border-border/60">
        {SERVICES.map((s, idx) => (
          <div
            key={s.slug}
            className={`border-b border-border/60 ${idx % 2 === 0 ? "" : "bg-[oklch(0.17_0.035_245)]"}`}
          >
            <div className="container-emet py-20 grid gap-12 md:grid-cols-[1fr_1.6fr]">
              <div>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-4 text-3xl md:text-4xl">{s.name}</h2>
                <p className="mt-4 text-gold italic">{s.tagline}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{s.intro}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-8 inline-block text-sm text-gold gold-underline"
                >
                  Explore {s.name} →
                </Link>
              </div>
              <ul className="grid gap-6 sm:grid-cols-2 self-start">
                {s.items.map((item) => (
                  <li key={item.name} className="border-l border-gold/40 pl-5">
                    <div className="text-foreground font-medium">{item.name}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="container-emet py-24 text-center">
        <h2 className="text-3xl md:text-4xl">Have a project in mind?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-gold">Request a quote</Link>
          <Link to="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </section>
    </>
  );
}
