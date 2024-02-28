import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="outline" size="icon" onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
            <MdSunny className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
