"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Being part of GDG ABESIT was so fun! I learned so much and met awesome people.",
    name: "Nikita Singh",
    title: "Core Team Member",
  },
  {
    quote:
      "I got to build cool websites and work on real projects. Best experience ever!",
    name: "Vishnu Goswami",
    title: "Web Developer",
  },
  {
    quote:
      "I loved being part of GDG ABESIT. I worked on projects and made great friends.",
    name: "Prince Sharma",
    title: "Web Developer",
  },
  {
    quote:
      "I always wanted to learn about cybersecurity. GDG ABESIT made it possible!",
    name: "Utkarsh Aggarwal",
    title: "CyberSecurity",
  },
  {
    quote:
      "GDG ABESIT is like a second family. Everyone helps each other grow.",
    name: "Smrita Shukla",
    title: "Designer",
  },

  {
    quote:
      "Working on projects with GDG ABESIT was so much fun. I learned a lot!",
    name: "Karan Kapoor",
    title: "Open Source Contributor",
  },
  {
    quote:
      "GDG ABESIT made my college life awesome. I had fun while learning new things.",
    name: "Shweta Nair",
    title: "UI/UX Designer",
  },
];

const Thoughts = () => {
  return (
    <div className="py-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          Our{" "}
          <span className="text-yellow-400 tracking-wider">
            WHAT PEOPLE THINK
          </span>
        </h1>
        <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
          Testimonials from the people who worked with us
        </p>
      </div>

      <div className=" mt-12 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Thoughts;
