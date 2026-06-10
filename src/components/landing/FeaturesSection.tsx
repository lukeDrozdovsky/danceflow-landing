import { CalendarRange, UsersRound, Wallet, MessagesSquare } from "lucide-react";

const featureCards = [
  {
    icon: CalendarRange,
    title: "Grafiki i harmonogram",
    description:
      "Dynamiczny terminarz, ewidencja obecności i automatyczne zarządzanie zastępstwami instruktorów.",
    accent: "var(--neon-purple)",
  },
  {
    icon: UsersRound,
    title: "Uczniowie i grupy",
    description:
      "Profile uczniów, poziomy taneczne i automatyczne przypisywanie do grup zgodnie z postępami.",
    accent: "var(--electric-blue)",
  },
  {
    icon: Wallet,
    title: "Płatności i zapisy",
    description:
      "Szybkie zapisy online, automatyczne pilnowanie składek miesięcznych i status każdej płatności.",
    accent: "var(--hot-pink)",
  },
  {
    icon: MessagesSquare,
    title: "Komunikacja",
    description:
      "Wbudowane powiadomienia, automatyczne SMS-y i e-maile o nadchodzących zajęciach i zmianach.",
    accent: "var(--neon-purple)",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--electric-blue)]">
            Funkcje
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Wszystko, czego potrzebuje <span className="gradient-text">nowoczesna</span> szkoła tańca
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Cztery filary platformy, które zastępują arkusze, papierowe listy i ręczne przypomnienia.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: typeof CalendarRange;
  title: string;
  description: string;
  accent: string;
};

function FeatureCard({ icon: Icon, title, description, accent }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--neon-purple)] hover:bg-card/90">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: accent }}
      />
      <div className="relative flex items-start gap-5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 40%, black))` }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}