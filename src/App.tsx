import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
// import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:name" element={<ProjectDetails />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
