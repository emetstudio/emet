import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";
import { SERVICES, type ServiceCategory } from "../lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: ServiceCategory } => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found · EMET" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.name} · EMET Digital Studio`;
    return {
      meta: [
        { title },
        { name: "description", content: s.description },
        { property: "og:title", content: title },
        { property: "og:description", content: s.description },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:image", content: logoAsset.url },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: s.description },
        { name: "twitter:image", content: logoAsset.url },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@type": "Organization", name: "EMET", url: "https://emetstudio.net" },
            areaServed: ["AU", "Worldwide"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: s.name,
              itemListElement: s.items.map((i) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: i.name, description: i.description },
              })),
            },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: ServiceCategory };
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="container-emet py-24 md:py-32 grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <Link to="/services" className="text-xs tracking-[0.25em] uppercase text-gold/80 hover:text-gold">
            ← All services
          </Link>
          <p className="eyebrow mt-8"><span className="hairline mr-4" />{s.eyebrow}</p>
          <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
            {s.name.split(" ").slice(0, -1).join(" ")} {" "}
            <span className="italic text-gold">{s.name.split(" ").slice(-1)}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{s.intro}</p>
        </div>
        <img
          src={s.image}
          alt={`${s.name} service example`}
          width={1200}
          height={800}
          className="h-80 w-full object-cover md:h-full md:min-h-96"
        />
      </section>

      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20">
          <p className="eyebrow">What's included</p>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2 border border-border">
            {s.items.map((item) => (
              <div key={item.name} className="bg-background p-8">
                <h3 className="text-xl text-foreground">{item.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20 text-center">
          <h2 className="text-3xl md:text-4xl">Ready to begin {s.name.toLowerCase()}?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Request a quote</Link>
            <Link to="/pricing" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      <section className="container-emet py-20">
        <p className="eyebrow">Explore other disciplines</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$slug"
              params={{ slug: o.slug }}
              className="border border-border p-6 hover:border-gold/60 transition-colors"
            >
              <div className="text-xs tracking-[0.25em] uppercase text-gold/80">{o.eyebrow}</div>
              <div className="mt-3 text-xl text-foreground">{o.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
