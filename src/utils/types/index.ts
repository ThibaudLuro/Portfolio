export interface IProject {
    name: string;
    description: string;
    technologies: string[];
    icon: string;
    link: string;
    explanation: {element: string, content: string, illustration?: string}[];
}

export interface ISkill {
    name: string;
    icon: string;
    explanation: {element: string, content: string, illustration?: string}[];
}

export interface ITopBarItem {
    name: string;
    link: string;
}