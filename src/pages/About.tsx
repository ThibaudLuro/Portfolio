import TopBar from "../components/common/Topbar";
import VerticalTimeline from "../components/common/VerticalTimeline";

export default function About() {
    return (
        <div className="h-full w-full bg-primary text-accent font-montserrat p-10">
            <TopBar />

            <h1 className="text-2xl font-bold mb-5 mt-20">A PROPOS</h1>
            <VerticalTimeline />

        </div>
    )
}