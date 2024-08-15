import { Characters, Home, Planets, Starships } from "./views";

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
    path: "/starships",
    element: <Starships />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
];
