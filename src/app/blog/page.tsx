"use client";

import Link from "next/link";
import { MainLayout } from "@/lib/components/layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/components/firebase-config"; // Ensure you have the correct Firebase config import

interface Blog {
  id: string;
  title: string;
  date: string;
  imageURL: string;
  content: { html: string }; // Update content to hold HTML
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = ref(db, "blogs");
        const snapshot = await get(blogsRef);
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

    fetchBlogs();
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
    Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse min-[1821px]:w-[403px] min-[1621px]:w-[380px] min-[1373px]:w-[360px] min-[1061px]:w-[330px] w-full"
      >
        <div className="w-full h-[320px] sm:h-[270px] bg-gray-200 rounded-md" />
        <div className="mt-8 h-4 w-1/2 bg-gray-200 rounded" />
        <div className="mt-2 h-4 w-3/4 bg-gray-200 rounded" />
        <div className="mt-5 h-4 w-full bg-gray-200 rounded" />
        <div className="mt-1 h-4 w-5/6 bg-gray-200 rounded" />
        <div className="mt-5 h-4 w-1/4 bg-gray-200 rounded" />
      </div>
    ));

  return (
    <MainLayout>
      <div className="w-full pb-[8rem]">
        <div className="mt-[4rem] min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="flex mt-40 flex-col">
            <div className="text-center">
              <p className="text-sm text-[#F25353] font-semibold">Our Blog</p>
              <h1 className="text-3xl leading-[1.2] mt-2">
                Read Our Latest News
              </h1>
            </div>
            <div
              className="grid 
              grid-cols-[repeat(1,3fr)] mt-16 
              min-[1085px]:grid-cols-[repeat(3,3fr)] justify-items-center items-center min-[1129px]:gap-14 min-[1085px]:gap-5 gap-20"
            >
              {loading
                ? renderSkeletons() // Show skeleton loaders when loading
                : blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="min-[1821px]:w-[403px] min-[1621px]:w-[380px] min-[1373px]:w-[360px] min-[1061px]:w-[330px] w-full"
                    >
                      <div className="min-[1061px]:w-[403px] w-full min-[1061px]:h-[189px] bg-white p-2 h-[320px] sm:h-[470px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-t-[0px]">
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

                      <Link href={`/blog/${blog.id}`}>
                        <p className="mt-5 cursor-pointer gap-3 flex items-center text-[#F25353]">
                          Learn More
                          <object
                            className="w-[24px]"
                            type="image/svg+xml"
                            data={"/svg/arrow.svg"}
                          ></object>
                        </p>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
