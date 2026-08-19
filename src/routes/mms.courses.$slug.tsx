import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Headphones,
  Quote,
  Target,
  Wrench,
} from "lucide-react";
import { AudioPlayer } from "@/components/site/AudioPlayer";
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
                      {w.links && w.links.length > 0 && !w.audio && (
                        <div className="flex flex-wrap gap-2 pl-11">
                          {w.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
                            >
                              {l.label} <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {((w.documents && w.documents.length > 0) ||
                      w.references ||
                      w.audio ||
                      w.heroImage) && (
                      <div className="flex flex-col gap-4">
                        {w.heroImage &&
                          (() => {
                            const img = (
                              <img
                                src={w.heroImage.src}
                                alt={w.heroImage.alt}
                                className="max-h-[560px] w-full object-contain"
                              />
                            );
                            const caption = w.heroImage.caption && (
                              <p className="border-t border-border px-4 py-2 text-center text-xs text-muted-foreground">
                                {w.heroImage.caption}
                              </p>
                            );
                            return w.heroImage.href ? (
                              <a
                                href={w.heroImage.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="lift block overflow-hidden rounded-2xl border border-border bg-card"
                              >
                                {img}
                                {caption}
                              </a>
                            ) : (
                              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                                {img}
                                {caption}
                              </div>
                            );
                          })()}
                        {w.audio && (
                          <div className="wash-cool flex min-h-[420px] flex-col justify-center rounded-2xl border border-border bg-card p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                                <Headphones className="h-6 w-6" />
                              </span>
                              <div className="min-w-0">
                                <p className="text-base font-medium">{w.audio.podcastName}</p>
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                  {w.audio.description}
                                </p>
                              </div>
                            </div>
                            {w.audio.src ? (
                              <div className="mt-6">
                                <AudioPlayer src={w.audio.src} title={w.audio.podcastName} />
                              </div>
                            ) : (
                              <p className="mt-6 text-xs text-muted-foreground italic">
                                Audio coming soon.
                              </p>
                            )}
                          </div>
                        )}
                        {w.audio && w.links && w.links.length > 0 && (
                          <div className="flex flex-col gap-3">
                            {w.links.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="lift flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                              >
                                {l.label} <ExternalLink className="h-4 w-4" />
                              </a>
                            ))}
                          </div>
                        )}
                        {w.documents && w.documents.length > 0 && (
                          <div className="flex flex-col gap-4">
                            {w.documents.map((doc) => (
                              <div key={doc.src}>
                                <p className="ledger mb-2">{doc.label}, scroll to read</p>
                                <iframe
                                  src={doc.src}
                                  title={`${w.title} — ${doc.label}`}
                                  className={`w-full rounded-2xl border border-border bg-muted/40 ${
                                    w.documents!.length > 1 ? "h-[260px]" : "h-[420px]"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        {w.references && w.references.length > 0 && (
                          <div className="flex flex-wrap items-end gap-4 pt-1">
                            {w.references.map((r, ri) => {
                              const content = (
                                <>
                                  <img
                                    src={r.src}
                                    alt={r.alt}
                                    className="aspect-[3/4] w-full rounded-lg object-cover"
                                  />
                                  <figcaption className="mt-1 truncate text-center text-[10px] text-muted-foreground">
                                    {r.caption}
                                  </figcaption>
                                </>
                              );
                              const className = `lift w-24 shrink-0 rounded-xl border border-border bg-card p-1.5 shadow-sm sm:w-28 ${rotations[(i + ri) % rotations.length]}`;
                              return r.href ? (
                                <a
                                  key={r.src}
                                  href={r.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className={className}
                                >
                                  {content}
                                </a>
                              ) : (
                                <figure key={r.src} className={className}>
                                  {content}
                                </figure>
                              );
                            })}
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
