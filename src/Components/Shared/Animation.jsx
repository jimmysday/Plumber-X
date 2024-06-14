// withAOS.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const withAOS = (WrappedComponent) => {
  const HOC = (props) => {
    useEffect(() => {
      AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: true,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }, []);

    useEffect(() => {
      AOS.refresh();
    });

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAOS;
