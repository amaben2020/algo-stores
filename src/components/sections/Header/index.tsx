import Logo from "@/components/elements/logo";

const Header = () => {
  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
      </div>
    </header>
  );
};

export default Header;
