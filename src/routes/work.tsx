import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/emet-logo.png.asset.json";

const CLIENTS: { name: string; logo?: string }[] = [
  {
    name: "MTN",
    logo: "https://www.dropbox.com/scl/fi/mwehughxcqgabvq2qlob8/mtn.jpg?rlkey=bvpdao8r083igaa62mm8i85pv&st=0s2v7vzu&raw=1",
  },
   {
    name: "Ministry of Sports & Recreation, Ghana",
    logo: "https://www.dropbox.com/scl/fi/5novujra156nd9bz4l6ja/mosr.png?rlkey=vhh0gvwvd5pvzeo98qpvs1acx&st=f0htc9co&raw=1",
    },
    {
    name: "Gold Coast Cooking Class",
    logo: "https://www.dropbox.com/scl/fi/nnfgrmxzlriduzf48cv45/gccc.png?rlkey=0o70uzror6x6kqu54zc2dh03v&st=89o7tth9&raw=1",
  },
  {
    name: "Omanye Aba",
    logo: "https://www.dropbox.com/scl/fi/r1aysg8glwkun0uyj3zhw/omanyeaba.png?rlkey=7pvz77kkblojcxntkzwtl44yo&st=j7jwthsm&raw=1",
  },
  {
    name: "Mindful Circle",
    logo: "https://www.dropbox.com/scl/fi/6r1v245dxw7slw0749ism/mindfulcircle.png?rlkey=r7tgv83rvqorj2zpgspdc78h4&st=dim6ix9i&raw=1",
  },
  {
    name: "Haddy & Me",
    logo: "https://www.dropbox.com/scl/fi/r236dna6n5r5otre8yy69/haddyandme.png?rlkey=36xb77yjs3eyl8z3x9iw826hl&st=vy349omq&raw=1",
  },
  {
    name: "Flourishing Field International Ministries",
    logo: "https://www.dropbox.com/scl/fi/roeb219i1bokhakpm7pzv/ffim.ico?rlkey=i8v9zmsppy5wvox2e9a04i9vw&st=lk9g23f9&raw=1",
  },
    {
    name: "Homz & Kidz",
    logo: "https://www.dropbox.com/scl/fi/euuvvc0ua1m1gura28wn6/homzandkidz.png?rlkey=g8fgxr0audx77gam8jbnpasl3&st=6gvrsx77&raw=1",
  },

];

const GALLERY_ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "rotate-0",
  "-rotate-3",
  "rotate-1",
  "-rotate-1",
];

