
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button"

export function LanguageComponent() {
    // const { i18n } = useTranslation();

    // const changeLanguage = (lng: string) => {
    //     i18n.changeLanguage(lng);
    // };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    Language
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => changeLanguage('en')}> */}
                    English
                </DropdownMenuItem>
                <DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => changeLanguage('fr')}> */}
                    Français
                </DropdownMenuItem>
                {/* Ajoute d'autres langues ici si nécessaire */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
