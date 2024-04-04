import VerticalTimeline from "../components/common/VerticalTimeline";

export default function About() {
    return (
        <div className="h-full w-full">
            <h1 className="text-2xl font-bold mt-20 md:mt-40 text-center uppercase">Mon Parcours</h1>
            <div className="xl:px-80 pb-10 xl:pb-20">
                <h1 className="text-2xl font-bold uppercase text-center xl:text-left mb-10 md:mb-20"></h1>
                <VerticalTimeline />
            </div>
        </div>
    )
}