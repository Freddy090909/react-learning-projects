import { Link } from "react-router";
import { Button } from "@/shadcn/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">404</p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Page not found</h1>
      <p className="text-sm leading-relaxed text-muted-foreground">
        This page doesn't exist. Head back to explore the projects.
      </p>
      <Button variant="link" className="px-0" render={<Link to="/" />} nativeButton={false}>
        Back to all projects →
      </Button>
    </div>
  );
}
