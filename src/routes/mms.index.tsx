import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mms/")({
  head: () => ({
    meta: [
      { title: "MMS Program Portfolio · Asghar Khan" },
      {
        name: "description",
        content:
          "Program portfolio for the Master of Medical Sciences at Western University: courses, rotations, capstone, and seminars.",
      },
      { property: "og:title", content: "MMS Program Portfolio · Asghar Khan" },
      {
        property: "og:description",
        content: "Coursework artifacts, rotation reflections, and capstone progress.",
      },
    ],
  }),
  component: MmsIndex,
});

const stats = [
  { value: "8", label: "courses" },
  { value: "3", label: "rotations" },
  { value: "9 wks", label: "lab bootcamp" },
  { value: "1", label: "capstone team" },
] as const;

const journey = [
  {
    to: "/mms/courses",
    label: "Courses & Seminars",
    note: "Coursework in research design, ethics, and science communication, plus a weekly seminar series.",
  },
  {
    to: "/mms/lab",
    label: "Lab & Journal Club",
    note: "A nine-week hands-on lab bootcamp running two real experiments, plus a recurring journal club.",
  },
  {
    to: "/mms/rotations",
    label: "Rotations",
    note: "Three placements: a lab bench, a clinical setting, and a community partner.",
  },
  {
    to: "/mms/capstone",
    label: "Capstone",
    note: "A team project tackling access to care for marginalized populations.",
  },
] as const;

function MmsIndex() {
  return (
    <PageShell
      eyebrow="Master of Medical Sciences"
      title="Program Portfolio"
      intro="Two years at Western's Schulich School of Medicine & Dentistry, building toward a career at the intersection of research and clinical care. Here's the whole program at a glance."
    >
      <Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-muted/70 p-4 text-center">
              <p className="font-mono text-2xl text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ol className="mt-10 space-y-3">
        {journey.map((s, i) => (
          <Reveal as="li" key={s.to} delay={i * 60}>
            <Link
              to={s.to}
              className="lift flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="ledger mt-0.5 shrink-0 text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{s.label}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.note}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </PageShell>
  );
}
