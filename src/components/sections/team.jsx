"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ColorizeText } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Team() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* <div className="mb-6">
        <h1 className="font text-3xl font-bold text-[--primary-orange]">
          TEAM
        </h1>
        <p className="font text-xl text-gray-500 font-light">
          The list of people who are working to make this community amazing &
          welcoming.
        </p>
      </div> */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  alt="image"
                  priority
                  width={300}
                  height={300}
                  src={active.src || ""}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover  object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  src={card.src}
                  className="h-60 w-full  rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Dr. Sumit Kumar",
    description: "Faculty Advisor",
    src: "https://live.staticflickr.com/65535/54042967550_3133e1108b_z.jpg",
    content: () => {
      return (
        <>
          <p>Faculty Advisor</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/dr-sumit-kumar-693288181/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Nikita Kumari Singh",
    description: "Lead",
    src: "https://live.staticflickr.com/65535/54037852058_2755e63182_z.jpg",
    content: () => {
      return (
        <>
          <p>Lead</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/nikita-kumari-58455b284/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/Nikitakumarisingh"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Prince Sharma",
    description: "Web Development",
    src: "https://live.staticflickr.com/65535/54037648148_973171e255_z.jpg",
    content: () => {
      return (
        <>
          <p>Web Development</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"http://www.linkedin.com/in/prince-sharma-047973253"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/Prince-Sharma002/"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Vishnu Goswami",
    description: "Web Dev",
    src: "https://live.staticflickr.com/65535/54037306066_16ba1b8cd7_z.jpg",
    content: () => {
      return (
        <>
          <p>Web Development</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/vishnu-goswami"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/Chiragramesh25"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Prithvee Ojha",
    description: "App Development",
    src: "https://live.staticflickr.com/65535/54037747670_9d0cebbc2d_z.jpg",
    content: () => {
      return (
        <>
          <p>App Development</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/prithvee-ojha-0290b0267/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/PrithveeOjha"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Utkarsh Aggarwal",
    description: "CyberSecurity",
    src: "https://live.staticflickr.com/65535/54036432067_84faf80a02_z.jpg",
    content: () => {
      return (
        <>
          <p>CyberSecurity</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/utkarshcse26"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/utkarshcse2026"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Aditya Srivastava",
    description: "Web 3 / Cloud",
    src: "https://live.staticflickr.com/65535/54037409991_b9e6a75cfc_z.jpg",
    content: () => {
      return (
        <>
          <p>Web 3 / Cloud</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/aditya-srivastava-bb5008251"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/IronicDeGawd"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Smrita Shukla",
    description: "Design",
    src: "https://live.staticflickr.com/65535/54041766082_770e8577a5_z.jpg",
    content: () => {
      return (
        <>
          <p>Design</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/smrita-shukla-7bb420243/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/smritashukla"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Smita Tripathi",
    description: "Design",
    src: "https://live.staticflickr.com/65535/54037919555_d0b96721d5_z.jpg",
    content: () => {
      return (
        <>
          <p>Design</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"http://www.linkedin.com/in/smita-tripathi-a23570251"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/smitatripathi417"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Shreyanshu Kumar",
    description: "Outreach / PR",
    src: "https://live.staticflickr.com/65535/54037847780_98a1554486_z.jpg",
    content: () => {
      return (
        <>
          <p>Outreach / PR</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/shreyanshu-gupta"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/Shreyanshu-Gupta"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Vaibhav Sharma",
    description: "Outreach / PR",
    src: "https://live.staticflickr.com/65535/54037740920_0126eb50f2_z.jpg",
    content: () => {
      return (
        <>
          <p>Outreach / PR</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/vaibhav-sharma-a6959824a/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/darknet2004"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Ketan Chaudhary",
    description: "Social Media",
    src: "https://live.staticflickr.com/65535/54037922380_a67ee1d553_z.jpg",
    content: () => {
      return (
        <>
          <p>Social Media</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/ketan-chaudhary-aa1020295/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/ketan_ch17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Vasundhara Pandey",
    description: "Social Media",
    src: "https://live.staticflickr.com/65535/54037915505_58e16ccdfa_z.jpg",
    content: () => {
      return (
        <>
          <p>Social Media</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"http://www.linkedin.com/in/vasundhara-pandey-557142265"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/vasu_pandey_2020/"}
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Shreya Bharadwaj",
    description: "Event Management",
    src: "https://live.staticflickr.com/65535/54037808080_300b6b1e69_z.jpg",
    content: () => {
      return (
        <>
          <p>Event Management</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/shreya-bharadwaj-93834b2a5/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/i5hreyaa"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
  {
    title: "Samyak Vansh",
    description: "Event Management",
    src: "https://live.staticflickr.com/65535/54043090560_5418bb9d70_z.jpg",
    content: () => {
      return (
        <>
          <p>Event Management</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/samyak-vansh-11aa83250/"}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link target="_blank" href={"https://github.com/iamSamyakVansh"}>
              <FaGithub size={20} />
            </Link>
          </div>
        </>
      );
    },
  },
];

export default Team;
