import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
      url: `https://emetstudio.net/services/${s.slug}`,
      provider: { "@type": "Organization", name: "EMET" },
      areaServed: ["AU", "Worldwide"],
    },
  })),
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "EMET Studio Services | Software, Web, Creative, Media & Marketing" },
      {
        name: "description",
        content:
          "Software, web, branding, media and marketing services from EMET Studio in Perth.",
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
  const [activeService, setActiveService] = useState<(typeof SERVICES)[number] | null>(null);

  useEffect(() => {
    if (!activeService) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveService(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeService]);

  return (
    <>
      <section className="container-emet py-12 md:py-16">
        <p className="eyebrow"><span className="hairline mr-4" />What we do</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Services</h1>
      </section>
      <section className="border-t border-border/60">
        {SERVICES.map((s, idx) => (
          <div
            key={s.slug}
            className={`border-b border-border/60 ${idx % 2 === 0 ? "" : "bg-[oklch(0.17_0.035_245)]"}`}
          >
            <div className="container-emet py-10 md:py-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="group relative aspect-[16/7] overflow-hidden border border-border/60 bg-card md:aspect-auto md:h-44">
                <img src={s.image} alt={`${s.name} service`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
                <p className="absolute bottom-4 left-4 eyebrow text-gold-soft">{s.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl">{s.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.intro}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex text-sm text-gold gold-underline"
                  onClick={() => setActiveService(s)}
                >
                  Explore {s.name} →
                </button>
              </div>
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

      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setActiveService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-gold/30 bg-background p-6 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close service details"
              className="absolute right-5 top-4 text-2xl leading-none text-muted-foreground hover:text-gold"
              onClick={() => setActiveService(null)}
            >
              &times;
            </button>
            <p className="eyebrow">{activeService.eyebrow}</p>
            <h2 id="service-modal-title" className="mt-3 pr-8 text-3xl md:text-4xl">{activeService.name}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{activeService.intro}</p>
            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="eyebrow">Included</p>
              <ul className="mt-4 grid gap-5 sm:grid-cols-2">
                {activeService.items.map((item) => (
                  <li key={item.name}>
                    <h3 className="text-foreground font-medium">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/services/$slug"
              params={{ slug: activeService.slug }}
              className="btn-gold mt-8"
              onClick={() => setActiveService(null)}
            >
              View full service
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
