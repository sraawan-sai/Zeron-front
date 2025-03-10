import BlogCard from "./postCard";
import { FaSearch } from "react-icons/fa";

interface Post {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
}

interface MoreBlogProps {
  posts: Post[];
}

const MoreBlog: React.FC<MoreBlogProps> = ({ posts }) => {
  const blogPosts = posts.map((post) => ({ ...post, category: "Blogs" }));

  return (
    <div className="relative w-full flex flex-col py-20">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr] 2xl:grid-cols-[3fr_1fr] gap-x-6">
        <p className="text-[2rem] leading-[130%] tracking-[-2%]">
          More From Blog
        </p>
        <div className="w-full flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-[6px] border border-[#E8E7EC] bg-[#0088FF]/10 pl-10 pr-4 py-1 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-12">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            category={post.category}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreBlog;
