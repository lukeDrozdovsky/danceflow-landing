import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Users, CalendarDays, CreditCard, TrendingUp, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--neon-purple)] opacity-25 blur-[140px]" />
        <div className="absolute -bottom-20 right-1/4 h-[360px] w-[360px] rounded-full bg-[var(--electric-blue)] opacity-20 blur-[120px]" />
        <div className="absolute top-40 left-10 h-[260px] w-[260px] rounded-full bg-[var(--hot-pink)] opacity-20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--hot-pink)] shadow-[0_0_10px_var(--hot-pink)]" />
            Nowość — pełna automatyzacja zapisów na sezon 2026
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Zarządzaj swoją szkołą tańca <span className="gradient-text">bez wysiłku</span>
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
            {["Bez karty kredytowej", "Wdrożenie w 24h", "Wsparcie 7 dni w tygodniu"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--electric-blue)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroDashboardMockup />
      </div>
    </section>
  );
}

function HeroDashboardMockup() {
  const todaysClasses = [
    { time: "17:00", name: "Bachata — Średniozaawansowani", room: "Sala A", color: "var(--neon-purple)" },
    { time: "18:30", name: "Hip-Hop Kids", room: "Sala B", color: "var(--electric-blue)" },
    { time: "20:00", name: "Salsa Cubana", room: "Sala A", color: "var(--hot-pink)" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,var(--neon-purple),var(--electric-blue),var(--hot-pink))] opacity-30 blur-2xl" />
      <div className="gradient-border relative rounded-[1.75rem] p-1.5">
        <div className="rounded-[1.5rem] bg-card/90 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Dashboard</p>
              <h3 className="font-display text-lg font-semibold">Dzień dobry, Aniu 👋</h3>
            </div>
            <div className="flex -space-x-2">
              {["AK", "MR", "JT"].map((initials, idx) => (
                <div
                  key={initials}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-card text-[10px] font-semibold text-white"
                  style={{
                    background: [
                      "linear-gradient(135deg,var(--neon-purple),var(--hot-pink))",
                      "linear-gradient(135deg,var(--electric-blue),var(--neon-purple))",
                      "linear-gradient(135deg,var(--hot-pink),var(--electric-blue))",
                    ][idx],
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <StatTile icon={<Users className="h-4 w-4" />} label="Aktywni uczniowie" value="284" delta="+12" />
            <StatTile icon={<CalendarDays className="h-4 w-4" />} label="Zajęcia dziś" value="9" delta="+2" />
            <StatTile icon={<CreditCard className="h-4 w-4" />} label="Płatności" value="96%" delta="+4%" />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Dzisiejszy plan</p>
              <span className="text-xs text-muted-foreground">Środa, 10 czerwca</span>
            </div>
            <ul className="mt-3 space-y-2">
              {todaysClasses.map((klass) => (
                <li
                  key={klass.time}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/40 px-3 py-2.5 transition-all hover:border-[color:var(--neon-purple)]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="grid h-9 w-12 shrink-0 place-items-center rounded-lg text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${klass.color}, color-mix(in oklab, ${klass.color} 50%, black))` }}
                    >
                      {klass.time}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{klass.name}</p>
                      <p className="text-xs text-muted-foreground">{klass.room}</p>
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 shrink-0 text-[var(--electric-blue)]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatTile({ icon, label, value, delta }: { icon: React.ReactNode; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-secondary/40 p-3">
      <div className="flex items-center justify-between text-muted-foreground">
        {icon}
        <span className="text-[10px] font-semibold text-[var(--electric-blue)]">{delta}</span>
      </div>
      <p className="mt-2 font-display text-xl font-bold">{value}</p>
      <p className="text-[11px] leading-tight text-muted-foreground">{label}</p>
    </div>
  );
}