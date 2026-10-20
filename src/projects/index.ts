import type { RouteObject } from "react-router";
import { routes as oneRoutes } from "./one/routes";
import { routes as twoRoutes } from "./two/routes";
import { routes as threeRoutes } from "./three/routes";

export type Project = {
  slug: string;
  name: string;
  description: string;
  navigation: { label: string; to: string }[];
  routes: RouteObject[];
};

// Register a project here to include it in the router and site navigation.
export const projects: Project[] = [
  {
    slug: "one",
    name: "One",
    description: "A fresh space for the first project.",
    navigation: [
      { label: "Overview", to: "." },
      { label: "Details", to: "details" },
    ],
    routes: oneRoutes,
  },
  {
    slug: "two",
    name: "Two",
    description: "The starting point for something new.",
    navigation: [
      { label: "Overview", to: "." },
      { label: "Details", to: "details" },
    ],
    routes: twoRoutes,
  },
  {
    slug: "three",
    name: "Three",
    description: "Another idea, ready to take shape.",
    navigation: [
      { label: "Overview", to: "." },
      { label: "Details", to: "details" },
    ],
    routes: threeRoutes,
  },
];
