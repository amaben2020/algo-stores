import Search from "@/components/elements/Search";
import Logo from "@/components/elements/logo";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

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
    <header className="shadow-sm h-15 dark:border-gray-700">
      <div className="flex items-center justify-between px-1 py-4 sm:px-2">
        <Logo />
        <Search />
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
