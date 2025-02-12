import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import Image from "next/image";

const LANGUAGES = [
  { code: "fr", label: "Fr", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" },
  { code: "en", label: "En", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" },
];

const SwitchLang = () => {

  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center p-2 bg-background hover:bg-accent"
      >
        <Image
          width={20}
          height={16}
          src={LANGUAGES.find((lang) => lang.code === selectedLang)?.flag || ""}
          alt="flag"
          className="mr-2"
        />
        {LANGUAGES.find((lang) => lang.code === selectedLang)?.label}
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 bg-background border w-max"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center w-full p-2 hover:bg-accent"
            >
              <Image width={20} height={16} src={lang.flag} alt="flag" className="mr-2" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwitchLang;
