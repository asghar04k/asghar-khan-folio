import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { education, employment, profile } from "@/content/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Asghar Khan" },
      {
        name: "description",
        content:
          "View and download the resume of Asghar Khan — Master of Medical Sciences candidate at Western University.",
      },
      { property: "og:title", content: "Resume — Asghar Khan" },
      { property: "og:description", content: "Viewable inline and available for download." },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <PageShell
      eyebrow="Curriculum vitae"
      title="Resume"
      intro="The full resume is below, scrollable in place or downloadable, with a quick summary underneath."
    >
      <Reveal>
        <a
          href="/documents/asghar-khan-resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4" /> Download PDF
        </a>
      </Reveal>

      <Reveal className="mt-6">
        <p className="ledger mb-2">Resume, scroll to read</p>
        <iframe
          src="/documents/asghar-khan-resume.pdf"
          title="Asghar Khan — Resume"
          className="h-[85vh] min-h-[700px] w-full rounded-2xl border border-border bg-muted/40"
        />
      </Reveal>

      <Reveal className="mt-10">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight">{profile.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.tagline} · {profile.location}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{profile.email}</p>

          <h3 className="ledger mt-8">Education</h3>
          <ul className="mt-3 space-y-3">
            {education.map((e) => (
              <li key={e.degree} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
                <span className="min-w-0">
                  <span className="block font-medium">{e.degree}</span>
                  <span className="block text-sm text-muted-foreground">{e.school}</span>
                </span>
                <span className="ledger shrink-0">{e.dates}</span>
              </li>
            ))}
          </ul>

          <h3 className="ledger mt-8">Experience</h3>
          <ul className="mt-3 space-y-3">
            {employment.map((r) => (
              <li key={r.title + r.dates} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
                <span className="min-w-0">
                  <span className="block font-medium">{r.title}</span>
                  <span className="block text-sm text-muted-foreground">{r.org}</span>
                </span>
                <span className="ledger shrink-0">{r.dates}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </PageShell>
  );
}
