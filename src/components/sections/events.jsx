import React from "react";
import Image from "next/image";
import FollowerPointerCard from "../ui/following-pointer";
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";
import { events } from "@/lib/events";

const Events = () => {
  return (
    <div className="py-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          Our <span className="text-yellow-400 tracking-wider">EVENTS</span>
        </h1>
        <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
          We conducted various events, sessions this year, some of them are...
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {events.map((blogContent) => (
          <Card
            key={blogContent.id}
            blogContent={{
              id: blogContent.id,
              author: blogContent.author,
              readMoreUrl: blogContent.readMoreUrl,
              date: blogContent.date,
              title: blogContent.title,
              description: blogContent.description,
              authorAvatar: blogContent.authorAvatar,
            }}
          />
        ))}
      </div>
    </div>
  );
};

function Card({ blogContent }) {
  return (
    <div className="w-full mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-gray-200">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              alt="image"
              src={blogContent.image}
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="flex space-x-2 items-center">
                <Link className="cursor-pointer" href={`/feedback/${blogContent.title}`}>
                  <VscFeedback />
                </Link>
                <Link
                  target="_blank"
                  href={blogContent.readMoreUrl}
                  className="relative z-10 px-3 py-2 cursor-pointer bg-black text-white font-bold rounded-xl block text-xs"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    {/* <Image alt="image"
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    /> */}
    <p>{title}</p>
  </div>
);

export default Events;
