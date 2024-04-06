import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { topBarItems } from "@/utils/constants/TopBarItems";
import { ITopBarItem } from "@/utils/types";

export default function MobileTopBar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <HiOutlineMenuAlt2 size={20} />
            </SheetTrigger>
            <SheetContent side={"left"}>

                {topBarItems.map((item: ITopBarItem, index: number) => (
                    <SheetClose className="flex flex-col" asChild>
                        <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
                            <h1 className={`cursor-pointer select-none dark:text-stone-50 font-montserrat font-medium mt-4 uppercase`} key={item.name}>{item.name}</h1>
                        </Link>
                    </SheetClose>
                ))}
            </SheetContent>
        </Sheet>
    )
}