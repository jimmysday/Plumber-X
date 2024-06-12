import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/Demo";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Contact/Contact";
import Pricing from "../Pages/Pricing/Pricing";
import Team from "../Pages/Team/Team";
import Blog from "../Pages/Blog/Blog";
import JsonData from "../Components/Shared/JsonData";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/json",
        element: <JsonData />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/details/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);

export default router;
