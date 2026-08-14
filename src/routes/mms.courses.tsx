import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsCourses, mmsSeminars, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/courses")({
  head: () => ({
    meta: [
      { title: "MMS Courses & Seminars — Asghar Khan" },
      {
        name: "description",
        content:
          "Coursework and the weekly seminar series in the Master of Medical Sciences program, each with an artifact and a written reflection.",
      },
      { property: "og:title", content: "MMS Courses & Seminars — Asghar Khan" },
      {
        property: "og:description",
        content: "Course artifacts, reflections, and weekly seminar notes, updated each term.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <PageShell
      eyebrow="MMS Program"
      title="Courses & Seminars"
      intro="Each course carries an artifact and a reflection, added as the program progresses."
    >
      <ul className="space-y-3">
        {mmsCourses.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 40}>
            <article className="lift rounded-2xl border border-border bg-card p-6">
              <h2 className="font-medium text-balance">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-dashed border-border p-4">
                  <p className="ledger">Artifact</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
                </div>
                <div className="rounded-xl border border-dashed border-border p-4">
                  <p className="ledger">Reflection</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <SectionHeading note="Running through the program">Seminars</SectionHeading>
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
