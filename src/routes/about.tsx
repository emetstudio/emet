import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";
import { CORE_VALUES } from "../lib/services-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EMET · Digital Solutions" },
      {
        name: "description",
        content:
          "EMET is a digital solutions company founded on truth, excellence and impact. Learn our story, mission and vision.",
      },
      { property: "og:title", content: "About EMET · Digital Solutions" },
      { property: "og:description", content: "Our story, mission and the five values that shape every project we ship." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "About EMET" },
      { name: "twitter:description", content: "Digital studio built on truth." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />About EMET</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Technology should solve real problems <span className="italic text-gold">truthfully.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          EMET (אֱמֶת) is Hebrew for truth. Faithfulness, reliability and
          integrity. The values that define how we approach every client
          and every project.
        </p>
      </section>

      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Built on a simple belief.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Technology should solve real problems with honesty and
                excellence. We exist to build digital solutions people
                can trust.
              </p>
              <p>
                Every line of code, every design and every strategy is built
                on one foundation: <span className="text-gold">truth.</span>
              </p>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="border border-gold/30 bg-[oklch(0.22_0.04_245)] p-8">
              <p className="eyebrow">Mission</p>
              <p className="mt-4 text-xl text-foreground leading-relaxed">
                To empower businesses through honest, reliable and
                impactful digital solutions.
              </p>
            </div>
            <div className="border border-emerald/40 bg-[oklch(0.22_0.04_245)] p-8">
              <p className="eyebrow" style={{ color: "var(--emerald)" }}>Vision</p>
              <p className="mt-4 text-xl text-foreground leading-relaxed">
                To be recognised as a technology partner that inspires
                trust and drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow">Core values</p>
        <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl">
          Five principles behind every decision.
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {CORE_VALUES.map((v, i) => (
            <div key={v.name} className="border-t border-gold/40 pt-6">
              <div className="text-xs tracking-[0.28em] text-gold uppercase">0{i + 1}</div>
              <div className="mt-3 text-2xl text-foreground">{v.name}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20 text-center">
          <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto">
            Ready to work with us?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Start a project</Link>
            <Link to="/services" className="btn-ghost">See what we do</Link>
          </div>
        </div>
      </section>
    </>
  );
}
