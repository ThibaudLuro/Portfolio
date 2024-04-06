import React from "react"

import logo from '../../../assets/Luro.png';
import { projects } from "@/utils/constants/Projects";
import { skills } from "@/utils/constants/Skills";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

import { TokensIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom";

export default function LargeScreenTopBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>THIBAUD LURO</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        >
                                            <img src={logo} className="h-10 w-10" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                THIBAUD LURO
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Etudiant en ingénierie logicielle, spécialisé dans le développement web fullstack.
                                            </p>
                                        </a>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="uppercase">Réalisations</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="p-4 space-y-4">
                            <NavigationMenuLink asChild>
                                <Link to={"/projects"} style={{ textDecoration: 'none' }}>
                                    <a
                                        className={cn(
                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-stone-800"
                                        )}
                                    >
                                        <div className="text-sm font-medium leading-none flex items-center justify-center">
                                            <TokensIcon className="h-5 w-5" />
                                            <p className="ml-2 uppercase">Voir toutes mes réalisations</p>
                                        </div>
                                    </a>
                                </Link>
                            </NavigationMenuLink>
                            <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {projects.map((project) => (
                                    <ListItem
                                        key={project.name}
                                        type="projects"
                                        title={project.name}
                                    >
                                        {project.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="uppercase">Compétences</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="p-4 space-y-4">
                            <NavigationMenuLink asChild>
                                <Link to={"/skills"} style={{ textDecoration: 'none' }}>
                                    <a
                                        className={cn(
                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-stone-800"
                                        )}
                                    >
                                        <div className="text-sm font-medium leading-none flex items-center justify-center">
                                            <TokensIcon className="h-5 w-5" />
                                            <p className="ml-2 uppercase">Voir toutes mes compétences</p>
                                        </div>
                                    </a>
                                </Link>
                            </NavigationMenuLink>
                            <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {skills.map((skill) => (
                                    <ListItem
                                        key={skill.name}
                                        type="skills"
                                        title={skill.name}
                                    >
                                    </ListItem>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/about">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            MON PARCOURS
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/contact">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            CONTACT
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, type, ...props }, ref) => {
    return (
        <li>
            <Link to={`/${type}/` + title} style={{ textDecoration: 'none' }}>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-stone-800",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-xs text-stone-600 dark:text-stone-200 leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </Link>
        </li>
    )
})
ListItem.displayName = "ListItem"