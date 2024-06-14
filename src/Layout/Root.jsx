import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Router/ScrollToTop";
import NavbarForPhone from "../Components/NavbarForPhone";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <NavbarForPhone />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
