import MainInfos from "../components/parts/MainInfos";
import Footer from "../components/common/Footer";

import { FiChevronsDown } from "react-icons/fi";
import InfoCard from "../components/cards/InfoCard";
import StatiscticCard from "../components/cards/StatisticCard";
import HorizontalInfiniteScrollText from "@/components/ui/horizontalInfiniteScrollText";
import Card from "@/components/cards/Card";
import { projects } from "@/utils/constants/Projects";

import { Link } from "react-router-dom";
import ProfessionnalValues from "@/components/parts/ProfessionalValues";


export default function Main() {

    return (
        <div>
            <div className=" h-[90vh] w-full flex flex-col items-center justify-center">
                <MainInfos />
            </div>

            <div className="flex w-full items-center justify-center">
                <div className="animate-bounce">
                    <FiChevronsDown size={22} />
                </div>
            </div>

            <div className="xl:p-40">
                <div className="flex flex-col mt-20 gap-10">

                    <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-10">
                        <InfoCard title="FULL STACK DEVELOPPER" description="Web and mobile development" />
                        <InfoCard title="FULL STACK DEVELOPPER" description="Web and mobile development" />
                        <InfoCard title="FULL STACK DEVELOPPER" description="Web and mobile development" />
                    </div>

                    <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-10">
                        <StatiscticCard number="5+" description="Projets" />
                        <StatiscticCard number="10+" description="Compétences" />
                        <StatiscticCard number="3+" description="Années d'expériences" />
                    </div>

                </div>
            </div>

            <HorizontalInfiniteScrollText
                text="REALISATIONS RECENTES"
            />

            <div className="py-10 w-full">
                <Link className="w-full" to={`/Portfolio/projects/${projects[0].name}`} key={0} style={{ textDecoration: 'none' }}>
                    <Card
                        name={projects[0].name}
                        description={projects[0].description}
                    />
                </Link>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <Link className="w-full" to={`/Portfolio/projects/${projects[1].name}`} key={1} style={{ textDecoration: 'none' }}>
                        <Card
                            name={projects[1].name}
                            description={projects[1].description}
                        />
                    </Link>
                    <Link className="w-full" to={`/Portfolio/projects/${projects[2].name}`} key={2} style={{ textDecoration: 'none' }}>
                        <Card
                            name={projects[2].name}
                            description={projects[2].description}
                        />
                    </Link>
                </div>
            </div>

            <div className="py-10 xl:py-60 xl:px-40 w-full">
                <ProfessionnalValues />
            </div>

            <div className="pt-10">
                <Footer />
            </div>

        </div>
    )
}