import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "leaflet/dist/leaflet.css";
import ErrorPage from "./componets/ErrorPage.jsx";
import Projects from "./routes/Projects.jsx";
import GalleryPage from "./routes/GalleryPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//   },
//   {
//     path: "/gallery",
//     element: <GalleryPage />,
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider
      basename={import.meta.env.DEV ? "/" : "/StarDeploy/"}
      router={router}
    /> */}
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/StarDeploy/"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
