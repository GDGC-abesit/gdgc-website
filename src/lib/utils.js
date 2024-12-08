"use client"
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ColorizeText(word) {
  const colors = [
    "--primary-red",
    "--primary-blue",
    "--primary-green",
    "--primary-orange",
  ];

  const spans = word.split("").map((char, index) => {
    const color = colors[index % colors.length]; // Cycle through the colors
    return (
      <span
        key={index}
        className={`font-bold group-hover:text-white text-[${color}]`}
      >
        {char}
      </span>
    );
  });

  return spans;
}




export const useGlobalMouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

