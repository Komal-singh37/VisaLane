import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-airport.jpg";
import heroVideo from "@/assets/main-video.mp4"
import { BookButton } from "@/components/BookButton";
import { ArrowRight, Plane, Sparkles, ShieldCheck, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visa Lane — Immigration consulting that builds families" },
      { name: "description", content: "Student visas, work permits and PR for Canada, UK, USA, Australia & Europe. Trusted, transparent and personal." },
    ],
  }),
  component: Home,
});

const COUNTRIES = ["Canada", "United Kingdom", "USA", "Australia", "Europe"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background Video */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/50" />

{/* Grain Effect */}
<div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-lavender">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              4+ Years · 5000+ Approvals
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              We don't build <span className="italic text-gold">clients.</span>
              <br />
              We build <span className="italic text-gold">families.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Visa Lane is a distinguished immigration consultancy for the people who can't afford a wrong turn. Five countries. One promise — pride and integrity, every single file.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookButton />
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-2 py-3 text-sm tracking-wide text-foreground/90 hover:text-accent transition-colors"
              >
                See what we handle
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "4+", v: "Years trusted" },
                { k: "98%", v: "Approval rate" },
                { k: "5", v: "Countries" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/*<div className="absolute -inset-6 bg-gold opacity-20 blur-3xl rounded-full" />*/}
            <div className="">
              {/*<img
                src={heroImg}
                alt="Student boarding flight at golden hour — beginning her immigration journey"
                width={1600}
                height={2000}
                className="w-full h-full object-cover"
              />*/}
              {/*<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />*/}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                {/*<div className="flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-xs">
                  <Plane className="h-3.5 w-3.5 text-gold" />
                  Departing soon
                </div>*/}
                {/*<div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-10 hidden md:block animate-float">
              <div className="rounded-2xl bg-card/80 backdrop-blur ring-1 ring-foreground/10 p-4 shadow-soft w-56">
                {/*<div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Latest approval</div>*/}
                {/*<div className="mt-1 font-display text-lg">Aanya · Toronto 🇨🇦</div>*/}
                {/*<div className="text-xs text-muted-foreground">Study permit · 9 days</div>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Country marquee */}
        <div className="relative border-y border-border bg-background/50">
          <div className="overflow-hidden">
            <div className="flex gap-16 py-6 animate-marquee-x whitespace-nowrap">
              {[...COUNTRIES, ...COUNTRIES, ...COUNTRIES].map((c, i) => (
                <span key={i} className="font-display text-3xl md:text-4xl text-foreground/60">
                  {c} <span className="text-gold mx-6">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE / WHAT WE DO */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-gold">What we build</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Long term relationships founded on <em className="text-lavender not-italic font-display">trust, care, and results.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For four years, families across the globe have trusted Visa Lane to walk them through the most consequential paperwork of their lives. We don't take applications we can't fight for.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, t: "Pride & Integrity", d: "We believe in honest guidance." },
                { icon: Sparkles, t: "Latest forms, always", d: "Updated immigration guidance across 5 countries." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-border bg-card/40 p-5">
                  <b.icon className="h-5 w-5 text-gold" />
                  <div className="mt-3 font-display text-lg">{b.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-gold">What we do</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Five countries. <span className="text-gold">One</span> obsessive consultant.
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["Student Visa", "Tier-1 universities, course mapping, SOPs that actually read like you."],
                ["Work Permit", "Open & closed permits. LMIA, sponsor liaison, contracts."],
                ["PR & Express Entry", "CRS strategy, ECA, document orchestration end-to-end."],
                ["Visitor & Tourist", "Family reunions, conferences, tight timelines."],
                ["Spouse / Dependent", "Because nobody should travel alone."],
              ].map(([t, d], i) => (
                <li key={t} className="flex items-start gap-6 py-5 group">
                  <span className="font-display text-2xl text-gold w-10 shrink-0">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="font-display text-xl">{t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{d}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors mt-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-plum opacity-80" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-display italic text-gold/90 text-lg">— a quiet promise</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            "<span className="text-gold">Pride</span> in the process, <span className="text-gold">Integrity</span> in every file."
          </h2>
          <div className="mt-10 flex justify-center">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
