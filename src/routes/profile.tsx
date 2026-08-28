import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  FileText,
  FlaskConical,
  HeartHandshake,
  Sprout,
  Volleyball,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile · Asghar Khan" },
      {
        name: "description",
        content:
          "Awards, work experience, research, volunteering, ventures, hobbies, and resume, all in one place.",
      },
      { property: "og:title", content: "Profile · Asghar Khan" },
      { property: "og:description", content: "Everything about me outside the MMS program." },
    ],
  }),
  component: ProfilePage,
});

const tiles = [
  { to: "/awards", label: "Awards", note: "Recognition & distinctions", icon: Award },
  {
    to: "/experience",
    label: "Work Experience",
    note: "Employment, practicum, leadership",
    icon: Briefcase,
  },
  { to: "/research", label: "Research", note: "Reviews, QI, thesis", icon: FlaskConical },
  { to: "/volunteering", label: "Volunteering", note: "SOAHAC & LHSC", icon: HeartHandshake },
  { to: "/ventures", label: "Ventures", note: "Garden & graveyard", icon: Sprout },
  { to: "/hobbies", label: "Hobbies", note: "Off the clock", icon: Volleyball },
  { to: "/resume", label: "Resume", note: "View & download", icon: FileText },
] as const;

function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profile"
      title="Profile"
      intro="Awards, experience, research, and everything else about me outside the MMS program, all in one place."
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, i) => (
          <Reveal as="li" key={tile.to} delay={i * 50}>
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
      </ul>
    </PageShell>
  );
}
