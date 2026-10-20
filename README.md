# React learning projects

A shared React site for independent projects, built with TypeScript, React Router, and Vite+.

## Getting started

```sh
vp install
vp run dev
```

The home page lists every project. Each project has its own nested routes:

| Project | Overview          | Details                   |
| ------- | ----------------- | ------------------------- |
| One     | `/projects/one`   | `/projects/one/details`   |
| Two     | `/projects/two`   | `/projects/two/details`   |
| Three   | `/projects/three` | `/projects/three/details` |

## Adding a project or page

1. Create a folder in `src/projects/` with page components and a `routes.ts` file. Use an existing project as a starting point. Lazy-loaded page modules export a component named `Component`.
2. Register the project in `src/projects/index.ts` with its slug, name, description, navigation items, and routes. This automatically adds it to the home page, main navigation, and router.
3. Add subroutes in that project's `routes.ts`. Add a matching navigation item to the registry for any page that should appear in the project's tabs. Navigation paths are relative to the project root; `.` links to its overview.

`src/layouts/site-layout.tsx` owns the shared site navigation. `src/layouts/project-layout.tsx` owns the project heading, tabs, and nested page outlet. Keep project-specific components and styles in the project's folder.

## Validation and deployment

Run `vp check`, `vp test`, and `vp run build`. There are no automated tests in the initial scaffold.

When deploying, configure your host to serve `index.html` for unknown paths so direct links and refreshes on nested routes work with browser routing.

## Original starter setup

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
