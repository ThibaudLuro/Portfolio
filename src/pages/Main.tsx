import Topbar from "../components/common/Topbar";
import MainInfos from "../components/parts/MainInfos";
import Footer from "../components/common/Footer";

import { FiChevronsDown } from "react-icons/fi";
import InfoCard from "../components/cards/InfoCard";
import StatiscticCard from "../components/cards/StatisticCard";

export default function Main() {

    return (
        <div className="h-full w-full text-accent bg-primary font-montserrat">
            <div className="p-10">

                <Topbar />

                <div className=" h-[90vh] w-full flex flex-col items-center justify-center">
                    <MainInfos />
                </div>

                <div className="flex w-full items-center justify-center bg-primary">
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

            </div>

            <div className="pt-20">
                <Footer />
            </div>

        </div>
    )
}