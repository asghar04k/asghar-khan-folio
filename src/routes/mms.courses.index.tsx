import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsCourses, mmsSeminars } from "@/content/portfolio";

export const Route = createFileRoute("/mms/courses/")({
  head: () => ({
    meta: [
      { title: "MMS Courses · Asghar Khan" },
      {
        name: "description",
        content:
          "Graded coursework in the Master of Medical Sciences program, each with an artifact and a written reflection.",
      },
      { property: "og:title", content: "MMS Courses · Asghar Khan" },
      {
        property: "og:description",
        content: "Course artifacts and reflections, updated each term.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <PageShell
      eyebrow="MMS Program"
      title="Courses"
      intro="Each course carries an artifact and a reflection, added as the program progresses."
    >
      <ul className="grid auto-rows-fr gap-3 sm:grid-cols-2">
        {mmsCourses.map((c, i) =>
          c.active ? (
            <Reveal as="li" key={c.slug} delay={i * 40}>
              <Link
                to="/mms/courses/$slug"
                params={{ slug: c.slug }}
                className="lift flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6"
              >
                <div>
                  <h2 className="font-medium text-balance">{c.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                  View course <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ) : (
            <Reveal as="li" key={c.slug} delay={i * 40}>
              <div
                aria-disabled="true"
                className="flex h-full cursor-not-allowed flex-col justify-between rounded-2xl border border-dashed border-border/60 bg-card/40 p-6 opacity-50 grayscale"
              >
                <div>
                  <h2 className="font-medium text-balance">{c.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </div>
                <span className="ledger mt-4">Coming soon</span>
              </div>
            </Reveal>
          ),
        )}
      </ul>

      <SectionHeading note="Running through the program">Seminars</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2">
        {mmsSeminars.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 50}>
            <Link
              to="/mms/seminars"
              className="lift flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6"
            >
              <div>
                <h2 className="font-medium">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                View seminars <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
