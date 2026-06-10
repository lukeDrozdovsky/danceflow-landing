import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { LiveDemoSection } from "@/components/landing/LiveDemoSection";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Twoja Szkoła Tańca — system zarządzania szkołą tańca" },
      {
        name: "description",
        content:
          "Plan zajęć, płatności online, ewidencja uczniów i automatyczna komunikacja w jednej platformie SaaS dla szkół tańca.",
      },
      { property: "og:title", content: "Twoja Szkoła Tańca — zarządzaj szkołą bez wysiłku" },
      {
        property: "og:description",
        content:
          "Nowoczesny SaaS dla szkół tańca: grafik, zapisy, płatności i komunikacja w jednym miejscu.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--neon-purple) 30%, transparent), transparent 50%), radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--electric-blue) 25%, transparent), transparent 50%), radial-gradient(circle at 50% 100%, color-mix(in oklab, var(--hot-pink) 22%, transparent), transparent 55%)",
        }}
      />
      <SiteNav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LiveDemoSection />
      </main>
      <SiteFooter />
    </div>
  );
}
