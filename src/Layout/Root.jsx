import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Router/ScrollToTop";
import NavbarForPhone from "../Components/Shared/NavbarForPhone";
import "react-lazy-load-image-component/src/effects/blur.css";
const Root = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <NavbarForPhone />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
