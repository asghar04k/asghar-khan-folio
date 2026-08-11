import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="wash-cool mt-24 border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-sm text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
