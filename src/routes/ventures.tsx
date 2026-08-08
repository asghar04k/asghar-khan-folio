import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Skull } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ventures } from "@/content/portfolio";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures & Archive — Asghar Khan" },
      {
        name: "description",
        content:
          "A garden of active ventures and a graveyard of shelved projects — what's growing, and what's resting.",
      },
      { property: "og:title", content: "Ventures & Archive — Asghar Khan" },
      {
        property: "og:description",
        content: "Active ventures and honest epitaphs for the projects that didn't make it.",
      },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <PageShell
      eyebrow="Garden & Graveyard"
      title="Ventures / Archive"
      intro="Some things are still growing. Some things are resting peacefully. Both taught me something."
    >
      <SectionHeading note="Still growing">The garden</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2">
        {ventures.garden.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 50}>
            <div className="lift h-full rounded-2xl border border-border bg-card p-6">
              <Sprout className="h-5 w-5 text-primary" />
              <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <h3 className="min-w-0 font-medium">{v.title}</h3>
                <span className="ledger shrink-0 text-primary">{v.status}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <SectionHeading note="Shelved, with affection">The graveyard</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-3">
        {ventures.graveyard.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 50}>
            <div className="lift h-full rounded-2xl border border-border bg-muted/50 p-6 text-center">
              <Skull className="mx-auto h-5 w-5 text-muted-foreground" />
              <h3 className="mt-6 font-medium">{v.title}</h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                {v.epitaph}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
