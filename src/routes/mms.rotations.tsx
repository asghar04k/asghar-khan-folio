import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsRotations, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/rotations")({
  head: () => ({
    meta: [
      { title: "MMS Rotations · Asghar Khan" },
      {
        name: "description",
        content:
          "Basic science, clinical science, and community engaged learning rotations in the Master of Medical Sciences program.",
      },
      { property: "og:title", content: "MMS Rotations · Asghar Khan" },
      { property: "og:description", content: "Rotation placements and reflections." },
    ],
  }),
  component: RotationsPage,
});

function RotationsPage() {
  return (
    <PageShell
      eyebrow="MMS Program"
      title="Rotations"
      intro="Three placements across laboratory, clinical, and community settings."
    >
      <ul className="grid gap-3 sm:grid-cols-3">
        {mmsRotations.map((r, i) => (
          <Reveal as="li" key={r.title} delay={i * 50}>
            <article className="lift h-full rounded-2xl border border-border bg-card p-6">
              <h2 className="font-medium">{r.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
              {r.partner && <p className="ledger mt-3">Partner: {r.partner}</p>}
              {r.certifications ? (
                <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
                  {r.note && <p className="text-sm text-muted-foreground">{r.note}</p>}
                  <ul className="mt-3 space-y-1.5">
                    {r.certifications.map((c) => (
                      <li key={c.pdf}>
                        <a
                          href={c.pdf}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                        >
                          {c.title} <ExternalLink className="h-3 w-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-dashed border-border p-4">
                  <p className="ledger">Reflection</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
