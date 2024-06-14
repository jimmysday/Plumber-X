import React from "react";
import BlogDetail from "../../Components/Blogs/BlogDetail";
import WhyChooseUs from "../../Components/Shared/WhyChooseUs";
import Location from "../../Components/Shared/Location";
const BlogDetails = () => {
  return (
    <div>
      {/* components  */}
      <BlogDetail />
      <WhyChooseUs />
      <Location />
    </div>
  );
};
export default BlogDetails;
