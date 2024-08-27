"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeComponent() {

    const { theme, setTheme } = useTheme();
    const [themeState, setThemeState] = React.useState<string | undefined>(theme);

    React.useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    const changeTheme = () => {
        const newTheme = themeState === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeState(newTheme);
    };


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" onClick={changeTheme}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}
