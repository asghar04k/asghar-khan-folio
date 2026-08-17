import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/mms/courses")({
  component: () => <Outlet />,
});
