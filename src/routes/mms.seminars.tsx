import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsSeminars, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/seminars")({
  head: () => ({
    meta: [
      { title: "MMS Seminars & Lab Bootcamp — Asghar Khan" },
      {
        name: "description",
        content:
          "The weekly seminar series and the intensive hands-on laboratory bootcamp in the Master of Medical Sciences program.",
      },
      { property: "og:title", content: "MMS Seminars & Lab Bootcamp — Asghar Khan" },
      { property: "og:description", content: "Seminar notes and bootcamp reflections." },
    ],
  }),
  component: SeminarsPage,
});

function SeminarsPage() {
  return (
    <PageShell eyebrow="MMS Program" title="Seminars & Bootcamp">
      <ul className="grid gap-3 sm:grid-cols-2">
        {mmsSeminars.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 50}>
            <article className="lift h-full rounded-2xl border border-border bg-card p-6">
              <h2 className="font-medium">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <div className="mt-4 rounded-xl border border-dashed border-border p-4">
                <p className="ledger">Notes & reflection</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
