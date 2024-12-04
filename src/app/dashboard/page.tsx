"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../../firebase-config";
// import NewBlog from "@/lib/components/new-blog/index";
import Link from "next/link";
// import Hold from "@/lib/components/blog-dashboard";
// import DynamicBlog from "@/lib/components/dynamic-blog";

import dynamic from "next/dynamic";

const DynamicBlog = dynamic(() => import("@/lib/components/dynamic-blog"), {
  ssr: false,
});
const Hold = dynamic(() => import("@/lib/components/blog-dashboard"), {
  ssr: false,
});
const NewBlog = dynamic(() => import("@/lib/components/new-blog/index"), {
  ssr: false,
});

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showNewBlog, setShowNewBlog] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          router.push("/admin");
        }
      });

      return () => unsubscribe();
    }
  }, [isMounted, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleNewBlogClick = () => {
    setSelectedBlogId(null);
    setShowNewBlog(true);
  };

  const handleBlogClick = async (blogId: string) => {
    setShowNewBlog(false);
    setSelectedBlogId(blogId);
  };

  if (!isMounted) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="w-full  h-fit pb-10 relative">
      {/* Top Bar */}
      <div className="w-full pr-[3rem] pl-[3rem] bg-white fixed z-50 h-[70px] shadow-md flex items-center justify-between">
        <Image
          src={"/image/db-logo.png"}
          alt="Cover Image"
          className="filter object-cover w-[120px]"
          width={2740}
          height={2740}
          quality={75}
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm px-4 py-2 bg-black text-white rounded-md hover:opacity-80"
        >
          Menu
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed z-50 left-0 top-0 h-full bg-white pl-4 pr-4 pt-[8rem] transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <Link
          className="text-sm hover:bg-[#e8ebec] rounded-md h-[40px] pl-3 flex gap-2 items-center"
          href="/dashboard"
        >
          <object
            aria-label="svg"
            className="w-[20px]"
            type="image/svg+xml"
            data={"/svg/message.svg"}
          ></object>
          <p>Blogs</p>
        </Link>
        <button
          onClick={handleLogout}
          className="text-sm hover:bg-[#e8ebec] rounded-md h-[40px] w-full pl-3 flex gap-2 items-center mt-4"
        >
          <object
            aria-label="svg"
            className="w-[20px]"
            type="image/svg+xml"
            data={"/svg/logout.svg"}
          ></object>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        className="h-full pl-4
      
      min-[924px]:pl-10 min-[1582px]:pl-16 pt-28 w-full relative"
      >
        {!selectedBlogId ? (
          !showNewBlog ? (
            <Hold
              onNewBlogClick={handleNewBlogClick}
              onBlogClick={handleBlogClick}
            />
          ) : (
            <NewBlog onBack={() => setShowNewBlog(false)} />
          )
        ) : (
          <DynamicBlog
            blogId={selectedBlogId}
            onBack={() => setSelectedBlogId(null)}
          />
        )}
      </div>
    </div>
  );
}
