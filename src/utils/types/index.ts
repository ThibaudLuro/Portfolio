export interface IProject {
    name: string;
    category: 'technical' | 'soft';
    description: string;
    technologies: string[];
    icon: string;
    link: string;
    explanation: {element: string, content: string, illustration?: string}[];
}

export interface ISkill {
    name: string;
    percentageOfMastery: number;
    icon: string;
    category: 'technical' | 'soft';
    explanation: {element: string, content: string, illustration?: string}[];
}

export interface IPersonnalPresentation {
    explanation: {title: string, content: string}[];
}

export interface ITopBarItem {
    name: string;
    link: string;
}

export interface ITimeLineItem {
    date: string;
    link?: string;
    logo: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    projectsLinked?: string[];
    skillsLinked?: string[];
}