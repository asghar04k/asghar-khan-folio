import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Presentation,
  Route as RouteIcon,
  Sprout,
  Target,
  UserCircle,
  Volleyball,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { education, employment, profile } from "@/content/portfolio";
import { siteMode } from "@/lib/site-mode";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asghar Khan · Clinical Ethics & Health Research Portfolio" },
      {
        name: "description",
        content:
          "I'm Asghar Khan, a Master of Medical Sciences candidate at Western University: clinical ethics, patient support, and health services research.",
      },
      {
        property: "og:title",
        content: "Asghar Khan · Clinical Ethics & Health Research Portfolio",
      },
      {
        property: "og:description",
        content:
          "I'm Asghar Khan, a Master of Medical Sciences candidate at Western University: clinical ethics, patient support, and health services research.",
      },
    ],
  }),
  component: Index,
});

const personalTiles = [
  { to: "/awards", label: "Awards", note: "Recognition & distinctions", icon: Award },
  { to: "/resume", label: "Resume", note: "View & download", icon: FileText },
  {
    to: "/experience",
    label: "Work Experience",
    note: "Employment, practicum, leadership",
    icon: Briefcase,
  },
  { to: "/research", label: "Research", note: "Reviews, QI, thesis", icon: FlaskConical },
  { to: "/volunteering", label: "Volunteering", note: "SOAHAC & LHSC", icon: HeartHandshake },
  { to: "/mms/courses", label: "MMS", note: "Program portfolio", icon: GraduationCap },
  { to: "/ventures", label: "Ventures", note: "Garden & graveyard", icon: Sprout },
  { to: "/hobbies", label: "Hobbies", note: "Off the clock", icon: Volleyball },
] as const;

// Same order as the MMS-mode top bar (see SiteHeader): Courses through
// Capstone, then Profile last, matching the Profile dropdown's position.
const mmsTiles = [
  { to: "/mms/courses", label: "Courses", note: "Coursework & reflections", icon: GraduationCap },
  {
    to: "/mms/seminars",
    label: "Seminars",
    note: "Interdisciplinary Skill Development",
    icon: Presentation,
  },
  {
    to: "/mms/lab",
    label: "Lab & Journal Club",
    note: "Bootcamp & journal sessions",
    icon: FlaskConical,
  },
  { to: "/mms/rotations", label: "Rotations", note: "Basic, Clinical, Community", icon: RouteIcon },
  { to: "/mms/capstone", label: "Capstone", note: "Team-based final project", icon: Target },
  { to: "/resume", label: "Profile", note: "Resume, awards & more", icon: UserCircle },
] as const;

function Index() {
  const isMms = siteMode === "mms";
  const tiles = isMms ? mmsTiles : personalTiles;

  return (
    <main className="mx-auto max-w-6xl px-5 pt-16 pb-8">
      <section className="wash pb-16">
        <Reveal>
          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="ledger">{profile.location}</p>
              <h1 className="mt-4 text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl">
                {profile.name}
              </h1>
              {isMms && (
                <p className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                  Master of Medical Sciences: ePortfolio
                </p>
              )}
              <p className="mt-5 max-w-2xl font-mono text-sm text-muted-foreground sm:text-base">
                {profile.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-lg text-foreground/85">{profile.shortBio}</p>
            </div>
            {profile.headshot && (
              <img
                src={profile.headshot}
                alt={profile.name}
                className="h-32 w-32 shrink-0 rounded-2xl object-cover shadow-sm sm:h-40 sm:w-40"
              />
            )}
          </div>
        </Reveal>
      </section>

      <section aria-label={isMms ? "MMS Program" : "Explore the portfolio"} className="wash-cool">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.to} delay={i * 50}>
              <Link
                to={tile.to}
                className="lift group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5"
              >
                <tile.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-secondary" />
                <div className="mt-10">
                  <p className="text-lg font-medium tracking-tight">{tile.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{tile.note}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wash-soft mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">{profile.bio}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-xl font-semibold tracking-tight">Education</h2>
          <ul className="mt-4 space-y-5">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="ledger">{e.dates}</p>
                <p className="mt-1 font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                {e.note && <p className="mt-1 text-sm text-primary">{e.note}</p>}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="wash-cool mt-20">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight">Selected experience</h2>
        </Reveal>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {employment.slice(0, 4).map((role, i) => (
            <Reveal as="li" key={role.title} delay={i * 60}>
              <Link
                to="/experience"
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4 transition-colors duration-300 hover:text-primary"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">{role.org}</span>
                  <span className="block truncate text-sm text-muted-foreground">{role.title}</span>
                </span>
                <span className="ledger shrink-0">{role.year}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
