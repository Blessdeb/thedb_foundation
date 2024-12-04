// export default function Highlight() {
//   return (
//     <div className="">
//       <p className="text-sm text-[#F25353] font-semibold">Highlight</p>
//       <h1
//         className="text-3xl leading-[1.2] w-full mt-2
//         min-[1055px]:w-[370px]"
//       >
//         The Current Flooding in Borno Nigeria
//       </h1>
//       <p
//         className="mt-[15px] text-[#666666]

//             3xl:w-[550px]
//             w-full
//             min-[1055px]:w-[450px]"
//       >
//         Floods in the Sahel region are becoming more frequent and widespread.
//         Since early July, intense rainfall has affected communities along the
//         Niger-Nigeria border, triggering flooding which has damaged homes,
//         displaced families and impacted food sources and livelihoods.
//       </p>
//       <p className="mt-5 gap-3 flex items-center text-[#F25353]">
//         Learn More
//         <object
//           className="w-[24px]"
//           type="image/svg+xml"
//           data={"/svg/arrow.svg"}
//         ></object>
//       </p>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ref, get, query, limitToLast } from "firebase/database";
import { db } from "../../../../firebase-config"; // Firebase configuration file
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  imageURL: string;
  content: { html: string }; // HTML content stored in Quill format
}

export default function Highlight() {
  const [highlight, setHighlight] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlight = async () => {
      try {
        const blogsRef = ref(db, "blogs");
        const blogsQuery = query(blogsRef, limitToLast(1)); // Fetch only the most recent blog
        const snapshot = await get(blogsQuery);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const blogArray = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
            imageURL: data[key].imageURL,
            content: {
              html: String(data[key].content.html), // Ensure HTML content is a string
            },
          }));
          setHighlight(blogArray[0]); // Set the most recent blog
        } else {
          console.error("No blogs found");
        }
      } catch (error) {
        console.error("Error fetching highlight blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlight();
  }, []);

  // Function to get preview text from HTML
  const getPreviewContent = (htmlContent: string, charLimit: number) => {
    const textContent = htmlContent.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const trimmedContent = textContent.slice(0, charLimit);
    return trimmedContent.length < textContent.length
      ? trimmedContent + "..."
      : trimmedContent;
  };

  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-64 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
    </div>
  );

  if (loading) {
    return <div className="p-4">{renderSkeleton()}</div>;
  }

  return highlight ? (
    <div className="flex flex-col gap-12 min-[1055px]:gap-14 min-[1055px]:flex-row mt-[60px] sm:mt-[120px]  min-[1055px]:items-center  items-start ">
      <div className=" p-2 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white min-[1132px]:w-[593px] w-full min-[1055px]:w-[500px] h-[394px]">
        <Image
          src={highlight.imageURL}
          alt="Cover Image"
          className="object-cover w-full h-full filter 
      rounded-t-[0px]"
          width={2740}
          height={2740}
          quality={75}
        />
      </div>

      <div className="">
        <p className="text-sm text-[#F25353] font-semibold">Highlight</p>
        <h1 className="text-3xl leading-[1.2] w-full mt-2">
          {highlight.title}
        </h1>
        <div
          className="mt-[15px] text-[#666666]

//             3xl:w-[550px]
//             w-full
//             min-[1055px]:w-[450px]"
          dangerouslySetInnerHTML={{
            __html: getPreviewContent(highlight.content.html, 180),
          }}
        ></div>
        <Link
          className="group  relative"
          aria-label="blog page"
          href={`/blog/${highlight.id}`}
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
    </div>
  ) : null;
}
