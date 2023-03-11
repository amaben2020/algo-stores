import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen mx-auto max-w-2xl flex flex-col p-6">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
