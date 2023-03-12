import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen mx-auto max-w-20xl">
        <Header />
        <main className="mx-auto p-2 md:p-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
