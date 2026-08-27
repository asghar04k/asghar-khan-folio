import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/content/portfolio";
import { siteMode } from "@/lib/site-mode";
import { cn } from "@/lib/utils";

const profileLinks = [
  { to: "/awards", label: "Awards" },
  { to: "/experience", label: "Work Experience" },
  { to: "/research", label: "Research" },
  { to: "/volunteering", label: "Volunteering" },
  { to: "/ventures", label: "Ventures" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/resume", label: "Resume" },
];

const mmsLinks = [
  { to: "/mms/courses", label: "Courses" },
  { to: "/mms/seminars", label: "Seminars" },
  { to: "/mms/lab", label: "Lab & Journal Club" },
  { to: "/mms/rotations", label: "Rotations" },
  { to: "/mms/capstone", label: "Capstone" },
];

type NavEntry = { kind: "link"; to: string; label: string } | { kind: "dropdown" };

// "personal" (default): profile pages up front as individual links, MMS pages
// tucked into an "MMS" dropdown at the end.
// "mms": roles swapped for the MMS-focused deployment. The Profile dropdown
// (Awards/Work Experience/Resume/etc.) sits right after Home, so a visitor
// learns who you are before going into the coursework, then the MMS pages
// follow as individual links (the actual focus of that deployment).
// See site-mode.ts.
const navEntries: NavEntry[] =
  siteMode === "mms"
    ? [
        { kind: "link", to: "/", label: "Home" },
        { kind: "dropdown" },
        ...mmsLinks.map((l) => ({ kind: "link" as const, ...l })),
      ]
    : [
        { kind: "link", to: "/", label: "Home" },
        { kind: "link", to: "/awards", label: "Awards" },
        { kind: "link", to: "/experience", label: "Work Experience" },
        { kind: "link", to: "/research", label: "Research" },
        { kind: "link", to: "/volunteering", label: "Volunteering" },
        { kind: "dropdown" },
        { kind: "link", to: "/ventures", label: "Ventures" },
        { kind: "link", to: "/hobbies", label: "Hobbies" },
        { kind: "link", to: "/resume", label: "Resume" },
      ];

const dropdownLabel = siteMode === "mms" ? "Profile" : "MMS";
const dropdownLinks = siteMode === "mms" ? profileLinks : mmsLinks;

const linkClass =
  "relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-foreground";
const activeClass = "text-foreground bg-accent";

function DesktopDropdown() {
  return (
    // Menu is flush with trigger (top-full) — spacing is internal padding,
    // so there is no hover dead-zone.
    <div className="group relative">
      <button type="button" className={cn(linkClass, "inline-flex items-center gap-1")}>
        {dropdownLabel}
        <span aria-hidden className="text-[10px]">
          ▾
        </span>
      </button>
      <div className="pointer-events-none absolute top-full left-0 pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="w-56 rounded-xl border border-border bg-popover p-1.5 shadow-lg">
          {dropdownLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{
                className:
                  "block rounded-lg px-3 py-2 text-sm bg-accent text-foreground transition-colors",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 lg:flex lg:justify-between">
        <Link to="/" className="min-w-0 truncate font-mono text-sm tracking-tight text-foreground">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navEntries.map((entry) =>
            entry.kind === "dropdown" ? (
              <DesktopDropdown key="dropdown" />
            ) : (
              <Link
                key={entry.to}
                to={entry.to}
                className={linkClass}
                activeOptions={{ exact: entry.to === "/" }}
                activeProps={{ className: cn(linkClass, activeClass) }}
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pt-2 pb-4 lg:hidden">
          <div className="flex flex-col">
            {navEntries.map((entry) =>
              entry.kind === "dropdown" ? (
                <div key="dropdown-mobile">
                  <p className="ledger mt-3 px-2">{dropdownLabel}</p>
                  {dropdownLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-border" />
                </div>
              ) : (
                <Link
                  key={entry.to}
                  to={entry.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {entry.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
