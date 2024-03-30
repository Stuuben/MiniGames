import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { FlipACoinPage } from "./components/FlipACoinPage";
import { CookieClicker } from "./components/CookieClicker";
import { TicTacToe } from "./components/TicTacToe";
// import { Gallery } from "./pages/Gallery";
// import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/flip",
        element: <FlipACoinPage></FlipACoinPage>,
      },
      {
        path: "/cookie",
        element: <CookieClicker></CookieClicker>,
      },
      {
        path: "/TicTacToe",
        element: <TicTacToe></TicTacToe>,
      },
    ],
  },
]);
