import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { BookButton } from "./BookButton";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Visa Lane Logo"
            className="h-15 w-15 rounded-full object-cover border border-gold/30 shadow-glow"
          />
          <span className="font-display text-xl tracking-tight">
            {SITE.name}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <BookButton className="!px-5 !py-3 !text-xs" label="Book an Appointment" />
        </div>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl"
              >
                {n.label}
              </Link>
            ))}
            <BookButton className="mt-2 self-start" label="Book Appointment" />
          </div>
        </div>
      )}
    </header>
  );
}
