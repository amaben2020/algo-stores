import LoginButton from "@/components/elements/Button";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen mx-auto max-w-20xl">
        <Header />
        <LoginButton />
        <main className="p-2 mx-auto min-h-[65vh] md:p-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
