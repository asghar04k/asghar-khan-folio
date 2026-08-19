import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { awards, placeholderNote, posts } from "@/content/portfolio";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition · Asghar Khan" },
      {
        name: "description",
        content:
          "Awards and recognition including the 2026 BHSc Award of Recognition, Western Scholarship of Distinction, and the Health Innovation Award.",
      },
      { property: "og:title", content: "Awards & Recognition · Asghar Khan" },
      {
        property: "og:description",
        content: "Academic awards, scholarships, and distinctions earned at Western University.",
      },
    ],
  }),
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <PageShell
      eyebrow="Recognition"
      title="Awards"
      intro="Academic awards, scholarships, and distinctions from Western University and beyond."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {awards.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 50}>
            <div className="lift h-full overflow-hidden rounded-2xl border border-border bg-card">
              {"image" in a && a.image && (
                <img
                  src={a.image}
                  alt={`${a.title} certificate`}
                  className="h-48 w-full object-cover object-[center_78%]"
                />
              )}
              <div className="p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <Award className="h-5 w-5 shrink-0 text-primary" />
                  {a.year && <span className="ledger shrink-0">{a.year}</span>}
                </div>
                <p className="mt-6 font-medium text-balance">{a.title}</p>
                {a.note && <p className="mt-1.5 text-sm text-muted-foreground">{a.note}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <SectionHeading note="In his own words">Convocation & recognition</SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="h-full rounded-2xl border border-border bg-card p-5">
              <p className="ledger">{p.date}</p>
              <h3 className="mt-2 font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <SectionHeading>Certifications & Clifton Strengths</SectionHeading>
      <Reveal>
        <p className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
          {placeholderNote}
        </p>
      </Reveal>
    </PageShell>
  );
}
