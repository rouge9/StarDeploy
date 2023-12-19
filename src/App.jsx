import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import GalleryPage from "./routes/GalleryPage";
import ErrorPage from "./componets/ErrorPage";

function App() {
  console.log(import.meta.env.DEV);
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/StarDeploy/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StarDeploy/projects" element={<Projects />} />
        <Route path="/StarDeploy/gallery" element={<GalleryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
