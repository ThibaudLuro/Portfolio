import { Link } from "react-router-dom";

function LinkTextRenderer(text: string) {
    const segments = text.split(/<\/?a>/);
    const url = window.location.href;
    const isSkills = url.includes('skills');

    return (
        segments.map((segment, index) => {
            const isLink = index % 2 === 1;
            return isLink ? (
                <Link to={`/${isSkills ? "projects" : "skills" }/${segment.trim()}`} key={index} style={{ textDecoration: 'none' }}>
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