const GALLERY = [
  {
    name: "Haddy & Me",
    src: "https://www.dropbox.com/scl/fi/p962c9z0vf2275eg81y9w/haddyandme.png?rlkey=9jrk5eja8kerckn8hktmpvwyv&st=xbcon3nw&raw=1",
  },
  {
    name: "Omanye Aba",
    src: "https://www.dropbox.com/scl/fi/gho1e9wadfdf3vr5wkntp/omanyeaba.png?rlkey=w2rc1xs8ilrnwwapqky94c7yp&st=z66wyudb&raw=1",
  },
  {
    name: "Mindful Circle",
    src: "https://www.dropbox.com/scl/fi/du22bxf6rzjp9jvcc43xr/mindfulcircle.png?rlkey=rxusvb5dy3720acv6j602gy1r&st=xqefi3kx&raw=1",
  },
  {
    name: "MTN",
    src: "https://www.dropbox.com/scl/fi/cvotkb89fnm766qju2xdt/mtn.png?rlkey=5es9zn9g2lu0jbaig8lx32cpu&st=vrbnaqhh&raw=1",
  },
  {
    name: "FFIM",
    src: "https://www.dropbox.com/scl/fi/lt0gmikutaa4gaef7bo6u/ffim.png?rlkey=vbm0232t86pbv76mzuanr345a&st=j5yoc22t&raw=1",
  },
  {
    name: "Gold Coast Cooking Class",
    src: "https://www.dropbox.com/scl/fi/ym1ytc401i1ddi7z83v6a/goldcoastcookingclass.png?rlkey=aw4o3pigy9jn3bdq9mrch2aj1&st=fh26rylb&raw=1",
  },
  {
    name: "Free Plagiarism Checker",
    src: "https://www.dropbox.com/scl/fi/79i071seozgat1sldrflv/freeplagiarismchecker.png?rlkey=pa0db1pj20zpu9827u5u8om90&st=vjgb6oqg&raw=1",
  },
  {
    name: "Homz & Kidz",
    src: "https://www.dropbox.com/scl/fi/g1i0uh5vr5s2omug1opve/homzandkidz.png?rlkey=amddnouzdu0uxjlk7kfuu0mml&st=8rvxu7zs&raw=1",
  },
  
].map((g, i) => ({ ...g, rotation: GALLERY_ROTATIONS[i] }));

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work · Clients & Portfolio | EMET" },
      {
        name: "description",
        content:
          "A selection of the businesses we've partnered with and recent design, development and media work by EMET.",
      },
      { property: "og:title", content: "Our Work · EMET" },
      { property: "og:description", content: "Clients and recent work from EMET." },
      { property: "og:url", content: "/work" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "EMET · Our Work" },
      { name: "twitter:description", content: "Clients and recent work from EMET." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  useEffect(() => {
    if (previewIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPreviewIndex(null);
      if (e.key === "ArrowLeft") {
        setPreviewIndex((i) => (i !== null && i > 0 ? i - 1 : i));
      }
      if (e.key === "ArrowRight") {
        setPreviewIndex((i) => (i !== null && i < GALLERY.length - 1 ? i + 1 : i));
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex]);

  const active = previewIndex !== null ? GALLERY[previewIndex] : null;

  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />Selected work</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Clients and craft, <span className="italic text-gold">unfiltered.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The businesses we've partnered with and the work we've shipped.
          Websites, brands, films and software.
        </p>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20">
          <p className="eyebrow">Clients we've worked with</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="group relative bg-background h-28 flex items-center justify-center px-4 text-center overflow-hidden transition-colors hover:bg-card"
              >
                {c.logo ? (
                  <>
                    <img
                      src={c.logo}
                      alt={c.name}
                      loading="lazy"
                      className="max-h-12 max-w-[70%] object-contain transition-all duration-300 ease-out group-hover:grayscale group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/95 opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-foreground/90 text-sm font-medium tracking-wide uppercase px-2">
                        {c.name}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-foreground/80 text-sm font-medium tracking-wide uppercase">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic">
          </p>
        </div>
      </section>

      {/* SCRAPBOOK */}
      <section className="container-emet py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="mt-4 text-4xl md:text-5xl">Our Work</h2>
          </div>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <figure
              key={g.name}
              className={`group mb-6 break-inside-avoid bg-card p-3 shadow-2xl shadow-black/40 border border-border/60 transform ${g.rotation} transition-transform hover:rotate-0 hover:scale-[1.02]`}
            >
              <button
                type="button"
                onClick={() => setPreviewIndex(i)}
                aria-label={`Preview ${g.name}`}
                className="relative block w-full overflow-hidden cursor-pointer"
              >
                <img
                  src={g.src}
                  alt={g.name}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                  </svg>
                </div>
              </button>
              <figcaption className="mt-3 px-1 pb-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                 {g.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-sm p-6"
          onClick={() => setPreviewIndex(null)}
        >
          <button
            type="button"
            onClick={() => setPreviewIndex(null)}
            aria-label="Close preview"
            className="absolute top-6 right-6 text-foreground/70 hover:text-gold transition-colors text-3xl leading-none"
          >
            &times;
          </button>

          {previewIndex! > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewIndex((i) => (i !== null ? i - 1 : i));
              }}
              aria-label="Previous"
              className="absolute left-4 md:left-8 text-foreground/60 hover:text-gold transition-colors text-4xl px-2"
            >
              ‹
            </button>
          )}
          {previewIndex! < GALLERY.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewIndex((i) => (i !== null ? i + 1 : i));
              }}
              aria-label="Next"
              className="absolute right-4 md:right-8 text-foreground/60 hover:text-gold transition-colors text-4xl px-2"
            >
              ›
            </button>
          )}

          <div
            className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.name}
              className="max-h-[70vh] w-auto object-contain border border-border/60 shadow-2xl shadow-black/50"
            />
            <h3 className="mt-6 text-xl md:text-2xl text-center">{active.name}</h3>
          </div>
        </div>
      )}

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