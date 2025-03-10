import GradientButton from "@/components/Buttons/GradientButton";
import Image from "next/image";
import BlogCard from "./postCard";

interface Post {
  id: number;
  image: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
}

interface PopularPostsProps {
  posts: Post[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ posts }) => {
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div className="relative w-full flex flex-col pb-10">
      <p className="text-[2rem] leading-[130%] tracking-[-2%]">Popular Post</p>
      {featuredPost && (
        <div className="mt-14 w-full flex flex-col md:flex-row gap-10">
          <div className="bg-white/20 w-full h-[360px] 2xl:h-[440px] rounded-[8px] relative">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill={true}
              className="object-cover object-center rounded-[8px]"
            />
          </div>
          <div className="w-full flex flex-col justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <p className="text-[#0F6CBD]">{featuredPost.category}</p>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <p className="text-white/60">{featuredPost.date}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[3rem] leading-[130%] tracking-[-2%]">
                {featuredPost.title}
              </p>
              <p className="text-white/60">{featuredPost.excerpt}</p>
            </div>
            <div className="">
              <GradientButton
                text="Read More"
                className="px-4.5 py-2.5 text-[0.875rem] font-medium rounded-md cursor-pointer bg-linear-to-r from-[#1C76FD] from-[-7%] to-[#5721F0]"
              />
            </div>
          </div>
        </div>
      )}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
        {gridPosts.map((post) => (
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

export default PopularPosts;
