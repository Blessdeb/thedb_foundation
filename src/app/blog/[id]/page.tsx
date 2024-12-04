"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ref, get } from "firebase/database";
import { db } from "../../../../firebase-config";
import Image from "next/image";
import Button from "@/lib/components/button";
import { MainLayout } from "@/lib/components/layout";
import Link from "next/link";
import SkeletonLoader from "@/lib/components/skeleton-loader";

interface Blog {
  id: string;
  title: string;
  date: string;
  imageURL: string;
  content: { html: string };
}

export default function BlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
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
            html: data[key].content.html, // Fetch HTML string directly
          },
        }));
        setBlogs(blogArray);

        const currentBlog = blogArray.find((b) => b.id === id);
        setBlog(currentBlog || null);
      }
    };
    fetchBlogs();
  }, [id]);

  const goToPreviousBlog = () => {
    if (blogs.length > 0 && blog) {
      const currentIndex = blogs.findIndex((b) => b.id === blog.id);
      const previousIndex = (currentIndex - 1 + blogs.length) % blogs.length;
      router.push(`/blog/${blogs[previousIndex].id}`);
    }
  };

  const goToNextBlog = () => {
    if (blogs.length > 0 && blog) {
      const currentIndex = blogs.findIndex((b) => b.id === blog.id);
      const nextIndex = (currentIndex + 1) % blogs.length;
      router.push(`/blog/${blogs[nextIndex].id}`);
    }
  };

  return (
    <MainLayout>
      {blog ? (
        <div className="w-full relative min-[1161px]:pb-[8rem] pb-[18rem]">
          <div className="mt-[4rem] min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
            <Link aria-label="blog page" href="/blog">
              Go Back
            </Link>
            <div className="w-full mt-[3rem] min-[1093px]:h-[690px] h-[450px] p-3 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
              <Image
                src={blog.imageURL}
                alt="Blog cover Image"
                className="filter object-cover w-full h-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
            <div className="w-full flex flex-col items-center pt-1">
              <p className="mt-12 font-medium text-[#666666]">{blog.date}</p>
              <h1 className="mt-5 text-4xl font-extrabold">{blog.title}</h1>

              {/* Render the full HTML content */}
              <div
                className="text-base leading-[1.8] mt-12"
                dangerouslySetInnerHTML={{ __html: blog.content.html }}
              ></div>
            </div>

            {/* Navigation Buttons */}
            <div className="w-full mt-[8rem] flex justify-between">
              <Button
                className="border-2 hover:text-white hover:bg-black w-40"
                variant="outline"
                onClick={goToPreviousBlog}
              >
                PREVIOUS BLOG
              </Button>
              <Button
                className="border-2 hover:text-white hover:bg-black w-40"
                variant="outline"
                onClick={goToNextBlog}
              >
                NEXT BLOG
              </Button>
            </div>

            <div
              className="flex min-[1161px]:flex-row flex-col min-[1161px]:pr-[12rem] pr-0 
                min-[1161px]:items-center gap-40 min-[1161px]:gap-0 items-start justify-between mt-[20rem] bg-red-00 w-full"
            >
              <div>
                <h1 className="text-3xl font-extrabold">Join Our Revolution</h1>
                <p className="mt-2 w-[80%] text-lg">
                  Get the latest information on our work and be part of the
                  solution.
                </p>
                <div
                  className="grid mt-16 min-[546px]:grid-cols-[repeat(2,0.3fr)] grid-cols-[repeat(1,1fr)] 
                    grid-rows-[repeat(1,1fr)]
                    min-[546px]:grid-rows-[repeat(1,1fr)] gap-10"
                >
                  <div>
                    <object
                      aria-label="svg"
                      className="w-[51px]"
                      type="image/svg+xml"
                      data={"/svg/suitcase.svg"}
                    ></object>
                    <h1 className="mt-[15px] font-semibold text-2xl">
                      Get Involved
                    </h1>
                    <Link
                      className="group  relative"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeyts79Tw5qLhgco3hxAxjzYs1YYA2SdnB8iUJB7ka0cKAIfA/viewform"
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

                  <div className="">
                    <object
                      aria-label="svg"
                      className="w-[51px]"
                      type="image/svg+xml"
                      data={"/svg/income.svg"}
                    ></object>
                    <h1 className="mt-[15px] font-semibold text-2xl">
                      Support DBF
                    </h1>

                    <Link
                      aria-label="donate page"
                      className="group  relative"
                      href="/donate"
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

                  <div className="">
                    <object
                      aria-label="svg"
                      className="w-[51px]"
                      type="image/svg+xml"
                      data={"/svg/church.svg"}
                    ></object>
                    <h1 className="mt-[15px] font-semibold text-2xl">
                      Buy A Plate
                    </h1>

                    <Link
                      aria-label="donate page"
                      className="group  relative"
                      href="/donate"
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
                </div>
              </div>
              <div className="min-[1161px]:mt-0 mt-20">
                <div className="rounded-[19px] relative w-[317px] h-[356px] border-dashed border-2 border-[#F25353]">
                  <div
                    className="top-[-140px] min-[1161px]:top-[-90px] right-[29px] 
                      min-[1161px]:right-[-190px] bg-white p-2 w-[251px] absolute shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)]  h-[350px]"
                  >
                    <Image
                      src={"/image/image-four.png"}
                      alt="Cover Image"
                      className="filter object-cover h-full w-full"
                      width={2740}
                      height={2740}
                      quality={75}
                    />
                  </div>
                  <div
                    className="absolute bg-white p-2 min-[1161px]:bottom-[-90px] bottom-[-230px] left-[31px] 
                      min-[1161px]:left-[-90px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] w-[251px] h-[350px]"
                  >
                    <Image
                      src={"/image/image-two.png"}
                      alt="Cover Image"
                      className="filter object-cover w-full h-full"
                      width={2740}
                      height={2740}
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </MainLayout>
  );
}
