import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { research, thesis } from "@/content/portfolio";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Asghar Khan" },
      {
        name: "description",
        content:
          "Scoping reviews, quality improvement work, and a thesis on informed consent for Indigenous peoples living with disabilities in Canada.",
      },
      { property: "og:title", content: "Research — Asghar Khan" },
      {
        property: "og:description",
        content:
          "AI in geriatric medicine, Down syndrome care quality improvement, space medicine ethics, and consent research.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <PageShell
      eyebrow="Projects & Presentations"
      title="Research"
      intro="Scoping reviews, quality improvement, and an independent study grounded in community work."
    >
      <ul className="space-y-3">
        {research.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 50}>
            <article className="lift rounded-2xl border border-border bg-card p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <h2 className="min-w-0 text-lg font-medium text-balance">{p.title}</h2>
                <span className="ledger shrink-0">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{p.org}</p>
              <p className="mt-3 leading-relaxed text-foreground/85">{p.summary}</p>
              {p.details && (
                <ul className="mt-4 space-y-2">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {p.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {l.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
              {p.images && p.images.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {p.images.map((img) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ul>

      <SectionHeading note={thesis.subtitle}>Independent Study</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-balance">{thesis.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{thesis.supervisor}</p>
          <p className="ledger mt-1">{thesis.presented}</p>

          <div className="mt-6 rounded-2xl border-l-2 border-tertiary bg-muted/60 p-5 text-sm leading-relaxed text-foreground/85">
            <p className="ledger mb-2">Land acknowledgement</p>
            {thesis.landAcknowledgement}
          </div>

          <p className="mt-6 leading-relaxed text-foreground/85">{thesis.overview}</p>

          <h4 className="mt-8 font-medium">Research objectives</h4>
          <ol className="mt-3 space-y-2">
            {thesis.objectives.map((o, i) => (
              <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                <span className="font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                {o}
              </li>
            ))}
          </ol>

          <h4 className="mt-8 font-medium">Community grounding</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{thesis.community}</p>
          <Link
            to="/volunteering"
            className="mt-3 inline-flex text-sm text-primary underline-offset-4 hover:underline"
          >
            See the SOAHAC volunteering work →
          </Link>

          <h4 className="mt-8 font-medium">Why I care</h4>
          <p className="mt-2 leading-relaxed text-foreground/85">{thesis.whyICare}</p>

          <h4 className="mt-8 font-medium">Acknowledgements</h4>
          <ul className="mt-2 space-y-1.5">
            {thesis.acknowledgements.map((a) => (
              <li key={a} className="text-sm text-muted-foreground">
                {a}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </PageShell>
  );
}
