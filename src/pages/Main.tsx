import Topbar from "../components/common/Topbar";
import MainInfos from "../components/parts/MainInfos";
import Contact from "../components/parts/Contact";
import MainPageProjects from "../components/parts/MainPageProjects";
import VerticalTimeline from "../components/common/VerticalTimeline";

import { topBarItems } from "../utils/constants/TopBarItems";

import { FiChevronsDown } from "react-icons/fi";


export default function Main() {

  return (
    <div className="h-full w-full p-10 bg-primary font-montserrat">
      <Topbar topBarItems={topBarItems} />

      <div className=" h-[90vh] w-full flex flex-col items-center justify-center">
        <MainInfos />
      </div>

      <div className="flex w-full items-center justify-center bg-primary">
        <div className="animate-bounce">
          <FiChevronsDown size={22} className="text-zinc-600" />
        </div>
      </div>

      <div className="pt-20">
        <h2 className="text-2xl font-bold mb-5">MES REALISATIONS</h2>
        <MainPageProjects />
      </div>

      <div className="pt-20">
        <h1 className="text-2xl font-bold mb-5">A PROPOS</h1>
        <VerticalTimeline />
      </div>

      <div className="pt-20">
        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>
        <Contact />
      </div>

    </div>
  )
}