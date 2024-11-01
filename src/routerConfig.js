import { Home, ItemDetail, ItemList } from "./views";

export const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/item-list",
    element: <ItemList />,
  },
  {
    path: "/item-details/:id",
    element: <ItemDetail />,
  },
];
