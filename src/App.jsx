import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import GalleryPage from "./routes/GalleryPage";
import ErrorPage from "./componets/ErrorPage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/gallery",
      element: <GalleryPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter(routes, {
    basename: import.meta.env.DEV ? "/" : "/StarDeploy/",
  });

  return <RouterProvider router={router} />;
}

export default App;
