import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ShopNow from "../pages/ShopNow";
import Wishlist from "../pages/Wishlist";
import Detail from "../pages/Detail";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/shop",
    element: <ShopNow />,
  },
  {
    id: 3,
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    id: 4,
    path: "/detail",
    element: <Detail />,
  },
];

const Path = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Path;
