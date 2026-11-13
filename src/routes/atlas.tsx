import { createFileRoute, redirect } from "@tanstack/react-router";
import { profile } from "@/content/portfolio";

// /atlas forwards to the private Atlas dashboard (a Claude artifact).
// Access is gated by the owner's Claude login, so this route holds no secrets.
export const Route = createFileRoute("/atlas")({
  head: () => ({ meta: [{ title: "Atlas" }, { name: "robots", content: "noindex, nofollow" }] }),
  beforeLoad: () => {
    throw redirect({ href: profile.atlas.href });
  },
  component: AtlasRedirect,
});

function AtlasRedirect() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-muted-foreground">
        Opening <a className="underline" href={profile.atlas.href}>Atlas</a>…
      </p>
    </main>
  );
}
