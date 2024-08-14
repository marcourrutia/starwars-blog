import { Characters, Home, Planets } from "./views";

export const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
];
