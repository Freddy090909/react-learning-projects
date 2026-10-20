import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shadcn/components/ui/card";

export function HomePage() {
  return (
    <>
      <header className="mb-10 space-y-4 md:mb-14">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          The collection
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          A little space to build.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Experiments, ideas, and projects. Pick one and take a look around.
        </p>
      </header>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold">All projects</h2>
        <span className="text-xs text-muted-foreground">{projects.length} projects</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            key={project.slug}
            to={`/projects/${project.slug}`}
          >
            <Card className="h-full transition-shadow group-hover:ring-ring">
              <CardContent className="mb-6 flex items-center justify-between text-muted-foreground">
                <span className="grid size-9 place-items-center rounded-lg bg-muted text-xs tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={20} />
              </CardContent>
              <CardHeader className="flex-1 gap-2">
                <CardTitle>
                  <h3 className="text-xl">{project.name}</h3>
                </CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-between text-xs font-medium">
                Open project <span aria-hidden="true">→</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
