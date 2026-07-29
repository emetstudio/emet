import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";
import { CORE_VALUES } from "../lib/services-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EMET — Perth's Truth-First Digital Studio" },
      {
        name: "description",
        content:
          "EMET is a Perth-based digital studio founded on truth, excellence and impact. Learn our story, mission and vision for Australian and international businesses.",
      },
      { property: "og:title", content: "About EMET — Truth-first digital studio, Perth" },
      { property: "og:description", content: "Our story, mission and the five values that shape every project we ship." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "About EMET" },
      { name: "twitter:description", content: "Truth-first digital studio in Perth, Australia." },
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
          Technology should solve real problems — <span className="italic text-gold">truthfully.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          EMET (אֱמֶת) is the Hebrew word for truth. In the Bible it represents
          faithfulness, reliability and integrity. Those values define how we
          approach every client, every project and every product we ship.
        </p>
      </section>

      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Built on a simple belief.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                EMET was founded on the belief that technology should solve
                real problems with honesty and excellence. In a world full of
                shortcuts and empty promises, we exist to build digital
                solutions people can trust.
              </p>
              <p>
                We combine creativity, technology and innovation to help
                businesses grow, tell their stories and operate more
                efficiently. Our goal is not just to build websites or
                software — it is to become a trusted technology partner that
                empowers businesses through meaningful digital experiences.
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
                To empower businesses through innovative, reliable and
                impactful digital solutions built with integrity.
              </p>
            </div>
            <div className="border border-emerald/40 bg-[oklch(0.22_0.04_245)] p-8">
              <p className="eyebrow" style={{ color: "var(--emerald)" }}>Vision</p>
              <p className="mt-4 text-xl text-foreground leading-relaxed">
                To become one of Australia's leading technology and digital
                innovation companies — recognised globally for creating
                solutions that inspire trust and drive growth.
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
            Ready to work with a studio built on truth?
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
