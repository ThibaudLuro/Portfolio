
import React from "react";

interface AppButtonProps {
    placeholder: string;
}

const AppButton: React.FC<AppButtonProps> = ({ placeholder }) => {
    return (
        <button className="bg-black text-white text-sm py-2 px-6 w-full hover:bg-zinc-800 transition duration-300 ease-in-out">
            {placeholder}
        </button>
    );
};

export default AppButton;