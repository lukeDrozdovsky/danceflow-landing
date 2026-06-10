import { Instagram, Facebook, Youtube, Sparkles } from "lucide-react";

const legalLinks = [
  { label: "Regulamin", href: "#" },
  { label: "Polityka prywatności", href: "#" },
  { label: "Kontakt", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function SiteFooter() {
  return (
    <footer id="about" className="relative border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--neon-purple),var(--hot-pink))]">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="font-display text-sm font-semibold">Twoja Szkoła Tańca</span>
          <span className="ml-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-[color:var(--neon-purple)] hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}