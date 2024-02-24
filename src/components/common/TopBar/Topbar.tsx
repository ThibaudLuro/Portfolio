import { ModeToggle } from "../../mode-toggle";
import LargeScreenTopBar from "./LargeScreenTopBar";
import MobileTopBar from './MobileTopBar';


export default function TopBar() {
    return (
        <div className='fixed bg-primary w-full p-10 z-50 flex justify-between items-center'>

            <div className="hidden md:block">
                <LargeScreenTopBar />
            </div>

            <div className="md:hidden">
                <MobileTopBar />
            </div>

            <ModeToggle />
        </div>
    )
}

