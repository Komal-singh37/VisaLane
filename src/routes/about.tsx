import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/about-portrait.jpeg";
import { BookButton } from "@/components/BookButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Visa Lane" },
      { name: "description", content: "Meet the consultant behind Visa Lane — four years, hundreds of approvals, one obsession with doing it right." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-20 pb-24 lg:pt-28">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-foreground/10 shadow-glow">
              <img
                src={portrait}
                alt="Founder of Visa Lane"
                width={1024}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* video placeholder slot */}
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/40 p-5 text-xs uppercase tracking-[0.18em] text-muted-foreground text-center">
              Short intro video · coming soon
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">About</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[0.98] tracking-tight text-balance">
              I started Visa Lane because <em className="text-gold not-italic">my reputation</em> was the only thing I couldn't outsource.
            </h1>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg max-w-2xl">
              <p>
                Visa Lane was founded on a simple principle: trust is earned through results, integrity, and personalized service. What began as assisting a few friends and families with their immigration matters has grown into a trusted consultancy supporting clients across different countries and visa categories.              </p>
              <p>
                Our reputation has been built primarily through word-of-mouth referrals. For most of our journey, we relied solely on the confidence and recommendations of satisfied clients, and only recently began advertising our services more publicly. This organic growth reflects the trust our clients place in us and the value of the relationships we build.              </p>
              <p className="font-display italic text-foreground text-xl">
                "We do not simply help in processing applications — we build long-term relationships founded on trust, care, and results."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "4+", v: "Years" },
                { k: "1.2k", v: "Applications filed" },
                { k: "5", v: "Countries" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10"><BookButton /></div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-2 gap-10">
          {[
            { t: "Pride", d: "Behind every application is a person, a family, and a future." },
            { t: "Integrity", d: "We believe trust matters more than selling false hope. " },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl bg-plum p-8 grain relative overflow-hidden">
              <div className="font-display text-5xl text-gold">{b.t}.</div>
              <p className="mt-4 text-foreground/90">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
