import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";

const CLIENTS = [
  "Northlight Café",
  "Kinsman & Co.",
  "Perth Legal Partners",
  "Harbour Property Group",
  "Studio Fern",
  "Ora Wellness",
  "Meridian Trades",
  "Blue Reef Charters",
  "Ember Bakery",
  "Halcyon Interiors",
  "Coast Fitness",
  "Southern Cross Auto",
];

const GALLERY = Array.from({ length: 9 }, (_, i) => {
  const themes = [
    "modern e-commerce homepage on dark background",
    "brand identity mockup with logo variations on cream stationery",
    "editorial photography of coastal Australian café interior",
    "mobile app screens for booking system on gold gradient",
    "SaaS dashboard UI screenshot with charts, deep navy palette",
    "cinematic promotional video still, warm golden hour lighting",
    "business card set on marble surface with gold foil detail",
    "responsive website mockup shown on laptop and phone",
    "social media grid layout on Instagram with luxury aesthetic",
  ];
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-3", "rotate-1", "-rotate-1", "rotate-2"];
  return {
    prompt: themes[i],
    rotation: rotations[i],
    src: `https://picsum.photos/seed/emet-work-${i + 1}/800/600`,
  };
});

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Clients & Portfolio | EMET Perth" },
      {
        name: "description",
        content:
          "A selection of the businesses we've partnered with across Australia and internationally — plus a scrapbook of recent design, development and media work by EMET.",
      },
      { property: "og:title", content: "Our Work — EMET" },
      { property: "og:description", content: "Clients and a scrapbook of recent work from Perth-based studio EMET." },
      { property: "og:url", content: "/work" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "EMET — Our Work" },
      { name: "twitter:description", content: "Clients and recent work from EMET." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />Selected work</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Clients and craft, <span className="italic text-gold">unfiltered.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A living record of the businesses we've partnered with and the work
          we've shipped — websites, brands, films and software from our studio
          in Perth to clients across Australia and beyond.
        </p>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20">
          <p className="eyebrow">Clients we've worked with</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="bg-background h-28 flex items-center justify-center px-4 text-center transition-colors hover:bg-card"
              >
                <span className="text-foreground/80 text-sm font-medium tracking-wide uppercase">
                  {c}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic">
            Placeholder client marks — real logos land here as partnerships are announced.
          </p>
        </div>
      </section>

      {/* SCRAPBOOK */}
      <section className="container-emet py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow">Scrapbook</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Recent frames.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Snapshots pulled from ongoing projects — websites, brand systems,
            photography, video and UI in the wild.
          </p>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`mb-6 break-inside-avoid bg-card p-3 shadow-2xl shadow-black/40 border border-border/60 transform ${g.rotation} transition-transform hover:rotate-0 hover:scale-[1.02]`}
            >
              <img
                src={g.src}
                alt={g.prompt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <figcaption className="mt-3 px-1 pb-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                No. {String(i + 1).padStart(2, "0")} · {g.prompt.split(" ").slice(0, 4).join(" ")}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic">
          Placeholder imagery — replaced as project galleries are approved for publication.
        </p>
      </section>

      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20 text-center">
          <h2 className="text-3xl md:text-4xl">Want to be the next case study?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Start a project</Link>
            <Link to="/services" className="btn-ghost">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
