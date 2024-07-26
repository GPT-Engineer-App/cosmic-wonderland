import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/stars-bg.jpg')] bg-cover bg-fixed">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-700 bg-gray-900 bg-opacity-80 px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
