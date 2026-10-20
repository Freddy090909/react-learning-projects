import { createBrowserRouter } from "react-router";
import { Home } from "lucide-react";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Router;
