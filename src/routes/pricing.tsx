import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";

const CREATIVE_MEDIA = [
  ["Logo Design", "$100 – $250"],
  ["Business Card Design", "$50 – $100"],
  ["Flyer / Poster", "$80 – $150"],
  ["Social Media Post (single)", "$20 – $40"],
  ["Social Media Package (10 posts)", "$150 – $300"],
  ["Instagram Reel / TikTok Edit", "$60 – $150"],
  ["Promotional Video (30–60 sec)", "$200 – $500"],
  ["Professional Photography (1 hour)", "$150 – $300"],
  ["Event Photography", "$300 – $700"],
  ["Event Videography", "$500 – $1,200"],
];

const WEBSITES = [
  ["One-page landing page", "$400 – $700"],
  ["Basic business website (3–5 pages)", "$800 – $1,500"],
  ["Professional business website (6–10 pages)", "$1,500 – $3,000"],
  ["E-commerce website", "$2,000 – $5,000"],
  ["Website maintenance", "$50 – $150 / month"],
];

const SOFTWARE = [
  ["Website audit", "$150 – $300"],
  ["Website speed optimisation", "$200 – $500"],
  ["Booking system setup", "$300 – $700"],
  ["Business automation", "$500 – $2,000"],
  ["Custom web application", "From $3,000"],
  ["Mobile app", "From $5,000"],
];

const RETAINERS = [
  ["Website maintenance", "$80 – $150 / month"],
  ["Social media management", "$350 – $1,200 / month"],
  ["Technical support", "$200 – $600 / month"],
  ["Content creation", "$500 – $1,500 / month"],
];

const BRAND_PACKS = [
  {
    name: "Starter Brand",
    price: "$350",
    items: ["Logo", "Business card", "Colour palette", "Typography guide"],
  },
  {
    name: "Business Brand",
    price: "$800",
    items: ["Everything in Starter", "Social media kit", "Email signature", "Brand guidelines"],
    featured: true,
  },
];

const LAUNCH_PACKS = [
  {
    name: "Starter Launch",
    price: "$499",
    was: "$899",
    items: [
      "Custom logo",
      "3-page business website",
      "Contact form",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Google Maps integration",
      "3 social media graphics",
      "14 days of support",
    ],
  },
  {
    name: "Growth Launch",
    price: "$999",
    was: "$1,699",
    items: [
      "Everything in Starter",
      "Up to a 5-page website",
      "Professional photo session",
      "30-second promotional video",
      "Business cards",
      "Google Business Profile setup",
      "One month of website support",
    ],
    featured: true,
  },
  {
    name: "Premium Launch",
    price: "$1,999",
    was: "$3,499",
    items: [
      "Full branding package",
      "Up to a 10-page website",
      "Professional photography",
      "Promotional video",
      "10 social media graphics",
      "Website training",
      "Three months of support",
    ],
  },
];

const SOCIAL_PACKS = [
  ["Starter", "$350 / month"],
  ["Growth", "$700 / month"],
  ["Premium", "$1,200+ / month"],
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing · Websites, Branding, Media & Software | EMET" },
      {
        name: "description",
        content:
          "Transparent AUD pricing for websites, branding, photography, videography, social media and custom software. Fixed packages and monthly retainers.",
      },
      { property: "og:title", content: "EMET Pricing · Websites, Branding, Media, Software" },
      { property: "og:description", content: "Transparent AUD pricing. No hidden costs." },
      { property: "og:url", content: "/pricing" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "EMET Pricing" },
      { name: "twitter:description", content: "Transparent AUD pricing. No hidden costs." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Table({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div>
      <h3 className="text-xl text-foreground border-b border-gold/40 pb-3">{title}</h3>
      <dl className="mt-4 divide-y divide-border/60">
        {rows.map(([name, price]) => (
          <div key={name} className="flex justify-between gap-6 py-3">
            <dt className="text-sm text-foreground/85">{name}</dt>
            <dd className="text-sm text-gold whitespace-nowrap">{price}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Pricing() {
  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />Transparent pricing · AUD</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Honest pricing. <span className="italic text-gold">No hidden costs.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A guide to our standard packages and rates in AUD. Custom software
          is quoted based on scope. Every quote is final.
        </p>
      </section>

      {/* LAUNCH PACKAGES */}
      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20">
          <p className="eyebrow">Launch packages</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Everything you need to go live.</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Introductory pricing for new businesses. First 10 clients receive one free bonus. See below.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LAUNCH_PACKS.map((p) => (
              <div
                key={p.name}
                className={`relative p-8 border ${p.featured ? "border-gold bg-[oklch(0.24_0.045_245)]" : "border-border bg-background"}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8 bg-gold text-navy-deep text-[0.65rem] tracking-[0.25em] uppercase px-2 py-1">
                    Most popular
                  </div>
                )}
                <h3 className="text-2xl text-foreground">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl text-gold font-display">{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.was}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 block text-center ${p.featured ? "btn-gold" : "btn-ghost"}`}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-emerald/40 bg-background p-6">
            <div className="text-xs tracking-[0.28em] uppercase text-emerald">Launch bonus · First 10 clients</div>
            <p className="mt-3 text-foreground/90">
              Choose one free extra: business email setup, branded QR code,
              one year of basic website maintenance, or a social media
              optimisation session.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND PACKAGES */}
      <section className="container-emet py-20">
        <p className="eyebrow">Branding packages</p>
        <h2 className="mt-4 text-3xl md:text-4xl">Identity built from the ground up.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-3xl">
          {BRAND_PACKS.map((p) => (
            <div key={p.name} className={`p-8 border ${p.featured ? "border-gold bg-[oklch(0.22_0.04_245)]" : "border-border"}`}>
              <h3 className="text-2xl text-foreground">{p.name}</h3>
              <div className="mt-4 text-4xl text-gold font-display">{p.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-foreground/85">
                {p.items.map((i) => <li key={i} className="flex gap-2"><span className="text-gold">✓</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED PRICING */}
      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20 grid gap-16 md:grid-cols-2">
          <Table title="Websites" rows={WEBSITES} />
          <Table title="Software & Technology" rows={SOFTWARE} />
          <Table title="Creative & Media" rows={CREATIVE_MEDIA} />
          <div className="space-y-10">
            <Table title="Monthly Retainers" rows={RETAINERS} />
            <Table title="Social Media Management" rows={SOCIAL_PACKS} />
          </div>
        </div>
      </section>

      <section className="container-emet py-20 text-center">
        <p className="max-w-xl mx-auto text-sm text-muted-foreground">
          Custom software is quoted based on the scope of your project. All
          prices in AUD and exclude GST where applicable. International
          clients invoiced in AUD.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-gold">Request a quote</Link>
          <Link to="/services" className="btn-ghost">See services</Link>
        </div>
      </section>
    </>
  );
}
