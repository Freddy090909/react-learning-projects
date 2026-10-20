import { Link, NavLink, Outlet } from "react-router";
import { ArrowLeft } from "lucide-react";
import type { Project } from "../projects";
import { Button } from "@/shadcn/components/ui/button";

export function ProjectLayout({ project }: { project: Project }) {
  return (
    <>
      <Button variant="link" className="mb-8 px-0" render={<Link to="/" />} nativeButton={false}>
        <ArrowLeft size={16} /> All projects
      </Button>
      <header className="mb-8 space-y-4">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Project
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </header>
      <nav className="flex gap-7 border-b" aria-label={`${project.name} pages`}>
        {project.navigation.map((item) => (
          <NavLink
            className="-mb-px border-b-2 border-transparent py-3 text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:border-primary aria-[current=page]:font-semibold aria-[current=page]:text-foreground"
            key={item.to}
            to={item.to}
            end={item.to === "."}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <section className="py-9">
        <Outlet />
      </section>
    </>
  );
}
