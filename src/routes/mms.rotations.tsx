import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsRotations, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/rotations")({
  head: () => ({
    meta: [
      { title: "MMS Rotations — Asghar Khan" },
      {
        name: "description",
        content:
          "Basic science, clinical science, and community engaged learning rotations in the Master of Medical Sciences program.",
      },
      { property: "og:title", content: "MMS Rotations — Asghar Khan" },
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
              <div className="mt-4 rounded-xl border border-dashed border-border p-4">
                <p className="ledger">Reflection</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
