import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsReflections } from "@/content/portfolio";

export const Route = createFileRoute("/mms/reflections")({
  head: () => ({
    meta: [
      { title: "MMS Reflections · Asghar Khan" },
      {
        name: "description",
        content:
          "An ongoing reflective journal kept through the Master of Medical Sciences program at Western University.",
      },
      { property: "og:title", content: "MMS Reflections · Asghar Khan" },
      { property: "og:description", content: "A running journal of the program, term by term." },
    ],
  }),
  component: ReflectionsPage,
});

function ReflectionsPage() {
  return (
    <PageShell
      eyebrow="MMS Program"
      title="Reflections"
      intro="A running journal, added to through the program."
    >
      <ol className="space-y-3">
        {mmsReflections.map((r, i) => (
          <Reveal as="li" key={r.date} delay={i * 50}>
            <article className="rounded-2xl border border-border bg-card p-6">
              <p className="ledger">{r.date}</p>
              <h2 className="mt-2 font-medium">{r.title}</h2>
              <p className="mt-3 leading-relaxed text-foreground/85">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </PageShell>
  );
}
