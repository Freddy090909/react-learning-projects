import { ArrowUpRight, Layers, LayoutGrid } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import { projects } from "../projects";
import { buttonVariants } from "@/shadcn/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)]">
      <a
        className="sr-only z-10 rounded-md bg-background p-3 text-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:ring-2 focus:ring-ring"
        href="#main-content"
      >
        Skip to content
      </a>
      <aside className="flex flex-col border-b bg-sidebar p-5 text-sidebar-foreground md:border-r md:border-b-0 md:py-8">
        <Link
          className="mb-6 flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring md:mx-2 md:mb-12"
          to="/"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
            <Layers size={20} />
          </span>
          <span className="text-sm font-semibold">
            React projects
            <span className="mt-1 block text-xs font-normal text-muted-foreground">
              A place to build & learn
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <NavLink
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
                "h-10 w-full justify-start gap-3",
              )
            }
            to="/"
            end
          >
            <LayoutGrid size={17} /> All projects
          </NavLink>
          <p className="mx-3 mt-6 mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Projects
          </p>
          <div className="grid grid-cols-3 gap-1 md:grid-cols-1">
            {projects.map((project, index) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
                    "h-10 w-full justify-start gap-2 md:gap-3",
                  )
                }
                key={project.slug}
                to={`/projects/${project.slug}`}
              >
                <span className="text-xs text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.name}
                <ArrowUpRight className="ml-auto hidden md:block" size={15} />
              </NavLink>
            ))}
          </div>
        </nav>
        <p className="mx-3 mt-auto hidden pt-12 text-xs text-muted-foreground md:block">
          Small steps. More projects.
        </p>
      </aside>
      <main
        id="main-content"
        className="w-full min-w-0 max-w-7xl px-6 py-10 md:p-12 lg:p-20"
        tabIndex={-1}
      >
        <Outlet />
      </main>
    </div>
  );
}
