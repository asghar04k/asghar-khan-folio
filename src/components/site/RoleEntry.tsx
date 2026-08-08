import { useState } from "react";
import { Plus } from "lucide-react";
import type { Role } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function RoleEntry({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={cn(
        "group rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300",
        open && "border-primary/50 shadow-[0_18px_40px_-24px_var(--color-primary)]",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 text-left"
      >
        <div className="min-w-0">
          <p className="font-medium text-balance">{role.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {role.org}
            {role.location ? ` · ${role.location}` : ""}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="ledger hidden sm:inline">{role.dates}</span>
          <Plus
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-300",
              open && "rotate-45 text-primary",
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="rounded-xl bg-muted/70 p-4 text-sm leading-relaxed text-foreground/90">
            <p className="ledger mb-2 sm:hidden">{role.dates}</p>
            {role.description}
          </div>
        </div>
      </div>
    </li>
  );
}
