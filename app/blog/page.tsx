import CustomSection from "@/components/Layout/CustomSection";
import PopularPosts from "./components/popular";
import MoreBlog from "./components/moreBlog";
import data from "@/public/data/posts.json";
import VideoPost from "./components/video";
import BlogFooterSection from "./components/FooterSection";

export default async function Blogs() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-40 md:pt-32">
      <CustomSection className="flex-col px-4 md:px-25">
        <PopularPosts posts={data.popular} />
        <MoreBlog posts={data.more} />
        <VideoPost />
      </CustomSection>
      <BlogFooterSection />
    </div>
  );
}
