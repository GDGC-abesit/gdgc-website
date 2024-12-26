"use client";
import { Badge } from "@/components/ui/badge";
import { BackgroundLines } from "../ui/background-lines";
import { useEffect, useRef, useState, useMemo } from "react";
import { AnimatedTooltip } from "../ui/team";

const Hero = () => {
  // Use `useMemo` to ensure `wordData` is stable across renders
  const wordData = useMemo(
    () => [
      "Welcome to",
      " स्वागत है",
      "خوش آمدید",
      "स्वागत आहे",
      "স্বাগত মানা",
      "ਸੁਆਗਤ ਹੈ",
    ],
    []
  );

  const [currWord, setCurrWord] = useState(wordData[0]);
  const index = useRef(0);

  useEffect(() => {
    let interval = null;

    const startAnimation = () => {
      interval = setInterval(() => {
        index.current = (index.current + 1) % wordData.length;
        setCurrWord(wordData[index.current]);

        if (index.current === wordData.length - 1) {
          setTimeout(() => {
            setCurrWord(wordData[0]);
            index.current = 0;
          }, 800);
        }
      }, 800);
    };

    startAnimation();

    return () => clearInterval(interval);
  }, [wordData]); // `wordData` is now stable

  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col items-center mt-12">
        <Badge
          className={
            "bg-white mb-2 text-black rounded-full cursor-pointer hover:bg-gray-50 shadow-none border border-gray-200"
          }
        >
          450+ Students Joined
        </Badge>
        <h1 className="md:text-6xl text-3xl font-bold">{currWord}</h1>
        <h1 className="md:text-8xl font-bold text-5xl">
          <span className="font-bold group-hover:text-white text-[--primary-red]">
            G
          </span>
          <span className="font-bold group-hover:text-white text-[--primary-blue]">
            D
          </span>
          <span className="font-bold group-hover:text-white text-[--primary-green]">
            G
          </span>
          <span className="font-bold group-hover:text-white text-[--primary-orange]">
            C
          </span>
          <span>&nbsp;ABESIT</span>
        </h1>
        <p className="max-w-[450px] font-light text-center text-gray-400 leading-5 text-sm px-2">
          Our goal is to build an ecosystem of developers in and around the
          campus, and have fun while we&apos;re all at it!
        </p>
        <div className="flex flex-row items-center justify-center mt-5 w-full">
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: "Nikita Kumari Singh",
                designation: "Lead",
                image:
                  "https://live.staticflickr.com/65535/54037852058_2755e63182_z.jpg",
              },
              {
                id: 2,
                name: "Prince Sharma",
                designation: "Web Development",
                image:
                  "https://live.staticflickr.com/65535/54037648148_973171e255_z.jpg",
              },
              {
                id: 3,
                name: "Vishnu Goswami",
                designation: "Web Development",
                image:
                  "https://live.staticflickr.com/65535/54037306066_16ba1b8cd7_z.jpg",
              },
              {
                id: 4,
                name: "Prithvee Ojha",
                designation: "App Development",
                image:
                  "https://live.staticflickr.com/65535/54037747670_9d0cebbc2d_z.jpg",
              },
              {
                id: 5,
                name: "Utkarsh Aggarwal",
                designation: "CyberSecurity",
                image:
                  "https://live.staticflickr.com/65535/54036432067_84faf80a02_z.jpg",
              },
              {
                id: 7,
                name: "Smrita Shukla",
                designation: "Design",
                image:
                  "https://live.staticflickr.com/65535/54041766082_770e8577a5_z.jpg",
              },
              {
                id: 8,
                name: "Smita Tripathi",
                designation: "Design",
                image:
                  "https://live.staticflickr.com/65535/54037919555_d0b96721d5_z.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
