import Topbar from "../components/common/Topbar";
import MainInfos from "../components/parts/MainInfos";
import { FiChevronsDown } from "react-icons/fi";
import MainPageProjects from "../components/parts/MainPageProjects";
import { topBarItems } from "../utils/constants/TopBarItems";

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
        <MainPageProjects />
      </div>
    </div>
  )
}