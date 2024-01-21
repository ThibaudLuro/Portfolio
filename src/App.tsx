import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Portfolio/" element={<Main />} />
                <Route path="Portfolio/projects" element={<Projects />} />
                <Route path="Portfolio/projects/:name" element={<ProjectDetails />} />
                <Route path="Portfolio/skills" element={<Skills />} />
                <Route path="Portfolio/skills/:name" element={<SkillDetails />} />
                <Route path="Portfolio/about" element={<About />} />
                <Route path="Portfolio/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
