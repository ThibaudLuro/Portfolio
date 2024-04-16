import LinkTextRenderer from "./LinkTextRenderer";

function BoldTextRenderer(text: string) {
    const segments = text.split(/<\/?b>/);

    return (
        segments.map((segment, index) => {
            const isBold = index % 2 === 1;
            return isBold ? (
                <span key={index} className="font-semibold">
                    {segment}
                </span>
            ) : (
                LinkTextRenderer(segment)
            );
        })
    );
};

export default BoldTextRenderer;