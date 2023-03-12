import Link from "next/link";
import { useState, useCallback } from "react";
import Icon from "~/src/components/Icon";
import ShoppingSidebar from "~/src/components/ShoppingCart";

const links = [
  {
    label: "Home",
    href: "/",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="py-5 box-border
      lg:flex lg:items-center px-4 lg:px-12 shadow-md bg-white z-10 lg:py-0"
    >
      {/* mobile section */}
      <div
        className="flex flex-row justify-between flex-1
         lg:items-center lg:flex-row lg:justify-start"
      >
        <Link href="/" className="px-3 flex py-2 rounded">
          <p>Shoe Finery</p>
        </Link>
        <div className="flex gap-4 lg:hidden">
          <ShoppingSidebar />
          <button onClick={toggleNavigation}>
            <Icon icon="navigation" className="w-6 h-6" />
          </button>
        </div>
        <nav
          className={`absolute z-10 transition-all top-0 w-full min-h-screen bg-white mt-16 ${
            isOpen ? "left-[0] px-4" : "left-[-100%]"
          } lg:static lg:min-h-min lg:mt-0 lg:ml-2 lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:min-h-[64px] lg:items-center lg:ml-6">
            {links.map(({ href, label }, index) => (
              <li
                key={index}
                className="pt-2 pb-2 text-navigation hover:text-blackShade relative
                  after:w-full after:h-[2px] after:absolute after:bottom-[-2px] after:left-0"
              >
                <Link
                  href={href}
                  className="capitalize flex items-center min-h-[48px] min-w-[48px] rounded px-3"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <ShoppingSidebar />
      </div>
    </header>
  );
};

export default Header;
