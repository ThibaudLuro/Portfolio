interface IProps {
    placeholder: string;
}

export default function AppTextArea(props: IProps) {
    return (
        <textarea rows={8} className="bg-primary border-[1px] border-secondary rounded-md w-full text-sm py-2 px-4 focus:outline-none placeholder:text-stone-400 focus:border-accent"
            placeholder={props.placeholder}
        />
    );
};