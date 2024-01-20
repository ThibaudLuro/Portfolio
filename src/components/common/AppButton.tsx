interface IProps {
    placeholder: string;
    onClick?: () => void;
}

export default function AppButton(props: IProps) {
    return (
        <button onClick={props.onClick} className="bg-accent border-[1px] rounded-md text-stone-900 text-sm font-medium py-2 px-6 w-full hover:bg-stone-200 transition duration-300 ease-in-out">
            {props.placeholder}
        </button>
    );
};