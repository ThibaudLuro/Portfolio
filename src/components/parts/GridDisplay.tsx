import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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
        <div className="w-full h-full flex items-center justify-center">
            <Tabs defaultValue="technical" className="w-3/4 sm:w-1/2 flex flex-col justify-center items-center">
                <TabsList className="grid w-full grid-cols-2 2xl:w-1/3 2xl:self-start">
                    <TabsTrigger value="technical">TECHNIQUES</TabsTrigger>
                    <TabsTrigger value="soft">HUMAINES</TabsTrigger>
                </TabsList>
                <TabsContent className="w-full" value="technical">
                    <div className="w-full grid justify-items-center grid-cols-1 xl:grid-cols-3 gap-4">
                        {items.filter(item => item.category === "technical").map((item, index) => (
                            <Link className="w-full" to={`/Portfolio/${itemType}/${item.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={item.name}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent className="w-full" value="soft">
                    <div className="w-full grid justify-items-center grid-cols-1 xl:grid-cols-3 gap-4">
                        {items.filter(item => item.category === "soft").map((item, index) => (
                            <Link className="w-full" to={`/Portfolio/${itemType}/${item.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={item.name}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}