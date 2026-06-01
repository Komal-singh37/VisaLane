import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

type Props = {
  className?: string;
  variant?: "gold" | "ghost";
  label?: string;
};

export function BookButton({ className = "", variant = "gold", label = "Book Your Appointment" }: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300";
  const styles =
    variant === "gold"
      ? "bg-gold text-gold-foreground shadow-glow hover:scale-[1.02] hover:shadow-[0_30px_80px_-20px_oklch(0.78_0.15_88/0.55)]"
      : "border border-foreground/30 text-foreground hover:border-accent hover:text-accent";
  return (
    <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
