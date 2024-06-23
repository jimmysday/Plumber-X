import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Blog = ({ data }) => {
  const { title, day, month, image } = data || {};

  return (
    <article className="relative overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ">
      <LazyLoadImage
        alt={title}
        src={image}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />
      <div
        className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48"
        style={{
          background:
            "linear-gradient(360deg, #0037C4 0%, rgba(0, 55, 196, 0) 100%)",
        }}
      >
        <div className="p-4 sm:p-6">
          <div className="block text-xs text-neutral/90">
            <span className="text-5xl font-bold">{day}</span>
            <span className="figtree_font font-semibold block text-base tracking-[8px] uppercase">
              {month}
            </span>
          </div>
          <Link
            to={`/blog/details/${title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <h3 className="mt-6 figtree_font text-xl text-neutral">{title}</h3>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Blog;
