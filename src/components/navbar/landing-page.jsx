import Image from "next/image";
import { Button } from "@/components/ui/button";
const LandingPageNavbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-white/20">
      <div>
        <Image
          src={
            "https://gdsc-vnrvjiet.vercel.app/logo.png"
            // "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
          }
          priority
          height={50}
          width={50}
          alt="logo"
        />
      </div>
      <div className="flex gap-2 text-sm">
        <span className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-blue] hover:text-[--primary-blue]">Events</span>
        <span className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-green] hover:text-[--primary-green]">Mentors</span>
        <span className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-orange] hover:text-[--primary-orange]">Team</span>
        <span className="cursor-pointer hover:border-2 rounded-full py-1 px-2 transition-all border-[--primary-red] hover:text-[--primary-red]">Contributors</span>
      </div>
      <div>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-[--primary-blue] to-[--primary-green] group-hover:from-[--primary-orange] group-hover:to-[--primary-red] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[--primary-orange] dark:focus:ring-[--primary-red]"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Join <span className="font-bold text-[--primary-blue]">G</span>
            <span className="font-bold text-[--primary-green]">D</span>
            <span className="font-bold text-[--primary-orange]">G</span>
            <span className="font-bold text-[--primary-red]">C</span> Now
          </span>
        </button>
      </div>
    </div>
  );
};
export default LandingPageNavbar;
