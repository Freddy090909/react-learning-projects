import { createBrowserRouter } from "react-router";
import { SiteLayout } from "./layouts/site-layout";
import { ProjectLayout } from "./layouts/project-layout";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { projects } from "./projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      ...projects.map((project) => ({
        path: `projects/${project.slug}`,
        element: <ProjectLayout project={project} />,
        children: [...project.routes, { path: "*", element: <NotFoundPage /> }],
      })),
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default Router;
