import { Link } from "react-router-dom";

function LinkTextRenderer(text: string) {
    const segments = text.split(/<\/?a>/);

    return (
        segments.map((segment, index) => {
            const isLink = index % 2 === 1;
            return isLink ? (
                <Link to={`/projects/${segment.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                    <span key={index} className="text-brown font-semibold cursor-pointer">
                        {segment}
                    </span>
                </Link>
            ) : (
                <span key={index}>{segment}</span>
            );
        })
    );
};

export default LinkTextRenderer;