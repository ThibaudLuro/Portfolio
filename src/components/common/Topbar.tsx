import { useState } from 'react';
import { topBarItems } from '../../utils/constants/TopBarItems';
import { Link, useLocation } from 'react-router-dom';
import { ITopBarItem } from '../../utils/types';


export default function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div>
            <div className="hidden md:flex items-center justify-start gap-10 text-xs text-neutral-400 font-montserrat">
                {topBarItems.map((item: ITopBarItem, index: number) => (
                    <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
                        <h1 className={`cursor-pointer select-none hover:text-neutral-800 ${isActive(item.link) ? 'font-bold text-black' : ''}`} key={item.name}>{item.name}</h1>
                    </Link>
                ))}
            </div>


            <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {isOpen && (
                <div className="flex flex-col text-xs bg-black absolute gap-2 p-4 w-1/2 z-10 text-neutral-400 font-montserrat md:hidden">
                    {topBarItems.map((item: ITopBarItem, index: number) => (
                        <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
                            <h1 className={`${isActive(item.link) ? 'font-bold' : ''}`} key={item.name} onClick={() => setIsOpen(false)}>{item.name}</h1>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
