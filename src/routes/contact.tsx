import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import bg from "@/assets/contact-bg.jpeg";
import { BookButton } from "@/components/BookButton";
import { SITE } from "@/lib/site";
import { Mail, Phone, Globe, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visa Lane" },
      { name: "description", content: "Reach out to Visa Lane. Tell us your course, your destination, your timeline — we'll text you a link." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100),

  countryCode: z.string()
    .trim()
    .min(1, "Country code required")
    .max(10),

  mobile: z.string()
    .trim()
    .min(7, "Add a valid mobile")
    .max(20),

  course: z.string()
    .trim()
    .min(1, "Tell us what you're studying or doing")
    .max(120),

  message: z.string()
    .trim()
    .max(800)
    .optional(),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    // Hook this up to your backend / email service when ready.
    try {
  const formData = new FormData();

  formData.append("name", parsed.data.name);
  formData.append("countryCode", parsed.data.countryCode);
  formData.append("mobile", parsed.data.mobile);
  formData.append("course", parsed.data.course);
  formData.append("message", parsed.data.message || "");

  await fetch(
    "https://script.google.com/macros/s/AKfycbwHVzcTTYBk7WBVx-o2enTRu8E0VqHWekzp6_LacGGTlI03ohnxI7P0wUovQnMKkazc/exec",
    {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }
  );

  setStatus("sent");
  form.reset();

} catch (error) {
  console.error(error);
  setStatus("error");
}
  }

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src={bg}
          alt=""
          aria-hidden
          width={1600}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-aurora opacity-50" />

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Contact Us</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[0.98] tracking-tight text-balance">
              Tell us your destination, we'll guide you <em className="text-gold not-italic">the way.</em>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Drop your details!
            </p>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {SITE.phone}</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> {SITE.email}</li>
              <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-gold" /> {SITE.website}</li>
            </ul>

            <div className="mt-10">
              <BookButton />
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl bg-card/70 backdrop-blur-xl border border-border p-8 lg:p-10 shadow-soft">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" placeholder="Aanya Sharma" error={errors.name} />
              <div>
  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
    Mobile
  </label>

  <div className="mt-2 flex gap-3">

    <input
      name="countryCode"
      placeholder="+91"
      className="w-24 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors"
    />

    <input
      name="mobile"
      placeholder="9876543210"
      className="flex-1 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors"
    />

  </div>

  {(errors.mobile || errors.countryCode) && (
    <p className="mt-1.5 text-xs text-destructive">
      {errors.countryCode || errors.mobile}
    </p>
  )}
</div>
              {/*<Field label="Mobile" name="mobile" placeholder="+91 …" error={errors.mobile} />*/}
              <Field label="Course / Visa type" name="course" placeholder="MS Computer Science · F1" error={errors.course} />
              {/*<Field label="Budget (approx.)" name="budget" placeholder="₹50,000 – ₹1L" error={errors.budget} />*/}
            </div>
            <div className="mt-5">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Case Description (optional)</label>
              <textarea
                name="message"
                rows={4}
                maxLength={800}
                className="mt-2 w-full rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors"
                placeholder="Timeline, country preference, previous rejections — share whatever helps."
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground max-w-xs">
                Speak directly with an experienced consultant.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm uppercase tracking-[0.18em] font-medium shadow-glow hover:scale-[1.02] transition"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {status === "sent" && (
              <p className="mt-5 text-sm text-gold">Got it. We'll text you shortly. ✦</p>
            )}
            {status === "error" && (
             <p className="mt-5 text-sm text-red-500">
               Something went wrong. Please try again.
              </p>
)}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, placeholder, error,
}: { label: string; name: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
