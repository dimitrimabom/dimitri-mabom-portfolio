import { LanguageComponent } from "@/components/language/language-component";
import { ThemeComponent } from "@/components/theme/theme-component";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full z-10">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            {/* <img
                src="./DimitriMabomLogo.png"
                className="mr-3 h-6 sm:h-9 rounded-full"
                alt="Flowbite Logo"
              /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Dimitri Mabom
            </span>
          </a>
          <div className="flex items-center lg:order-2 gap-2">
            <ThemeComponent />
            <LanguageComponent />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <Menu />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#" className="block py-2 pr-2 pl-2">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-2 pl-2">
                  Projets
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-2 pl-2">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-2 pl-2">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-2 pl-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
