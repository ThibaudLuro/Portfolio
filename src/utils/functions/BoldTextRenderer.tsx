function BoldTextRenderer (text: string) {
    const segments = text.split(/<\/?b>/);

    return (
        <div>
            {segments.map((segment, index) => {
                const isBold = index % 2 === 1;
                return isBold ? (
                    <span key={index} className="font-semibold">
                        {segment}
                    </span>
                ) : (
                    <span key={index}>{segment}</span>
                );
            })}
        </div>
    );
};

export default BoldTextRenderer;