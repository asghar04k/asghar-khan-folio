import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { otherVolunteering, volunteering } from "@/content/portfolio";

export const Route = createFileRoute("/volunteering")({
  head: () => ({
    meta: [
      { title: "Volunteering — Asghar Khan" },
      {
        name: "description",
        content:
          "Client support at SOAHAC's Indigenous Food Sovereignty Program and clinic and patient-visiting volunteering at London Health Sciences Centre.",
      },
      { property: "og:title", content: "Volunteering — Asghar Khan" },
      {
        property: "og:description",
        content: "Community and hospital volunteering across London, Ontario.",
      },
    ],
  }),
  component: VolunteeringPage,
});

function VolunteeringPage() {
  return (
    <PageShell
      eyebrow="Community & Hospital"
      title="Volunteering"
      intro="Ongoing service work that also shapes the research questions I pursue."
    >
      <ul className="space-y-3">
        {volunteering.map((v, i) => (
          <Reveal as="li" key={v.org} delay={i * 60}>
            <article className="lift rounded-2xl border border-border bg-card p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h2 className="font-medium text-balance">{v.title}</h2>
                  <p className="mt-1 text-sm text-primary">{v.org}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{v.location}</p>
                </div>
                <span className="ledger shrink-0">{v.dates}</span>
              </div>
              <p className="mt-4 leading-relaxed text-foreground/85">{v.description}</p>
              {v.crossLink && (
                <Link
                  to={v.crossLink.to}
                  className="mt-3 inline-flex text-sm text-secondary underline-offset-4 hover:underline"
                >
                  {v.crossLink.label} →
                </Link>
              )}
            </article>
          </Reveal>
        ))}
      </ul>

      <SectionHeading>Other roles</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2">
        {otherVolunteering.map((v, i) => (
          <Reveal as="li" key={v} delay={i * 40}>
            <div className="lift h-full rounded-2xl border border-border bg-card p-5 text-sm">{v}</div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
