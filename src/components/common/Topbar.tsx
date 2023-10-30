import { useState } from 'react';

interface IProps {
    topBarItems: Array<{ name: string }>;
}

export default function TopBar(props: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="hidden md:flex items-center justify-start gap-10 text-xs text-zinc-400 font-montserrat">
                {props.topBarItems.map((item: any) => (
                    <h1 className='cursor-pointer select-none hover:text-zinc-800' key={item.name}>{item.name}</h1>
                ))}
            </div>

            <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {isOpen && (
                <div className="flex flex-col text-xs bg-black absolute gap-2 p-4 w-1/2 z-10 text-zinc-400 font-montserrat md:hidden">
                    {props.topBarItems.map((item: any) => (
                        <h1 key={item.name} onClick={() => setIsOpen(false)}>{item.name}</h1>
                    ))}
                </div>
            )}
        </div>
    );
}
