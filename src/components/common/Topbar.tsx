import { useState } from 'react';
import { topBarItems } from '../../utils/constants/TopBarItems';

interface IProps {
}

export default function TopBar(props: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="hidden md:flex items-center justify-start gap-10 text-xs text-neutral-400 font-montserrat">
                {topBarItems.map((item: any) => (
                    <h1 className='cursor-pointer select-none hover:text-neutral-800' key={item.name}>{item.name}</h1>
                ))}
            </div>

            <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {isOpen && (
                <div className="flex flex-col text-xs bg-black absolute gap-2 p-4 w-1/2 z-10 text-neutral-400 font-montserrat md:hidden">
                    {topBarItems.map((item: any) => (
                        <h1 key={item.name} onClick={() => setIsOpen(false)}>{item.name}</h1>
                    ))}
                </div>
            )}
        </div>
    );
}
