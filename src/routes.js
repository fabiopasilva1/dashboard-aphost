import { lazy } from "react";
import RouteRestrict from "./routes/RouteRestrict";

const Home = lazy(() => import("./pages/Home"));
const routes = [
  {
    path: "/",
    element: <RouteRestrict />,
  },
];
export default routes;
