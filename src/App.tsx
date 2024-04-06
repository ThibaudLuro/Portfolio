import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TopBar from "./components/common/TopBar/Topbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./utils/functions/ScrollToTop";

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <div className="min-h-screen w-full bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-200 font-montserrat">
                    <TopBar />
                    <div className="p-10 min-h-screen w-full">
                        <ScrollToTop />
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
                    </div>
                    <Toaster />
                </div>
            </Router>
        </ThemeProvider>
    );
}
