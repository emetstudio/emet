import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "../assets/emet-logo.png.asset.json";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact EMET",
  url: "https://www.emet.com.au/contact",
  mainEntity: {
    "@type": "Organization",
    name: "EMET",
    email: "hello@emet.com.au",
    telephone: "+61497461907",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EMET — Perth Digital Studio | hello@emet.com.au" },
      {
        name: "description",
        content:
          "Get in touch with EMET. Based in Perth, Western Australia, we work with clients across Australia and internationally. Email hello@emet.com.au or call +61 497 461 907.",
      },
      { property: "og:title", content: "Contact EMET" },
      { property: "og:description", content: "Start a project with Perth's truth-first digital studio." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:title", content: "Contact EMET" },
      { name: "twitter:description", content: "Start a project with EMET, Perth." },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(contactJsonLd) }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New enquiry from ${data.get("name") || "website"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "-"}\nService: ${data.get("service") || "-"}\nBudget: ${data.get("budget") || "-"}\n\nMessage:\n${data.get("message")}`,
    );
    window.location.href = `mailto:hello@emet.com.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="container-emet py-24 md:py-32">
        <p className="eyebrow"><span className="hairline mr-4" />Let's talk</p>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl leading-tight">
          Tell us about your <span className="italic text-gold">project.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Whether you're launching a business in Perth or scaling a brand
          across borders, we'd love to hear what you're building. We reply to
          every enquiry within one business day.
        </p>
      </section>

      <section className="border-t border-border/60 bg-[oklch(0.17_0.035_245)]">
        <div className="container-emet py-20 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="grid gap-6" aria-label="Contact form">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Name *</span>
                <input required name="name" type="text" className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Email *</span>
                <input required name="email" type="email" className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none" />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Company</span>
                <input name="company" type="text" className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Service</span>
                <select name="service" className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none">
                  <option value="">Select…</option>
                  <option>Software & Technology</option>
                  <option>Web</option>
                  <option>Creative & Branding</option>
                  <option>Media (Photo / Video)</option>
                  <option>Marketing & SEO</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Estimated budget (AUD)</span>
              <select name="budget" className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none">
                <option value="">Select…</option>
                <option>Under $1,000</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000 – $50,000</option>
                <option>$50,000+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Tell us about your project *</span>
              <textarea required name="message" rows={6} className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none resize-y" />
            </label>
            <div className="flex items-center gap-4">
              <button type="submit" className="btn-gold">Send enquiry</button>
              {submitted && <span className="text-sm text-emerald">Opening your email client…</span>}
            </div>
            <p className="text-xs text-muted-foreground">
              Prefer email? Reach us directly at <a href="mailto:hello@emet.com.au" className="text-gold">hello@emet.com.au</a>.
            </p>
          </form>

          <aside className="space-y-8">
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-3 text-foreground">Perth, Western Australia</p>
              <p className="text-sm text-muted-foreground mt-1">Serving clients Australia-wide and internationally.</p>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:hello@emet.com.au" className="mt-3 block text-foreground hover:text-gold">hello@emet.com.au</a>
            </div>
            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:+61497461907" className="mt-3 block text-foreground hover:text-gold">+61 497 461 907</a>
            </div>
            <div>
              <p className="eyebrow">Response time</p>
              <p className="mt-3 text-foreground">Within 1 business day (AWST).</p>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <div className="mt-3 flex flex-col gap-1 text-foreground">
                <a href="https://linkedin.com/company/emet" target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn →</a>
                <a href="https://instagram.com/emet.digital" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram →</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
