import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "../assets/hero-bg.jpg";
import emetLogo from "../assets/emet-logo.png";
import { SERVICES, CORE_VALUES } from "../lib/services-data";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EMET",
  image: emetLogo,
  url: "https://www.emet.com.au",
  telephone: "+61497461907",
  email: "hello@emet.com.au",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perth",
    addressRegion: "WA",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "Country", name: "Australia" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "AI & Business Automation",
    "Branding & Identity",
    "Digital Marketing",
    "Search Engine Optimisation",
    "Photography & Videography",
  ],
  slogan: "Truth. Technology. Transformation.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMET · Truth. Technology. Transformation. | Digital Solutions" },
      {
        name: "description",
        content:
          "EMET builds software, websites, branding, media and marketing for businesses that value truth, excellence and impact.",
      },
      { name: "keywords", content: "web design, software development, digital agency, branding, SEO, mobile app development, EMET" },
      { property: "og:title", content: "EMET · Truth. Technology. Transformation." },
      { property: "og:description", content: "Digital solutions company building trusted software, websites and brands." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: emetLogo },
      { name: "twitter:title", content: "EMET · Truth. Technology. Transformation." },
      { name: "twitter:description", content: "Digital studio building trusted software, websites and brands." },
      { name: "twitter:image", content: emetLogo },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(homeJsonLd) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.19_0.04_245_/_0.4)] via-[oklch(0.19_0.04_245_/_0.7)] to-background" />
        <div className="container-emet relative py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="hairline mr-4" />
              Digital Solutions
            </p>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] text-foreground">
              Truth. Technology.
              <br />
              <span className="text-gold italic">Transformation.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              EMET builds software, websites, branding and media.
              Engineered with integrity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Start a project</Link>
              <Link to="/services" className="btn-ghost">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            ["Perth, Western Australia", "Based"],
            ["Global delivery", "Worldwide"],
            ["Fixed & retainer pricing", "No hidden costs"],
            ["Honest reporting", "Real metrics"],
          ].map(([a, b]) => (
            <div key={a}>
              <div className="text-sm font-semibold text-foreground">{a}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold/80">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-emet py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl">
              Five disciplines. One standard of craft.
            </h2>
          </div>
          <Link to="/services" className="text-sm text-gold gold-underline">All services →</Link>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-background p-8 md:p-10 transition-colors hover:bg-card"
            >
              <p className="eyebrow">{s.eyebrow}</p>
              <h3 className="mt-4 text-2xl text-foreground group-hover:text-gold transition-colors">
                {s.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
              <span className="mt-6 inline-block text-xs tracking-[0.25em] uppercase text-gold">Read more →</span>
            </Link>
          ))}
          <div className="bg-[oklch(0.22_0.04_245)] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-emerald">Not sure where to start?</p>
              <h3 className="mt-4 text-2xl text-foreground">Book a free discovery call.</h3>
            </div>
            <Link to="/contact" className="btn-gold mt-6 self-start">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-24 md:py-32 grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Why EMET</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Built on <span className="italic text-gold">truth.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              EMET (אֱמֶת) is Hebrew for truth. Faithfulness, reliability
              and integrity. The standard we hold ourselves to on every
              project, quote and line of code.
            </p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2">
            {CORE_VALUES.map((v, i) => (
              <li key={v.name} className="border-l border-gold/40 pl-6">
                <div className="text-xs tracking-[0.28em] text-gold uppercase">0{i + 1}</div>
                <div className="mt-2 text-xl text-foreground">{v.name}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-emet py-24 md:py-32">
        <div className="relative overflow-hidden border border-gold/30 bg-[oklch(0.22_0.04_245)] px-8 py-16 md:px-16 md:py-24 text-center">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-4 text-4xl md:text-5xl max-w-3xl mx-auto">
            Let's build something you can be proud of.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Tell us about your project. We'll respond within one business day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Start a project</Link>
            <a href="mailto:hello@emet.com.au" className="btn-ghost">hello@emet.com.au</a>
          </div>
        </div>
      </section>
    </>
  );
}
