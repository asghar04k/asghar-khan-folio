/**
 * Controls which nav layout SiteHeader renders.
 *
 * "personal" (default): Home/Awards/Work Experience/Research/Volunteering as the
 *   top bar, MMS program pages grouped under an "MMS" dropdown, Ventures/Hobbies/
 *   Resume as trailing links. This is the original site.
 * "mms": the roles are swapped for the MMS-focused deployment — Courses, Seminars,
 *   Lab & Journal Club, Rotations, Capstone, and Reflections become the top bar
 *   (that's the actual focus of that deployment), and everything else is tucked
 *   into a "Profile" dropdown.
 *
 * Set via the VITE_SITE_MODE environment variable at build time (e.g. a Vercel
 * project env var). Unset/anything else falls back to "personal" so the existing
 * deployment's behavior never changes just because this file exists.
 */
export type SiteMode = "personal" | "mms";

export const siteMode: SiteMode = import.meta.env["VITE_SITE_MODE"] === "mms" ? "mms" : "personal";
