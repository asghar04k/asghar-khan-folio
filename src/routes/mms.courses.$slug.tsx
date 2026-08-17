import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Headphones, Quote, Target, Wrench } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { courseDetails, mmsCourses, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/courses/$slug")({
  loader: ({ params }) => {
    const course = mmsCourses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Course"} — Asghar Khan` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: `${loaderData?.title ?? "Course"} — Asghar Khan` },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: CourseDetailPage,
});

const rotations = ["-rotate-2", "rotate-2", "-rotate-1"];

function CourseDetailPage() {
  const course = Route.useLoaderData();
  const detail = courseDetails[course.slug];

  return (
    <PageShell
      eyebrow="MMS Program · Courses"
      title={course.title}
      intro={detail?.intro ?? course.description}
    >
      <Link
        to="/mms/courses"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All courses
      </Link>

      {detail ? (
        <>
          {detail.podcast && (
            <Reveal className="mt-8">
              <article className="wash-cool flex items-center gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Headphones className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{detail.podcast.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {detail.podcast.description}
                  </p>
                  <audio controls className="mt-3 w-full" src={detail.podcast.src}>
                    <track kind="captions" />
                  </audio>
                </div>
              </article>
            </Reveal>
          )}

          <SectionHeading>Selected Work</SectionHeading>
          <ul className="space-y-6">
            {detail.selectedWork.map((w, i) => (
              <Reveal as="li" key={w.title}>
                <article className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8">
                  <h3 className="text-lg font-medium text-balance">{w.title}</h3>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                    <div className="space-y-5">
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

                    {(w.documentPdf || w.references) && (
                      <div className="flex flex-col gap-4">
                        {w.documentPdf && (
                          <div>
                            <p className="ledger mb-2">The proposal, scroll to read</p>
                            <iframe
                              src={w.documentPdf}
                              title={`${w.title} document`}
                              className="h-[420px] w-full rounded-2xl border border-border bg-muted/40"
                            />
                          </div>
                        )}
                        {w.references && w.references.length > 0 && (
                          <div className="flex flex-wrap items-end gap-4 pt-1">
                            {w.references.map((r, ri) => (
                              <figure
                                key={r.src}
                                className={`lift w-24 shrink-0 rounded-xl border border-border bg-card p-1.5 shadow-sm sm:w-28 ${rotations[(i + ri) % rotations.length]}`}
                              >
                                <img
                                  src={r.src}
                                  alt={r.alt}
                                  className="aspect-[3/4] w-full rounded-lg object-cover"
                                />
                                <figcaption className="mt-1 truncate text-center text-[10px] text-muted-foreground">
                                  {r.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <SectionHeading>Also in this course</SectionHeading>
          <Reveal>
            <p className="text-sm text-muted-foreground">{detail.alsoInThisCourse.intro}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {detail.alsoInThisCourse.topics.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-muted/60 px-4 py-2 text-sm text-foreground/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <SectionHeading>Self-Reflection</SectionHeading>
          <Reveal>
            <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
              <Quote className="h-7 w-7 text-primary/40" />
              <div className="mt-4 space-y-5">
                {detail.reflection.map((p, i) =>
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
        </>
      ) : (
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-dashed border-border p-4">
            <p className="ledger">Artifact</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
          </div>
          <div className="rounded-xl border border-dashed border-border p-4">
            <p className="ledger">Reflection</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
          </div>
        </div>
      )}
    </PageShell>
  );
}
