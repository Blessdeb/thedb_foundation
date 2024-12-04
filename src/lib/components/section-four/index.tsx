"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ref, get, query, limitToLast } from "firebase/database";
import { db } from "../../../../firebase-config";

interface Blog {
  id: string;
  title: string;
  date: string;
  imageURL: string;
  content: { html: string }; // Update content to hold HTML
}

export default function SectionFour() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const blogsRef = ref(db, "blogs");
        const blogsQuery = query(blogsRef, limitToLast(3)); // Fetch last three blogs
        const snapshot = await get(blogsQuery);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const blogArray = Object.keys(data)
            .map((key) => ({
              id: key,
              title: data[key].title,
              date: data[key].date,
              imageURL: data[key].imageURL,
              content: {
                html: String(data[key].content.html), // Ensure HTML content is a string
              },
            }))
            .reverse(); // Newest blogs first

          setBlogs(blogArray);
        } else {
          console.log("No blogs found");
        }
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchRecentBlogs();
  }, []);

  // Function to get preview text from HTML
  const getPreviewContent = (htmlContent: string, charLimit: number) => {
    const textContent = htmlContent.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const trimmedContent = textContent.slice(0, charLimit);
    return trimmedContent.length < textContent.length
      ? trimmedContent + "..."
      : trimmedContent;
  };

  // Skeleton Loader
  const renderSkeletons = () =>
    Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse min-[1821px]:w-[403px] min-[1621px]:w-[380px] min-[1373px]:w-[360px] min-[1061px]:w-[330px] w-full"
      >
        <div className="w-full h-[220px] sm:h-[270px] bg-gray-200 rounded-md" />
        <div className="mt-8 h-4 w-1/2 bg-gray-200 rounded" />
        <div className="mt-2 h-4 w-3/4 bg-gray-200 rounded" />
        <div className="mt-5 h-4 w-full bg-gray-200 rounded" />
        <div className="mt-1 h-4 w-5/6 bg-gray-200 rounded" />
        <div className="mt-5 h-4 w-1/4 bg-gray-200 rounded" />
      </div>
    ));

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <p className="text-sm text-[#F25353] font-semibold">Our Blog</p>
        <h1 className="text-3xl leading-[1.2] mt-2">Read Our Latest News</h1>
      </div>
      <div className="flex min-[1061px]:flex-row flex-col min-[1061px]:gap-0 gap-32 items-center justify-between mt-20 sm:mt-28">
        {loading
          ? renderSkeletons() // Show skeleton loaders when loading
          : blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-[1821px]:w-[403px] min-[1621px]:w-[380px] min-[1373px]:w-[360px] min-[1061px]:w-[330px] w-full"
              >
                <div
                  className="min-[1653px]:w-[403px]
                
min-[1561px]:w-[372px]

min-[1105px]:w-[342px]

min-[1061px]:w-[332px]

w-full
                
                min-[1061px]:h-[189px] bg-white p-2 h-[320px] sm:h-[470px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-t-[0px]"
                >
                  <Image
                    src={blog.imageURL}
                    alt="Cover Image"
                    className="object-cover w-full h-full filter"
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>
                <p className="mt-8 text-sm">{blog.date}</p>
                <h1 className="mt-2 text-2xl w-full">{blog.title}</h1>

                {/* Render limited HTML content */}
                <div
                  className="mt-5 text-[#666666]"
                  dangerouslySetInnerHTML={{
                    __html: getPreviewContent(blog.content.html, 100),
                  }}
                ></div>

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
                    <span className="group-hover:ml-[1rem] block">
                      {" "}
                      Learn More
                    </span>
                  </p>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
