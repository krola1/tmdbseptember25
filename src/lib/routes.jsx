import App from "../App";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "movie/:id", element: <Movie /> },
    ],
  },
];

export default routes;
