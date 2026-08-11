import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-5 pt-14 pb-8">
      <header className="wash-soft pb-10">
        <Reveal>
          <p className="ledger">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        </Reveal>
      </header>
      <div className="wash-cool">{children}</div>
    </main>
  );
}

export function SectionHeading({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <Reveal className="mt-14 mb-5">
      <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
      {note && <p className="mt-1.5 text-sm text-muted-foreground">{note}</p>}
    </Reveal>
  );
}
