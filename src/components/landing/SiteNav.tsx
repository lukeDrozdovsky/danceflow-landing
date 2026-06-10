import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Funkcje", href: "#features" },
  { label: "Cennik", href: "#pricing" },
  { label: "O nas", href: "#about" },
];

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass-panel flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            isScrolled ? "shadow-2xl" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--neon-purple),var(--hot-pink))] glow-primary">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              Twoja Szkoła Tańca
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="sm" className="hidden h-10 px-5 md:inline-flex">
              <a href="#demo">Zobacz Demo</a>
            </Button>
            <button
              onClick={() => setIsMobileOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
              aria-label="Menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {isMobileOpen && (
          <div className="glass-panel mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild variant="hero" className="w-full">
                  <a href="#demo" onClick={() => setIsMobileOpen(false)}>
                    Zobacz Demo
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}