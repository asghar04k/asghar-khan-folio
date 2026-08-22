import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ExternalLink, Quote, Target, Wrench } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { journalClub, labBootcamp } from "@/content/portfolio";

export const Route = createFileRoute("/mms/lab")({
  head: () => ({
    meta: [
      { title: "MMS Lab & Journal Club · Asghar Khan" },
      {
        name: "description",
        content:
          "The nine-week hands-on lab bootcamp and journal club in the Master of Medical Sciences program.",
      },
      { property: "og:title", content: "MMS Lab & Journal Club · Asghar Khan" },
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
        <p className="text-sm text-muted-foreground">{journalClub.description}</p>
      </Reveal>

      <ul className="mt-6 space-y-6">
        {journalClub.selectedWork.map((w, i) => (
          <Reveal as="li" key={w.title} delay={i * 60}>
            <article className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-medium text-balance">{w.title}</h3>
              {w.links && w.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary"
                    >
                      {l.label} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
              <div className="mt-6 space-y-5">
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Target className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="ledger">Task</p>
                    <p className="mt-1 leading-relaxed text-foreground/85">{w.task}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                    <Wrench className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="ledger">My Actions</p>
                    <p className="mt-1 leading-relaxed text-foreground/85">{w.actions}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/15 text-tertiary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="ledger">Results</p>
                    <p className="mt-1 leading-relaxed text-foreground/85">{w.results}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <SectionHeading>Also in This Activity</SectionHeading>
      <Reveal>
        <p className="leading-relaxed text-foreground/85">{journalClub.alsoInThisActivity}</p>
      </Reveal>

      <SectionHeading>Self-Reflection</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <Quote className="h-7 w-7 text-primary/40" />
          <div className="mt-4 space-y-5">
            {journalClub.reflection.map((p, i) =>
              i === 1 ? (
                <blockquote
                  key={p.slice(0, 24)}
                  className="border-l-2 border-primary pl-5 text-lg leading-relaxed font-medium text-balance text-foreground"
                >
                  {p}
                </blockquote>
              ) : (
                <p key={p.slice(0, 24)} className="leading-relaxed text-foreground/85">
                  {p}
                </p>
              ),
            )}
          </div>
        </article>
      </Reveal>
    </PageShell>
  );
}
