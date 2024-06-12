const Blog = () => {
  return (
    <article className="relative overflow-hidden  shadow transition hover:shadow-lg">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        className="absolute  object-cover"
      />

      <div className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48 ">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            <span className="text-5xl font-bold ">20</span>
            <span className="font-semibold block text-base tracking-[10px] ">
              AUG
            </span>
          </time>

          <a href="#">
            <h3 className="mt-6 text-xl text-white">
              How to Fix a Running Toilet Without Leaving Home
            </h3>
          </a>
        </div>
      </div>
    </article>
  );
};
export default Blog;
