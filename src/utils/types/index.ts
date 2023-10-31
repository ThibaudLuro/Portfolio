export interface IProject {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    explanation: {element: string, content: string, illustration: string}[];
}