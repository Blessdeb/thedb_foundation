"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../../../../firebase-config"; // Firebase configuration file
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  imageURL: string;
  content: { html: string }; // HTML content stored in Quill format
}

export default function ImpactStories() {
  const [impactBlogs, setImpactBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImpactBlogs = async () => {
      try {
        const blogsRef = ref(db, "blogs");
        const blogsQuery = query(
          blogsRef,
          orderByChild("blogType"),
          equalTo("Impact Blog")
        );
        const snapshot = await get(blogsQuery);

        if (snapshot.exists()) {
          const blogs: Blog[] = [];
          snapshot.forEach((childSnapshot) => {
            const blogData = childSnapshot.val();
            blogs.push({
              id: childSnapshot.key!,
              title: blogData.title,
              imageURL: blogData.imageURL,
              content: { html: blogData.content.html },
            });
          });
          setImpactBlogs(blogs);
        } else {
          console.log("No Impact Blogs found.");
        }
      } catch (error) {
        console.error("Error fetching Impact Blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImpactBlogs();
  }, []);

  // Skeleton Loader Component
  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-[306px] w-full bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 w-3/4 bg-gray-400 rounded mb-2"></div>
      <div className="h-6 w-1/2 bg-gray-400 rounded mb-4"></div>
      <div className="h-4 w-2/3 bg-gray-400 rounded"></div>
    </div>
  );

  return (
    <div className="flex pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row bg-[rgba(62,77,98,0.11)] gap-10">
      {/* Show skeleton loader if blogs are still being fetched */}
      {loading ? (
        <div className="w-full">{renderSkeleton()}</div>
      ) : (
        // Render each Impact Blog dynamically
        impactBlogs.map((blog) => (
          <div
            key={blog.id}
            className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]"
          >
            <Image
              src={blog.imageURL || "/image/default-image.png"} // Fallback image if no image URL
              alt="Cover Image"
              className="filter object-cover shrink-0 w-full h-full"
              width={6740}
              height={6740}
              quality={100}
            />
          </div>
        ))
      )}

      <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
        {/* Render each Impact Blog dynamically */}
        {impactBlogs.map((blog) => (
          <div key={blog.id}>
            <h1 className="text-[22px] w-full min-[1041px]:w-[360px] font-semibold">
              {blog.title || "Untitled Blog"}
            </h1>
            <p className="mt-4 text-[#666666] w-full text-[14px]">
              {blog.content.html
                ? blog.content.html.replace(/<[^>]+>/g, "").slice(0, 270)
                : "No content available for this blog."}
              ...
            </p>
            <Link
              aria-label="blog page"
              className="group  relative"
              href={`/blog/${blog.id}`}
            >
              <p className="mt-[15px] flex items-center text-[#F25353]">
                <span className="w-[0px] block transition-all  duration-[0.1s] group-hover:w-[24px]"></span>
                <object
                  aria-label="svg"
                  className="transition-all pointer-events-none absolute  duration-[0.1s] ease-[ease-in-out]  w-[24px] group-hover:translate-x-[0px]
              group-hover:opacity-[1] opacity-[0] translate-x-[-15px] h-[24px]"
                  type="image/svg+xml"
                  data={"/svg/arrow.svg"}
                ></object>
                <span className="group-hover:ml-[1rem] block"> Learn More</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
