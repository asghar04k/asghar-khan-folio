import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { labBootcamp, mmsSeminars, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/seminars")({
  head: () => ({
    meta: [
      { title: "MMS Seminars & Lab Bootcamp — Asghar Khan" },
      {
        name: "description",
        content:
          "The weekly seminar series and the nine-week hands-on RT-qPCR and western blot laboratory bootcamp in the Master of Medical Sciences program.",
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

      <SectionHeading note={labBootcamp.dates}>{labBootcamp.title}</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="leading-relaxed text-foreground/85">{labBootcamp.overview}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {labBootcamp.researchQuestions.map((q) => (
              <div key={q.label} className="rounded-2xl bg-muted/70 p-4">
                <p className="ledger">{q.label}</p>
                <p className="mt-1.5 text-sm text-foreground/85">{q.body}</p>
              </div>
            ))}
          </div>

          <h4 className="mt-8 font-medium">Week by week</h4>
          <ol className="mt-4 space-y-5">
            {labBootcamp.weeks.map((w) => (
              <li key={w.week} className="border-l-2 border-primary/40 pl-4">
                <p className="ledger">{w.week}</p>
                <p className="mt-1 font-medium">{w.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ol>

          <h4 className="mt-8 font-medium">Reflection</h4>
          <p className="mt-2 leading-relaxed text-foreground/85">{labBootcamp.reflection}</p>

          {labBootcamp.images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {labBootcamp.images.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          )}
        </article>
      </Reveal>
    </PageShell>
  );
}
