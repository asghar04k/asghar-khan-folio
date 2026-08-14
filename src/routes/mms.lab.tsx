import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { journalClub, labBootcamp, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/lab")({
  head: () => ({
    meta: [
      { title: "MMS Lab & Journal Club — Asghar Khan" },
      {
        name: "description",
        content:
          "The nine-week hands-on lab bootcamp and journal club in the Master of Medical Sciences program.",
      },
      { property: "og:title", content: "MMS Lab & Journal Club — Asghar Khan" },
      { property: "og:description", content: "Lab bootcamp reflections and journal club notes." },
    ],
  }),
  component: LabPage,
});

function LabPage() {
  return (
    <PageShell eyebrow="MMS Program" title="Lab & Journal Club">
      <SectionHeading note={labBootcamp.dates}>{labBootcamp.title}</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          {labBootcamp.headerImages.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-2">
              {labBootcamp.headerImages.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          )}

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
                {"images" in w && w.images && w.images.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:w-2/3">
                    {w.images.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>

          <h4 className="mt-8 font-medium">Reflection</h4>
          <p className="mt-2 leading-relaxed text-foreground/85">{labBootcamp.reflection}</p>
        </article>
      </Reveal>

      <SectionHeading note="Recurring">{journalClub.title}</SectionHeading>
      <Reveal>
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">{journalClub.description}</p>
          <div className="mt-4 rounded-xl border border-dashed border-border p-4">
            <p className="ledger">Notes & reflection</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
          </div>
        </article>
      </Reveal>
    </PageShell>
  );
}
