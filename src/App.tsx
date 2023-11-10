import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Portfolio/" element={<Main />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:name" element={<ProjectDetails />} />
                <Route path="skills" element={<Skills />} />
                <Route path="skills/:name" element={<SkillDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
