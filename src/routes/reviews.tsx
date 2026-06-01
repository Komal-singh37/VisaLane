import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Visa Lane" },
      { name: "description", content: "Real stories from students and families who travelled with Visa Lane." },
    ],
  }),
  component: Reviews,
});

const REVIEWS = [
  { name: "Aanya Sharma", to: "Toronto 🇨🇦", q: "Approved in 9 days. The SOP they wrote sounded more like me than I do.", course: "MS, University of Toronto" },
  { name: "Rohan Mehta", to: "London 🇬🇧", q: "Three rejections from elsewhere. One yes from Visa Lane. That's the whole review.", course: "Skilled Worker Visa" },
  { name: "Priya Kapoor", to: "Sydney 🇦🇺", q: "They called me back at 11pm to fix one document. I cried, honestly.", course: "Subclass 500" },
  { name: "Ishaan Verma", to: "Boston 🇺🇸", q: "F1 cleared first attempt. Mock interview was harder than the actual one.", course: "F1 Student Visa" },
  { name: "Sneha Patel", to: "Berlin 🇪🇺", q: "Made the whole German blocked-account thing feel… normal. I still don't know how.", course: "Germany Student Visa" },
  { name: "Arjun & Family", to: "Vancouver 🇨🇦", q: "PR for the three of us. They called my daughter by name on every single call.", course: "Express Entry · Family of 3" },
  { name: "Megha Joshi", to: "Dublin 🇪🇺", q: "The only consultant who said no to me — for the right reasons. Then said yes to a better path.", course: "Ireland Stamp 1G" },
  { name: "Karan Singh", to: "Melbourne 🇦🇺", q: "Honest pricing. No surprises. I forwarded their number to four cousins already.", course: "Subclass 482" },
];

const COL_A = REVIEWS.slice(0, 4);
const COL_B = REVIEWS.slice(4, 8);

function Card({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <div className="rounded-3xl border border-border bg-card/50 p-7 backdrop-blur shadow-soft">
      <Quote className="h-6 w-6 text-gold" />
      <p className="mt-4 font-display text-xl leading-snug text-balance">"{r.q}"</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="font-medium">{r.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{r.course} · {r.to}</div>
        </div>
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <>
      <section className="relative pt-20 pb-12 lg:pt-28">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Reviews</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl text-balance">
            People <em className="text-gold not-italic">talk.</em><br />
            We're glad they do.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            No paid testimonials. No edited screenshots. Just families who landed where they wanted to.
          </p>
        </div>
      </section>

      {/* Scrolling vertical columns */}
      <section className="relative py-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6 h-[720px] overflow-hidden">
          <div className="space-y-6 animate-marquee-y">
            {[...COL_A, ...COL_A].map((r, i) => <Card key={`a-${i}`} r={r} />)}
          </div>
          <div className="space-y-6 animate-marquee-y" style={{ animationDirection: "reverse", animationDuration: "36s" }}>
            {[...COL_B, ...COL_B].map((r, i) => <Card key={`b-${i}`} r={r} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-display italic text-gold text-lg">— and one more thing</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Every review here was written by someone we actually call <span className="text-gold">family</span> now.
          </h2>
        </div>
      </section>
    </>
  );
}
