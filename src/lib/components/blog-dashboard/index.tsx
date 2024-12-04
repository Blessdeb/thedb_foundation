"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import Image from "next/image";
import { db } from "../../../../firebase-config";

interface HoldProps {
  onNewBlogClick: () => void;
  onBlogClick: (blogId: string) => void;
}

interface Blog {
  id: string;
  title: string;
  date: string;
  imageURL: string;
  content: { html: string }; // Update content type to hold HTML content
}

export default function Hold({ onNewBlogClick, onBlogClick }: HoldProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = ref(db, "blogs");
        const snapshot = await get(blogsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const blogArray = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
            date: data[key].date,
            imageURL: data[key].imageURL,
            content: {
              html: String(data[key].content.html), // Ensure HTML content is a string
            },
          }));
          setBlogs(blogArray);
        } else {
          console.log("No blogs found");
        }
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to get a preview of HTML content limited to a specific character count
  const getPreviewContent = (htmlContent: string, charLimit: number) => {
    const textContent = htmlContent.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const trimmedContent = textContent.slice(0, charLimit);
    return trimmedContent.length < textContent.length
      ? trimmedContent + "..."
      : trimmedContent;
  };

  return (
    <div className="relative  h-fit">
      <button
        onClick={onNewBlogClick}
        className="text-xs absolute bg-white shadow-md w-[130px] rounded-md top-[-5rem] h-[40px] left-[.3rem]"
      >
        New blog
      </button>

      <div
        className="grid mt-16 

        grid-cols-[repeat(1,1fr)]

        min-[924px]:grid-cols-[repeat(2,1fr)]
      
      min-[1280px]:grid-cols-[repeat(3,3fr)] 
      
      min-[1582px]:grid-cols-[repeat(3,0.3fr)] 
      
      min-[832px]:gap-30 gap-40
      
      grid-rows-[repeat(1,1fr)] min-[1280px]:gap-10"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => onBlogClick(blog.id)}
            className="min-[1821px]:w-[403px] min-[1621px]:w-[380px] min-[1373px]:w-[360px] min-[1061px]:w-[330px] w-full cursor-pointer"
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
                __html: getPreviewContent(blog.content.html, 150),
              }}
            ></div>

            <p className="mt-5 gap-3 flex items-center text-[#F25353]">
              Learn More
              <object
                aria-label="svg"
                className="w-[24px]"
                type="image/svg+xml"
                data={"/svg/arrow.svg"}
              ></object>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
