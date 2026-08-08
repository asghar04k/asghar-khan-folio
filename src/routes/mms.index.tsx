import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mms/")({
  head: () => ({
    meta: [
      { title: "MMS Program Portfolio — Asghar Khan" },
      {
        name: "description",
        content:
          "Program portfolio for the Master of Medical Sciences at Western University: courses, rotations, capstone, seminars, and reflections.",
      },
      { property: "og:title", content: "MMS Program Portfolio — Asghar Khan" },
      {
        property: "og:description",
        content: "Coursework artifacts, rotation reflections, and capstone progress.",
      },
    ],
  }),
  component: MmsIndex,
});

const sections = [
  { to: "/mms/courses", label: "Courses", note: "Artifacts and reflections per course" },
  { to: "/mms/rotations", label: "Rotations", note: "Basic science, clinical, community" },
  { to: "/mms/capstone", label: "Capstone", note: "Team project on a wicked problem" },
  { to: "/mms/seminars", label: "Seminars & Bootcamp", note: "Weekly series and lab bootcamp" },
  { to: "/mms/reflections", label: "Reflections", note: "Ongoing journal" },
] as const;

function MmsIndex() {
  return (
    <PageShell
      eyebrow="Master of Medical Sciences"
      title="Program Portfolio"
      intro="This section documents my Master of Medical Sciences at Western University's Schulich School of Medicine & Dentistry, updated each term."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {sections.map((s, i) => (
          <Reveal as="li" key={s.to} delay={i * 50}>
            <Link
              to={s.to}
              className="lift block h-full rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
