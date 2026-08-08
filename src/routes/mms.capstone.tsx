import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { mmsCapstone, placeholderNote } from "@/content/portfolio";

export const Route = createFileRoute("/mms/capstone")({
  head: () => ({
    meta: [
      { title: "MMS Capstone — Asghar Khan" },
      {
        name: "description",
        content:
          "A team-based capstone on improving resource and support access for marginalized populations.",
      },
      { property: "og:title", content: "MMS Capstone — Asghar Khan" },
      {
        property: "og:description",
        content: "Environmental scan, systematic literature review, and final report.",
      },
    ],
  }),
  component: CapstonePage,
});

function CapstonePage() {
  return (
    <PageShell eyebrow="MMS Program" title="Capstone">
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="ledger">Working title</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance">
            {mmsCapstone.workingTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/85">{mmsCapstone.body}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {mmsCapstone.fields.map((f) => (
              <div key={f} className="rounded-xl border border-dashed border-border p-4">
                <p className="ledger">{f}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{placeholderNote}</p>
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </PageShell>
  );
}
