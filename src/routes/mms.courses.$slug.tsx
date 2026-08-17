import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
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
          <ul className="space-y-4">
            {detail.selectedWork.map((w) => (
              <Reveal as="li" key={w.title}>
                <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                  <h3 className="text-lg font-medium text-balance">{w.title}</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="ledger">Task</p>
                      <p className="mt-1.5 leading-relaxed text-foreground/85">{w.task}</p>
                    </div>
                    <div>
                      <p className="ledger">My Actions</p>
                      <p className="mt-1.5 leading-relaxed text-foreground/85">{w.actions}</p>
                    </div>
                    <div>
                      <p className="ledger">Results</p>
                      <p className="mt-1.5 leading-relaxed text-foreground/85">{w.results}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <SectionHeading>Also in this course</SectionHeading>
          <Reveal>
            <p className="leading-relaxed text-foreground/85">{detail.alsoInThisCourse}</p>
          </Reveal>

          <SectionHeading>Self-Reflection</SectionHeading>
          <Reveal>
            <div className="space-y-4">
              {detail.reflection.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
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
