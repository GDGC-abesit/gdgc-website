"use client";
import Image from "next/image";
import { ColorizeText } from "@/lib/utils";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
const LandingPageNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col justify-between items-center pe-1 ps-6 py-2 bg-opacity-20 backdrop-blur-md ${
        !open ? "rounded-full" : "rounded-xl"
      } border border-black/20 fixed top-4 z-50 w-[calc(100vw-3em)] left-4 `}
    >
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Image
            alt="image"
            src={"https://gdsc-vnrvjiet.vercel.app/logo.png"}
            priority
            height={50}
            width={50}
          />
        </Link>

        <div className=" gap-2 text-sm md:relative md:flex hidden absolute">
          <Link
            href={"/events"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-blue] hover:text-[--primary-blue]"
          >
            Events
          </Link>
          <Link
            href={"/mentors"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-green] hover:text-[--primary-green]"
          >
            Mentors
          </Link>
          <Link
            href={"/team"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-orange] hover:text-[--primary-orange]"
          >
            Team
          </Link>
          <Link
            href={"/contributors"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-red] hover:text-[--primary-red]"
          >
            Contributors
          </Link>
          <Link
            href={"/feedback/0"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-red] hover:text-[--primary-red]"
          >
            Feedback
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="md:absolute md:hidden inline-flex relative items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-black rounded-full group bg-gradient-to-br from-[--primary-blue] to-[--primary-green] group-hover:from-[--primary-orange] group-hover:to-[--primary-red] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[--primary-orange] dark:focus:ring-[--primary-red]"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              {!open && <MenuIcon size={15} />}
              {open && <>&#x2715;</>}
            </span>
          </button>
          <button className="md:relative md:inline-flex hidden absolute  items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-black rounded-full group bg-gradient-to-br from-[--primary-blue] to-[--primary-green] group-hover:from-[--primary-orange] group-hover:to-[--primary-red] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[--primary-orange] dark:focus:ring-[--primary-red]">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              Join {ColorizeText("GDGC")} Now
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="gap-2 text-sm flex flex-col w-full mt-2">
          <Link
            href={"/events"}
            className="cursor-pointer w-full hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-blue] hover:text-[--primary-blue]"
          >
            Events
          </Link>
          <Link
            href={"/mentors"}
            className="cursor-pointer w-full hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-green] hover:text-[--primary-green]"
          >
            Mentors
          </Link>
          <Link
            href={"/team"}
            className="cursor-pointer w-full hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-orange] hover:text-[--primary-orange]"
          >
            Team
          </Link>
          <Link
            href={"/contributors"}
            className="cursor-pointer w-full hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-red] hover:text-[--primary-red]"
          >
            Contributors
          </Link>
          <Link
            href={"/feedback/0"}
            className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-red] hover:text-[--primary-red]"
          >
            Feedback
          </Link>
        </div>
      )}
    </div>
  );
};
export default LandingPageNavbar;
