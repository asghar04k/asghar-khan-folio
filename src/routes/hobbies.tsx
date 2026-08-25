import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { hobbies } from "@/content/portfolio";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies · Asghar Khan" },
      {
        name: "description",
        content:
          "Ball hockey, basketball, and golf as an intramural captain, plus time spent outdoors hunting.",
      },
      { property: "og:title", content: "Hobbies · Asghar Khan" },
      { property: "og:description", content: "What I do when I'm not in a hospital or a library." },
    ],
  }),
  component: HobbiesPage,
});

function HobbiesPage() {
  return (
    <PageShell
      eyebrow="Off the clock"
      title="Hobbies"
      intro="What I do when I'm not in a hospital, a library, or a lecture hall."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {hobbies.map((h, i) => (
          <Reveal as="li" key={h.title} delay={i * 60}>
            <div className="lift h-full overflow-hidden rounded-2xl border border-border bg-card">
              {"image" in h && h.image && (
                <img src={h.image} alt={h.title} className="h-56 w-full object-cover" />
              )}
              <div className="p-6">
                <h2 className="font-medium">{h.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
