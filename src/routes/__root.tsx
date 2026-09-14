import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import emetLogo from "../assets/emet-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please refresh or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EMET",
  legalName: "EMET",
  url: "https://emetstudio.net",
  logo: emetLogo,
  description:
    "EMET is a digital studio building software, websites, branding and media for businesses that value truth, excellence and impact.",
  slogan: "Truth. Technology. Transformation.",
  email: "contact@emetstudio.net",
  telephone: "+61497461907",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perth",
    addressRegion: "WA",
    addressCountry: "AU",
  },
  areaServed: ["AU", "Worldwide"],
  sameAs: [
    "https://www.linkedin.com/in/emet-studio-544a77435?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "https://www.facebook.com/share/198gG2bs3i/",
    "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=bxx81yu",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B1F33" },
      { name: "author", content: "EMET" },
      { property: "og:site_name", content: "EMET" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-[oklch(0.19_0.04_245_/_0.85)] backdrop-blur-md">
      <div className="container-emet flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={emetLogo} alt="EMET" width={120} height={40} className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/85 hover:text-gold transition-colors gold-underline"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold !py-2.5 !px-5">Start a project</Link>
        </nav>
        <button
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background">
          <div className="container-emet flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground/85 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[oklch(0.16_0.035_245)] mt-24">
      <div className="container-emet py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={emetLogo} alt="EMET" width={140} height={44} className="h-11 w-auto object-contain" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Software, websites, branding, media and marketing for growing businesses.
          </p>
        </div>
        <div>
          <h4 className="eyebrow">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li><a href="mailto:contact@emetstudio.net" className="hover:text-gold">contact@emetstudio.net</a></li>
            <li><a href="tel:+61497461907" className="hover:text-gold">+61 497 461 907</a></li>
            <li>Perth, Western Australia</li>
            <li className="pt-3 flex gap-4">
              <a href="https://www.linkedin.com/in/emet-studio-544a77435?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" title="LinkedIn" className="hover:text-gold" rel="noopener noreferrer" target="_blank"><Linkedin size={18} /></a>
              <a href="https://www.facebook.com/share/198gG2bs3i/" aria-label="Facebook" title="Facebook" className="hover:text-gold" rel="noopener noreferrer" target="_blank"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=bxx81yu" aria-label="Instagram" title="Instagram" className="hover:text-gold" rel="noopener noreferrer" target="_blank"><Instagram size={18} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-emet flex flex-col sm:flex-row gap-3 justify-between py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} EMET</span>
          <span>Perth · Australia · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest("button, .btn-gold, .btn-ghost")) return;
      if ("vibrate" in navigator) navigator.vibrate(8);
    }

    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="page-motion flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

