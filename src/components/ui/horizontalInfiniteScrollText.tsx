interface IProps {
    text: string;
}

export default function HorizontalInfiniteScrollText(props: IProps) {

    const duplicationNumber = 4;

    return (
        <div className="flex overflow-hidden whitespace-nowrap mt-40 relative">
            <div className="animate-scrollHorizontal flex gap-4">
                {
                    Array.from({ length: duplicationNumber }, () => (
                        <div className="flex gap-4">
                            <h1 className="text-4xl font-bold inline-block">{props.text}</h1>
                            <h1 className="text-4xl font-bold inline-block" style={{
                                WebkitTextStroke: '0.5px white',
                                color: 'transparent'
                            }}>{props.text}</h1>
                        </div>))
                }
            </div>
        </div>
    );
}