import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Sprout, Skull } from "lucide-react";
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
      <ul className="grid gap-3 sm:grid-cols-2">
        {ventures.graveyard.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 50}>
            <div className="lift h-full overflow-hidden rounded-2xl border border-border bg-muted/50">
              <div className="flex items-start gap-4 p-6 pb-0">
                {"logo" in v && v.logo ? (
                  <img
                    src={v.logo}
                    alt={`${v.title} logo`}
                    className="h-12 w-12 shrink-0 rounded-xl border border-border bg-card object-cover"
                  />
                ) : (
                  <Skull className="h-5 w-5 shrink-0 text-muted-foreground" />
                )}
                <div className="min-w-0">
                  <h3 className="font-medium">{v.title}</h3>
                  {"dates" in v && v.dates && <p className="ledger mt-1">{v.dates}</p>}
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs leading-relaxed text-muted-foreground italic">
                  {v.epitaph}
                </p>
                {"body" in v && v.body && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{v.body}</p>
                )}
                {"images" in v && v.images && v.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {v.images.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className="aspect-square w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
                {"links" in v &&
                  v.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                      {l.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
