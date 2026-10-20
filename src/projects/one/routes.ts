import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  { index: true, lazy: () => import("./overview") },
  { path: "details", lazy: () => import("./details") },
];
