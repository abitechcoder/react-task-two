import React from "react";
import { LogoBlack } from "../assets/images";
import { NavLink } from "react-router";

const LINKS = [
  { id: 1, title: "Main", url: "/" },
  { id: 2, title: "Gallery", url: "/gallery" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Certifications", url: "/certifications" },
  { id: 5, title: "Contacts", url: "/contacts" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("IsMenuOpen", isMenuOpen);
  }, [isMenuOpen]);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white font-roboto font-normal">
      <div className="container px-4 lg:px-0 py-[30px] mx-auto grid grid-cols-3">
        <img src={LogoBlack} alt="Logo" className="h-[40px]" />
        {isMenuOpen && (
          <div
            onClick={handleMenuOpen}
            className="hover:cursor-pointer lg:hidden absolute inset-0 bg-black/50 z-5"
          ></div>
        )}
        <div
          onClick={handleMenuOpen}
          className="hover:cursor-pointer lg:hidden col-span-2 flex justify-end items-center"
        >
          <img src="/menu.svg" alt="Mobile menu" className="w-6 h-6" />
        </div>
        <div
          className={`${
            isMenuOpen
              ? "absolute z-10 top-0 right-0 bottom-0 bg-white w-[70%] flex flex-col justify-between"
              : "col-span-2"
          }`}
        >
          {isMenuOpen && (
            <div className="lg:hidden flex justify-end p-4">
              <img
                onClick={handleMenuOpen}
                src="/close.svg"
                alt="Mobile menu"
                className="w-6 h-6 hover:cursor-pointer"
              />
            </div>
          )}
          <div
            className={`items-center gap-12 ${
              isMenuOpen
                ? "lg:hidden flex flex-col"
                : "lg:flex flex-row hidden"
            }`}
          >
            {LINKS.map((link) => (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `uppercase text-xs text-gray-1 leading-3 ${
                    isActive ? "border-t-2 border-b-2 px-2 py-1" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="lg:hidden"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
