"use client";

// import { useEffect, useRef, useState } from "react";
import { BlogData } from "@/public/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from "framer-motion"; // Import Framer Motion

const Blog = () => {
  // const postsPerPage = 3;
  // const [currentPage, setCurrentPage] = useState(0);
  // const totalPages = Math.ceil(BlogData.length / postsPerPage);
  // const [isHovered, setIsHovered] = useState(false);
  // const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // const [animateBlogs, setAnimateBlogs] = useState(true);
  // const fadeDuration = 500;

  // const startIndex = currentPage * postsPerPage;
  // const visibleBlogs = BlogData.slice(startIndex, startIndex + postsPerPage);

  // const handlePageChange = (page: number) => {
  //   if (page === currentPage) return;
  //   setAnimateBlogs(false);
  //   setTimeout(() => {
  //     setCurrentPage(page);
  //     setAnimateBlogs(true);
  //   }, fadeDuration);
  // };

  // useEffect(() => {
  //   const startInterval = () => {
  //     if (intervalRef.current === null) {
  //       intervalRef.current = setInterval(() => {
  //         setAnimateBlogs(false);
  //         setTimeout(() => {
  //           setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  //           setAnimateBlogs(true);
  //         }, fadeDuration);
  //       }, 5000);
  //     }
  //   };

  //   const stopInterval = () => {
  //     if (intervalRef.current !== null) {
  //       clearInterval(intervalRef.current);
  //       intervalRef.current = null;
  //     }
  //   };

  //   if (!isHovered) {
  //     startInterval();
  //   } else {
  //     stopInterval();
  //   }
  //   return () => stopInterval();
  // }, [isHovered, totalPages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and move up
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center justify-center container mx-auto gap-12 px-4 py-20"
    >
      <div className="flex flex-col text-center items-center justify-center gap-4">
        <p className="cursor-default text-[#6100FF] hover:text-[#fff] text-[2.875rem] leading-[52px]">
          Stay Informed with Zeron
        </p>
        <div className="max-w-[600px]">
          <p className="text-[1.125rem] text-[#A3A3A3]">
            Get expert insights on cyber risk, compliance, and security trends.
            Stay ahead in the evolving digital landscape.
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row gap-3 transition-opacity duration-500
          `}
        // ${ animateBlogs ? "opacity-100" : "opacity-0"}
      >
        {BlogData.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Individual fade-up for each blog card
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col gap-6.5 rounded-md bg-[#19133F] max-w-[280px]"
          >
            <div className="w-full h-[150px] relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover object-center rounded-t-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col px-4 pb-7.5">
              <p className="bg-gradient-to-r from-[#5BB0FF] to-[#6F58FF] bg-clip-text text-transparent text-[0.75rem]">
                Blog
              </p>
              <p className="leading-[20px]">{blog.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div className="flex gap-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`cursor-pointer w-8 h-[2px] rounded-full transition-all duration-300 ${
              index === currentPage ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]/25"
            }`}
          />
        ))}
      </div> */}
      <Link href="" className="group">
        <div className="flex items-center gap-1">
          <p className="group-hover:underline">Learn more</p>
          <div>
            <MdOutlineArrowForward size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Blog;
