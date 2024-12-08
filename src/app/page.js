import React from "react";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import Sponsers from "@/components/sections/sponsers";
import Thoughts from "@/components/sections/thoughts";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full bg-transparent absolute bg-grid-gray-500/[0.2] -z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <Hero />
      <div className="bg-white md:px-24 px-5">
        <Sponsers />
        <Events />
        <Thoughts />
      </div>
      <hr className="h-2 bg-gradient-to-br from-[--primary-blue] to-[--primary-green] w-full" />
    </div>
  );
}
