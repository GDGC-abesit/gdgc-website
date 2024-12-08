"use client";
import Link from "next/link";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
const Footer = () => {
  const placeholders = [
    "What projects does GDGC offer?",
    "How does GDGC support learning?",
    "Are certifications available in GDGC?",
    "How can beginners join GDGC?",
    "Does GDGC provide networking opportunities?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
      <h2 className=" sm:mb-7 mb-5 text-2xl text-center sm:text-5xl dark:text-white text-black">
        Do you want to ask anything?
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      <div className="flex items-center mt-5">
        <span className="me-5 font-bold">Follow Us:</span>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href={"https://x.com/gdscabesit"}
            className="bg-[--primary-blue] flex items-center text-sm py-1 hover:bg-[--secondary-blue] transition-all text-white rounded-full px-2 cursor-pointer"
          >
            <span className="md:block hidden">Twitter</span>
            <TwitterLogoIcon className="md:hidden block" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/gdgcabesit"}
            className="bg-[--primary-green] flex items-center text-sm py-1 hover:bg-[--secondary-green] transition-all text-white rounded-full px-2 cursor-pointer"
          >
            <span className="md:block hidden">Instagram</span>
            <InstagramLogoIcon className="md:hidden block" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/company/dscabesit/"}
            className="bg-[--primary-orange] flex items-center  text-sm py-1 hover:bg-[--secondary-orange] transition-all text-white rounded-full px-2 cursor-pointer"
          >
            <span className="md:block hidden">Linkedin</span>
            <LinkedInLogoIcon className="md:hidden block" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.abesit.in"}
            className="bg-[--primary-red] flex items-center  text-sm py-1 hover:bg-[--secondary-red] transition-all text-white rounded-full px-2 cursor-pointer"
          >
            <span className="md:block hidden">College Website</span>
            <Globe size={20} className="md:hidden block" />
          </Link>
          <Link
            target="_blank"
            href={"https://chat.whatsapp.com/JAvuGSteiGD0SotHdrZPTn"}
            className="bg-[--primary-green] flex items-center  text-sm py-1 hover:bg-[--secondary-green] transition-all text-white rounded-full px-2 cursor-pointer"
          >
            <span className="md:block hidden">Whatsapp</span>
            <IconBrandWhatsapp size={20} className="md:hidden block" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
