import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { RoleEntry } from "@/components/site/RoleEntry";
import { employment, leadershipRoles, practicum, ursa } from "@/content/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Work Experience · Asghar Khan" },
      {
        name: "description",
        content:
          "Employment, the Western Centre for Bioethics clinical ethics practicum, and leadership including founding Western URSA.",
      },
      { property: "og:title", content: "Work Experience · Asghar Khan" },
      {
        property: "og:description",
        content:
          "Clinical ethics practicum, hospital research roles, and founding a 2,000+ member undergraduate research community.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Employment · Practicum · Leadership"
      title="Work Experience"
      intro="Hover or tap any role to open the full description."
    >
      <SectionHeading>Employment</SectionHeading>
      <ul className="space-y-3">
        {employment.map((role) => (
          <RoleEntry key={role.title + role.dates} role={role} />
        ))}
      </ul>

      <SectionHeading>Practicum</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="ledger">{practicum.dates}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-balance">
            {practicum.title}
          </h3>
          <p className="mt-3 inline-flex rounded-full bg-secondary/12 px-3 py-1 font-mono text-xs text-secondary">
            {practicum.badge}
          </p>
          <p className="mt-5 leading-relaxed text-foreground/85">{practicum.body}</p>
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground italic">
            {practicum.reflection}
          </blockquote>
          <a
            href={practicum.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            {practicum.linkLabel} <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
            Photos from the Western Centre for Bioethics launch event and with Dr. Jacob Shelley
            will be added here.
          </div>
        </article>
      </Reveal>

      <SectionHeading>Leadership</SectionHeading>
      <Reveal>
        <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="ledger">2025 – 2026</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{ursa.title}</h3>
          <p className="mt-1 text-muted-foreground">{ursa.org}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {ursa.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-muted/70 p-4">
                <p className="font-mono text-2xl text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 leading-relaxed text-foreground/85">
            {ursa.narrative.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{ursa.thanks}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={ursa.website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              westernursa.ca <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={ursa.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-secondary hover:text-secondary"
            >
              @westernursa <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {ursa.images && ursa.images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ursa.images.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          )}
          <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
            More photos from the Indigenous Health &amp; Research Talking Circle and the LinkedIn
            headshots event will be added here.
          </div>
        </article>
      </Reveal>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {leadershipRoles.map((r, i) => (
          <Reveal as="li" key={r.org} delay={i * 40}>
            <div className="lift h-full rounded-2xl border border-border bg-card p-5">
              <p className="font-medium">{r.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.org}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
