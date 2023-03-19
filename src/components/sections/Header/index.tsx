import Cart from "@/components/elements/Cart";
import Notification from "@/components/elements/Notification";
import Search from "@/components/elements/Search";
import Logo from "@/components/elements/logo";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useAppSelector } from "~/app/hooks/hooks";
import { RootState } from "~/app/redux/store/store";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const user = useAppSelector((state: RootState) => state.user.user);
  const cart = useAppSelector((state: RootState) => state.cart.items);

  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    switch (currentTheme) {
      case "dark":
        return (
          <SunIcon
            className="w-10 h-10 text-yellow-500"
            role="button"
            onClick={() => setTheme("light")}
          />
        );

      default:
        return (
          <MoonIcon
            className="w-10 h-10 text-gray-900"
            role="button"
            onClick={() => setTheme("dark")}
          />
        );
    }
  };

  return (
    <header className="relative shadow-sm h-15 dark:border-gray-700">
      <div className="flex items-center justify-between px-1 py-4 sm:px-2">
        <Logo />
        <Search />

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="mr-3">Account</p>
        </div>

        <button className="flex" onClick={() => setIsOpen((p) => !p)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="relative ml-3">Cart </p>
        </button>
        {isOpen && cart.length > 0 ? (
          <div>
            <Cart cartItems={cart} />
          </div>
        ) : (
          <p> </p>
        )}

        <button
          className="relative"
          onClick={() => setIsNotificationOpen((p) => !p)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <div className="absolute p-0.5 bg-red-600 w-6  rounded-full -right-2 -top-5">
            3
          </div>
        </button>

        {isNotificationOpen && <Notification />}

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
