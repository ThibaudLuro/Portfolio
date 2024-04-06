import { Link } from "react-router-dom";
import Card from "../cards/Card";

interface IElement {
    name: string;
    category: "technical" | "soft";
    icon?: string;
    description?: string;
}

interface IProps {
    items: IElement[];
    itemType: "skills" | "projects";
}

export default function GridDisplay({ items, itemType }: IProps) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-20">

            <h1 className="text-lg font-semibold w-full my-10">TECHNIQUES</h1>
            <div className="w-full grid justify-items-center grid-cols-1 xl:grid-cols-3 gap-4">
                {items.filter(item => item.category === "technical").map((item, index) => (
                    <Link className="w-full" to={`/${itemType}/${item.name}`} key={index} style={{ textDecoration: 'none' }}>
                        <Card
                            name={item.name}
                            icon={item.icon}
                            description={item.description}
                        />
                    </Link>
                ))}
            </div>

            <h1 className="text-lg font-semibold w-full my-10">HUMAINES</h1>
            <div className="w-full grid justify-items-center grid-cols-1 xl:grid-cols-3 gap-4">
                {items.filter(item => item.category === "soft").map((item, index) => (
                    <Link className="w-full" to={`/${itemType}/${item.name}`} key={index} style={{ textDecoration: 'none' }}>
                        <Card
                            name={item.name}
                            icon={item.icon}
                            description={item.description}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}