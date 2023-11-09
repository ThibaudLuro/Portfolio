interface IProps {
    placeholder: string;
    onClick?: () => void;
}

export default function AppButton(props: IProps) {
    return (
        <button onClick={props.onClick} className="bg-black text-white text-sm py-2 px-6 w-full hover:bg-neutral-800 transition duration-300 ease-in-out">
            {props.placeholder}
        </button>
    );
};