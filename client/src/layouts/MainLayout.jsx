import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import MainNavbar from "../components/navbars/MainNavbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
