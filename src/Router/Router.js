import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../Pages/Shared/Header/Header";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
      },
    ],
  },
]);
