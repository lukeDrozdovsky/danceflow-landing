import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import appScreenshot from "@/assets/app-schedule.png.asset.json";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--hot-pink)] opacity-30 blur-[140px]" />
        <div className="absolute -bottom-20 right-1/4 h-[360px] w-[360px] rounded-full bg-[var(--electric-blue)] opacity-25 blur-[120px]" />
        <div className="absolute top-40 left-10 h-[260px] w-[260px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--hot-pink)] shadow-[0_0_10px_var(--hot-pink)]" />
            Nowość — pełna automatyzacja zapisów na sezon 2026
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Zarządzaj swoją szkołą tańca <span className="gradient-text italic">bez wysiłku</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Plan zajęć, płatności online, ewidencja uczniów i komunikacja w jednym miejscu.
            Zaprojektowane dla nowoczesnych szkół tańca, które chcą rosnąć szybciej.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#demo">
                Wypróbuj Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghostGlass" size="xl">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Skontaktuj się
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Bez karty kredytowej", "Wdrożenie w 24h", "Wsparcie 7 dni w tygodniu"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--electric-blue)]" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <HeroScreenshot />
      </div>
    </section>
  );
}

function HeroScreenshot() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,var(--hot-pink),var(--electric-blue),var(--neon-purple))] opacity-30 blur-2xl" />
      <div className="gradient-border relative overflow-hidden rounded-[1.75rem] p-1.5 shadow-2xl">
        <img
          src="/grafik.png"
          alt="DanceFlow App Dashboard"
          className="w-full rounded-[1.5rem] border border-white/10 shadow-2xl"
        />
      </div>
    </div>
  );
}
