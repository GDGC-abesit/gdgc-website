"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { ContributorData } from "@/lib/contributors";
import Image from "next/image";


function ContributorsSection() {

const [LoadMoreValue, setLoadMoreValue] = useState(8);

  return (
    <div className="bg-white dark:bg-neutral-950 w-full py-8 md:py-0">
     
      <section className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
                Our awesome{" "}
                <span className="text-yellow-400 tracking-wider">Contributors</span>
              </h1>
              <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
                The list of people who&apos;ve successfully contributed with this
                hands-on workshop. Get your name on GDSC&apos;s website too!
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {ContributorData &&
                ContributorData.slice(0, LoadMoreValue).map((member) => {
                  return (
                    <div key={member.id}>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Image
                        width={200}
                        height={200}
                          className="object-cover w-full sm:h-80"
                          src={member.img}
                          alt={member.name}
                        />

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {member.name}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {member.role}
                          </p>
                          {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                            {member.desc}
                          </p> */}

                          <div className="flex items-center justify-center space-x-3">
                            <SocialIcon
                              url={member.social1}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />

                            <SocialIcon
                              url={member.social2}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-black box-border lg:pb-20 md:pb-24 pb-16">
            <button
              className={`mb-2 font-semibold leading-5 text-blue-500 border-2 border-blue-100 w-fit p-3 rounded-md hover:bg-gray-500 hover:text-white transition-colors duration-300 ease-in-out 
              ${LoadMoreValue === 40 && ` opacity-50 cursor-not-allowed`}`}
              onClick={() => {
                if (LoadMoreValue < 40) {
                  setLoadMoreValue(LoadMoreValue + 8);
                }
              }}
            >
              Explore more contributors
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default ContributorsSection;