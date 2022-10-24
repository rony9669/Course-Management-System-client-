import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import FaqPage from "../Pages/FaqPage/FaqPage";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Header from "../Pages/Shared/Header/Header";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/FAQ",
        element: <FaqPage></FaqPage>,
      },
    ],
  },
]);
