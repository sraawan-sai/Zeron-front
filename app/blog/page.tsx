"use client";

import CustomSection from "@/components/Layout/CustomSection";
import PopularPosts from "./components/popular";
import MoreBlog from "./components/moreBlog";
//import data from "@/public/data/posts.json";
import VideoPost from "./components/video";
import BlogFooterSection from "./components/FooterSection";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [popularPosts, setPopularPosts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const fetchData = async () => {
    try {
      const popularResponse = await fetch(
        "http://localhost:1337/api/blogcards?filters[isPopular][$eq]=true&populate=image&populate=category"
      );
      const categoryResponse = await fetch(
        "http://localhost:1337/api/blogcards?filters[category][name][$eq]=blog&populate=image&populate=category"
      );

      const popularResult = await popularResponse.json();
      const categoryResult = await categoryResponse.json();

      setPopularPosts(popularResult?.data || []);
      setCategoryData(categoryResult?.data || []);
      console.log(categoryResult?.data, "categoryData"); // Log directly here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-40 md:pt-32">
      <CustomSection className="flex-col px-4 md:px-25">
        <PopularPosts posts={popularPosts} />
        <MoreBlog posts={categoryData} />
        <VideoPost />
      </CustomSection>
      <BlogFooterSection />
    </div>
  );
}
