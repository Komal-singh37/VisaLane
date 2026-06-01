import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";
import { Mail, Phone, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="font-display text-4xl md:text-5xl text-balance leading-[1.05]">
            Where ambitious <span className="text-gold">future</span> begins!
          </h3>
          <p className="mt-6 max-w-md text-muted-foreground">
            {SITE.tagline} Built on pride and integrity since 4+ years.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4">Explore</p>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4">Reach us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" />{SITE.email}</li>
            <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-gold" />{SITE.website}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. Built on pride & integrity.</p>
          <p className="font-display italic">"Here, at Visa Lane, we don't build clients — we build families."</p>
        </div>
      </div>
    </footer>
  );
}
