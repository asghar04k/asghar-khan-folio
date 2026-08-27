import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, ExternalLink, Hammer, Quote, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageShell, SectionHeading } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { certifications, cliftonStrengths, seminarSeries } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mms/seminars")({
  head: () => ({
    meta: [
      { title: "Interdisciplinary Skill Development · Asghar Khan" },
      {
        name: "description",
        content:
          "A weekly, ungraded seminar series on the personal and professional skills interdisciplinary research requires.",
      },
      { property: "og:title", content: "Interdisciplinary Skill Development · Asghar Khan" },
      {
        property: "og:description",
        content:
          "A summer of Friday seminars on digital literacy, wicked problems, AI tools, and more.",
      },
    ],
  }),
  component: SeminarsPage,
});

function scrollToSlug(slug: string) {
  document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TimelineStrip() {
  return (
    <TooltipProvider delayDuration={150}>
      <Reveal>
        <ol className="flex flex-wrap gap-2">
          {seminarSeries.timeline.map((w) => {
            const featuredSlug = seminarSeries.featured.find((f) => f.date === w.date)?.slug;
            const targetSlug = featuredSlug ?? (w.topic === "Strengths" ? "strengths" : undefined);
            const clickable = Boolean(targetSlug) && !w.holiday;
            return (
              <li key={w.week}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      disabled={w.holiday}
                      onClick={() => targetSlug && scrollToSlug(targetSlug)}
                      className={cn(
                        "ledger flex h-9 w-11 items-center justify-center rounded-full border !text-[11px] transition-all duration-200",
                        w.holiday
                          ? "cursor-default border-dashed border-border/50 bg-muted/30 text-muted-foreground/50"
                          : clickable
                            ? "lift cursor-pointer border-primary/30 bg-primary/10 text-primary hover:border-primary"
                            : "border-border bg-card text-foreground/70",
                      )}
                    >
                      {w.week}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{w.topic}</p>
                    <p className="text-[10px] opacity-80">
                      {w.date}
                      {w.presenter && ` · ${w.presenter}`}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ol>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-primary/30 bg-primary/10" />
            Selected as an artifact below
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-border bg-card" />
            Hover for details
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-dashed border-border/50 bg-muted/30" />
            No session
          </span>
        </div>
      </Reveal>
    </TooltipProvider>
  );
}

function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-label={`${front} Tap to reveal.`}
      className="h-28 w-full [perspective:800px]"
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-border bg-card p-3 text-center text-sm font-medium [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10 p-3 text-center text-xs leading-relaxed text-foreground/85 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </button>
  );
}

function ConsensusMeter({
  meter,
}: {
  meter: NonNullable<(typeof seminarSeries.featured)[number]["consensusMeter"]>;
}) {
  return (
    <div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="bg-primary" style={{ width: `${meter.yes}%` }} />
        <div className="bg-amber" style={{ width: `${meter.mixed}%` }} />
        <div className="bg-muted-foreground/40" style={{ width: `${meter.no}%` }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
        <span>Yes {meter.yes}%</span>
        <span>Mixed {meter.mixed}%</span>
        <span>No {meter.no}%</span>
      </div>
      <p className="mt-1 text-[10px] text-muted-foreground italic">{meter.label}</p>
    </div>
  );
}

function FeaturedCard({ session }: { session: (typeof seminarSeries.featured)[number] }) {
  return (
    <Reveal as="li">
      <article
        id={session.slug}
        className="lift flex h-full scroll-mt-24 flex-col rounded-3xl border border-border bg-card p-6"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-medium text-balance">{session.title}</h3>
          <span className="ledger shrink-0 text-right">
            {session.date}
            {session.presenter && (
              <>
                <br />
                {session.presenter}
              </>
            )}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Compass className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="ledger">The Setup</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">{session.setup}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
              <Hammer className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="ledger">What I Did</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">{session.whatIDid}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/15 text-tertiary">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="ledger">What Stuck</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">{session.whatStuck}</p>
            </div>
          </div>
        </div>

        {session.stepper && (
          <div className="mt-5 pl-11">
            <Accordion type="single" collapsible className="w-full">
              {session.stepper.steps.map((step, i) => (
                <AccordionItem key={step.slice(0, 20)} value={`step-${i}`}>
                  <AccordionTrigger className="text-sm">Step {i + 1}</AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground/85">{step}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-3 text-sm text-foreground/85 italic">{session.stepper.closing}</p>
          </div>
        )}

        {session.skillBadges && session.skillBadges.length > 0 && (
          <div className="mt-5 pl-11">
            <p className="ledger mb-2">Now comfortable with</p>
            <div className="flex flex-wrap gap-2">
              {session.skillBadges.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 py-1 pr-3 pl-1.5"
                >
                  <img src={tool.logo} alt="" className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-medium">{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {session.tools && session.tools.length > 0 && (
          <div className="mt-5 pl-11">
            <div className="grid gap-2 sm:grid-cols-2">
              {session.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lift flex items-start gap-2.5 rounded-xl border border-border bg-muted/40 p-3"
                >
                  <img src={tool.logo} alt="" className="mt-0.5 h-6 w-6 shrink-0 rounded" />
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 text-sm font-medium">
                      {tool.name} <ExternalLink className="h-3 w-3 opacity-60" />
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                      {tool.description}
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground/70">
                      Draws on {tool.database}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            {session.toolsNote && (
              <p className="mt-2 text-xs text-muted-foreground italic">{session.toolsNote}</p>
            )}
            {session.consensusMeter && (
              <div className="mt-3 max-w-xs">
                <ConsensusMeter meter={session.consensusMeter} />
              </div>
            )}
          </div>
        )}

        {session.flipCards && session.flipCards.length > 0 && (
          <div className="mt-5 pl-11">
            <p className="ledger mb-2">Tap to reveal</p>
            <div className="grid grid-cols-3 gap-2">
              {session.flipCards.map((c) => (
                <FlipCard key={c.front} front={c.front} back={c.back} />
              ))}
            </div>
          </div>
        )}

        {session.documents && session.documents.length > 0 && (
          <div className="mt-5 pl-11">
            {session.documents.map((doc) => (
              <div key={doc.src}>
                <p className="ledger mb-2">{doc.label}, scroll to read</p>
                <iframe
                  src={doc.src}
                  title={`${session.title} · ${doc.label}`}
                  className="h-[420px] w-full rounded-2xl border border-border bg-muted/40"
                />
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function SeminarsPage() {
  return (
    <PageShell
      eyebrow="MMS Program · Seminars"
      title="Interdisciplinary Skill Development"
      intro={seminarSeries.intro}
    >
      <SectionHeading note="12 Friday mornings, all summer">Timeline</SectionHeading>
      <TimelineStrip />

      <SectionHeading note="4 sessions, in full">Featured Sessions</SectionHeading>
      <ul className="grid gap-5 sm:grid-cols-2">
        {seminarSeries.featured.map((session) => (
          <FeaturedCard key={session.slug} session={session} />
        ))}
      </ul>

      <SectionHeading note="The rest of the series">Lightning Round</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {seminarSeries.lightningRound.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 40}>
            <article className="h-full rounded-2xl border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-balance">{s.title}</h3>
                <span className="ledger shrink-0 !text-[10px]">{s.date}</span>
              </div>
              {s.presenter && <p className="mt-1 text-xs text-muted-foreground">{s.presenter}</p>}
              <p className="mt-2 text-xs leading-relaxed text-foreground/85">{s.blurb}</p>
            </article>
          </Reveal>
        ))}
      </ul>

      <div id="strengths" className="scroll-mt-24">
        <SectionHeading note="Top 5, in order">My CliftonStrengths</SectionHeading>
      </div>
      <Reveal>
        <p className="mb-4 text-sm text-muted-foreground">
          During the Strengths session, I took the CliftonStrengths assessment, which returned these
          five as my top strengths.
        </p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {cliftonStrengths.map((s) => (
            <li
              key={s.rank}
              className="lift flex gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 font-mono text-sm text-primary">
                {s.rank}
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-medium">
                  {s.name} <Sparkles className="h-3.5 w-3.5 text-secondary" />
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <SectionHeading note="Completed and submitted through the seminar series">
        Certifications
      </SectionHeading>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 50}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-medium text-balance">{c.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</p>
                  {c.date && <p className="ledger mt-1">{c.date}</p>}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{c.reflection}</p>
              <div className="mt-4">
                <iframe
                  src={c.pdf}
                  title={`${c.title} certificate`}
                  className="h-[320px] w-full rounded-2xl border border-border bg-muted/40"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <SectionHeading>Self-Reflection</SectionHeading>
      <Reveal>
        <article className="wash-soft rounded-3xl border border-border bg-card p-6 sm:p-8">
          <Quote className="h-7 w-7 text-primary/40" />
          <div className="mt-4 space-y-5">
            {seminarSeries.reflection.map((p, i) =>
              i === 1 ? (
                <blockquote
                  key={p.slice(0, 24)}
                  className="border-l-2 border-primary pl-5 text-lg leading-relaxed font-medium text-balance text-foreground"
                >
                  {p}
                </blockquote>
              ) : (
                <p key={p.slice(0, 24)} className="leading-relaxed text-foreground/85">
                  {p}
                </p>
              ),
            )}
          </div>
        </article>
      </Reveal>
    </PageShell>
  );
}
