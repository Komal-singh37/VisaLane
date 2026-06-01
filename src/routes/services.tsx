import { createFileRoute } from "@tanstack/react-router";
import { BookButton } from "@/components/BookButton";
import { GraduationCap, Briefcase, Home, Users, Plane, FileCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Visa Lane" },
      { name: "description", content: "Student visas, work permits, PR, visit & dependent visas across Canada, UK, USA, Australia, Europe." },
    ],
  }),
  component: Services,
});

const COUNTRIES = [
  { flag: "🇨🇦", name: "Canada", note: "Study, work, or settle permanently." },
  { flag: "🇬🇧", name: "United Kingdom", note: "For ambitious students and skilled professionals." },
  { flag: "🇺🇸", name: "USA", note: "Visitor, student, and work visa support." },
  { flag: "🇦🇺", name: "Australia", note: "Visit, Study, work" },
  { flag: "🇪🇺", name: "Europe", note: "Schengen- Study & Work" },
];

const SERVICES = [
  { icon: GraduationCap, t: "Student Visa", d: "University shortlisting, SOPs, financials, interview prep — start to boarding pass."},
  { icon: Briefcase, t: "Work Permit", d: "LMIA, sponsorship coordination, contract review, family inclusion, Open & Close(Includes Spousal)."},
  { icon: Home, t: "Permanent Residency", d: "CRS optimisation, ECA, full Express Entry / Skilled Migration filing."},
  { icon: Plane, t: "Visit & Tourist", d: "B1/B2, Schengen, ETA — fast turnarounds for tight timelines."},
  { icon: Users, t: "Spouse / Dependent", d: "Open work permits, dependent passes, family sponsorship."},
  { icon: FileCheck, t: "Document Audit", d: "Already filed somewhere else? We'll audit before you submit."},
];

function Services() {
  return (
    <>
      <section className="relative pt-20 pb-16 lg:pt-28">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Services</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl text-balance">
            Five countries.<br />
            <span className="text-gold italic">One</span> obsessive consultant.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Latest forms. Honest pricing. Nothing outsourced. Choose your destination — we'll handle the approvals.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COUNTRIES.map((c) => (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="text-5xl">{c.flag}</div>
                <div className="mt-4 font-display text-2xl">{c.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{c.note}</div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gold opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">
              What we file, fight for, and follow up on.
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Fees vary by country and complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {SERVICES.map((s) => (
              <div key={s.t} className="bg-background p-8 group hover:bg-card transition-colors">
                <div className="flex items-start justify-between">
                  <s.icon className="h-7 w-7 text-gold" />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-gold transition-colors">
                    
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Every successful move begins with the <span className="text-gold">right advice.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">We assess your profile carefully and guide you toward the most suitable immigration option.</p>
          <div className="mt-8 flex justify-center"><BookButton /></div>
        </div>
      </section>
    </>
  );
}
