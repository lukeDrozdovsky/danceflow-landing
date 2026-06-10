import { Button } from "@/components/ui/button";
import { PlayCircle, ShieldCheck, Zap } from "lucide-react";

export function LiveDemoSection() {
  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="gradient-border relative overflow-hidden rounded-[2rem] p-1">
          <div className="relative rounded-[1.85rem] bg-card/80 px-6 py-16 text-center backdrop-blur-xl md:px-16 md:py-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[var(--neon-purple)] opacity-25 blur-[120px]" />
              <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-[var(--electric-blue)] opacity-25 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hot-pink)]">
                Demo
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Przetestuj system <span className="gradient-text">w akcji</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Wejdź jako administrator lub instruktor i przeklikaj się przez prawdziwy panel.
                Bez rejestracji. Bez konfiguracji. W 30 sekund.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="hero" size="xl" className="h-16 px-10 text-lg">
                  <a href="https://demo.twojaszkolatanca.pl" target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="h-5 w-5" /> Uruchom wersję demonstracyjną
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                <DemoBenefit icon={<Zap className="h-4 w-4" />} label="Natychmiastowy dostęp" />
                <DemoBenefit icon={<ShieldCheck className="h-4 w-4" />} label="Dane przykładowe, zero ryzyka" />
                <DemoBenefit icon={<PlayCircle className="h-4 w-4" />} label="Dwie role do wyboru" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoBenefit({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass-panel flex items-center justify-center gap-2 rounded-xl px-4 py-3">
      <span className="text-[var(--electric-blue)]">{icon}</span>
      <span className="font-medium text-foreground">{label}</span>
    </div>
  );
}