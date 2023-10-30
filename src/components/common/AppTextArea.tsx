interface IProps {
    placeholder: string;
}

export default function AppTextArea(props: IProps) {
    return (
        <textarea rows={8} className="bg-zinc-300 w-full text-sm py-2 px-4 focus:outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
            placeholder={props.placeholder}
        />
    );
};