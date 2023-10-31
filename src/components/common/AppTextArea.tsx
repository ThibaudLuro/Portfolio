interface IProps {
    placeholder: string;
}

export default function AppTextArea(props: IProps) {
    return (
        <textarea rows={8} className="bg-neutral-300 w-full text-sm py-2 px-4 focus:outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
            placeholder={props.placeholder}
        />
    );
};