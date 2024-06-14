import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  // Destructuring props
  const { title, id, day, month } = data || {};

  return (
    <article className="relative overflow-hidden shadow transition hover:shadow-lg">
      {/* Background image covering the entire article */}
      <img
        alt=""
        src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b12d631cbc6b02fe6de59_A%20man%20is%20working-p-500.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48"
        style={{
          background:
            "linear-gradient(360deg, #0037C4 0%, rgba(0, 55, 196, 0) 100%)",
        }}
      >
        <div className="p-4 sm:p-6">
          {/* Date section */}
          <div className="block text-xs text-neutral/90">
            <span className="text-5xl font-bold">{day}</span>
            <span className="figtree_font font-semibold block text-base tracking-[8px] uppercase">
              {month}
            </span>
          </div>
          <Link to={`/blog/details/${id}`}>
            {/* Blog title */}
            <h3 className="mt-6 figtree_font text-xl text-neutral">{title}</h3>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Blog;
