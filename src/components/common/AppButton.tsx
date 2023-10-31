interface IProps {
    placeholder: string;
}

export default function AppButton(props: IProps) {
    return (
        <button className="bg-black text-white text-sm py-2 px-6 w-full hover:bg-neutral-800 transition duration-300 ease-in-out">
            {props.placeholder}
        </button>
    );
};