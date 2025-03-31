"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";

interface BlogPost {
  title: string;
  image: {
    url: string;
  };
  content: string;
  category: {
    name: string;
  };
  excerpt: string;
  currentDate: string;
}

const BlogDetails = () => {
  const { slug } = useParams(); // Correctly get the blog ID

  const [blogData, setBlogData] = useState<BlogPost | null>(null);
  //const API_URL = "http://localhost:1337"; //local api
  const API_URL = "https://zeron-backend.onrender.com"  //render api


  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://zeron-backend.onrender.com/api/blogcards/${slug}?populate=category&populate=image`
        );
        const result = await response.json();
        setBlogData(result.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    if (slug) fetchBlogDetails();
  }, [slug]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <div className="relative w-full flex  pt-52">
    <CustomSection className="flex-col px-4 md:px-25">
      <div className="w-full flex items-center gap-2 font-medium">
        <p className="text-[#0F6CBD]">{blogData.category.name}</p>
        <div className="w-1 h-1 rounded-full bg-white"></div>
        <p className="text-white/60">3 Min Read</p>
        <div className="w-1 h-1 rounded-full bg-white"></div>
        <p className="text-white/60">{blogData.currentDate}</p>
      </div>
      <div className="flex flex-col w-full h-auto mt-7">
        <h1 className="text-7xl">{blogData.title}</h1>
        <p className="text-3xl pt-8 pb-8 text-white/60">{blogData.excerpt}</p>
        <div className="p-8 relative w-full h-[400px]">
          <Image
            src={
              blogData.image.url.startsWith("https")
                ? blogData.image.url
                : `${API_URL}${blogData.image.url}`
            }
            alt={blogData.title}
            className="object-cover object-center rounded-[8px]"
            fill
            unoptimized
          />
        </div>
      </div>
    </CustomSection>
  </div>
  );
};

export default BlogDetails;
