import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const mentorData = [
  {
    id: 1,
    name: "Devraj Rathi",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699609759/Screenshot_2023-11-10_at_3.18.31_PM_vmagbm.png",
    linkedin: "https://www.linkedin.com/in/iamdevraj/",
    instagram: "https://www.instagram.com/devraj_rathi/",
    occuparion: "Founder of GDSC_ABESIT /n SDE-2 @Oracle",
  },
  {
    id: 2,
    name: "Tarun aggarwal",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699631814/Screenshot_2023-11-10_at_9.25.23_PM_qiaiay.png",
    linkedin: "https://www.linkedin.com/in/ertarunagarwal/",
    instagram: "https://www.instagram.com/tarun_agarwal._/",
    occuparion: "Core Member @GDSC_ABESIT'20 /n SDE-2 @GoComet",
  },
  {
    id: 3,
    name: "Kumar Satyarth",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699611004/Screenshot_2023-11-10_at_3.39.39_PM_kudmko.png",
    linkedin: "https://www.linkedin.com/in/ksatyarth2/",
    instagram: "https://www.instagram.com/ksatyarth2/",
    occuparion: "Google DSC Lead '20 /n Smart Contract Developer @Timeswap",
  },
  {
    id: 4,
    name: "Hari Om Kushwaha",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699611866/Screenshot_2023-11-10_at_3.53.50_PM_yzrngx.png",
    linkedin: "https://www.linkedin.com/in/hari-om-kushwaha-6a698a192/",
    instagram: "https://www.instagram.com/hariomk_/",
    occuparion: "Core Member @GDSC_ABESIT'20 /n SDE @Betterplace",
  },
  {
    id: 5,
    name: "Adya Pandey",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699611626/adya_zory4i.jpg",
    linkedin: "https://linkedin.com/in/adya-pandey-593393170/",
    instagram: "https://www.instagram.com/_adya_pandey_/",
    occuparion: "Google DSC Lead '21 /n Civil Service",
  },
  {
    id: 6,
    name: "Pari Tomar",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699611430/pari_qouven.jpg",
    linkedin: "https://www.linkedin.com/in/tomarpari90/",
    instagram: "https://www.instagram.com/_tomarr/",
    occuparion: "Core Member @GDSC_ABESIT'21 /n Junior Blockchain Developer @Nest",
  },
  {
    id: 7,
    name: "Prakhar Sharma",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699611428/prakhar_hhpkhs.jpg",
    linkedin: "https://www.linkedin.com/in/prakhar-sharma888/",
    instagram: "https://www.instagram.com/prakhar_pandit_sharma/",
    occuparion: "Associate Blockchain Developer @Nest",
  },
  {
    id: 8,
    name: "Aryash Chaudhary",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699614960/Screenshot_2023-11-10_at_4.42.58_PM_exgjfo.png",
    linkedin: "https://www.linkedin.com/in/aryash19/",
    instagram: "https://www.instagram.com/aryash_chaudhary___/",
    occuparion: "MERN Developer",
  },
  {
    id: 9,
    name: "Shivam Kumar",
    image:
      "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1700484382/SAVE_20231116_092421_v91hfs.jpg",
    linkedin: "https://www.linkedin.com/in/shivam-kumar-1ab28a212/",
    instagram: "https://www.instagram.com/connect_shivam_here/",
    occuparion: "Google DSC Lead '22 /n Community Manager @Outdefine",
  },
  {
    id: 10,
    name: "Keshav Malik",
    image: "https://live.staticflickr.com/65535/54042770988_f4bf27949b_z.jpg",
    linkedin: "https://www.linkedin.com/in/keshavmalik/",
    instagram: "https://www.instagram.com/_keshav_malik/",
    occuparion: "Google DSC Lead '23 /n Full Stack Developer @Endeavor",
  }
];

const Page = () => {
  return (
    <>
      <div className="text-black mt-24">
        <div className="h-fit bg-blue-300 flex">
          <div className="bg-white w-full py-8 md:py-0">
            <section className="container px-6 mx-auto">
              <div>
                <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                      Our{" "}
                      <span className="text-yellow-400 tracking-wider">
                        Mentors
                      </span>
                    </h1>
                    <p className="text-base text-gray-700 md:text-lg text-center">
                      Dedicated mentors, guiding us with wisdom and support on
                      our path to success.
                    </p>
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {mentorData &&
                      mentorData.map((member, index) => {
                        return (
                          <div key={index}>
                            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-xl">
                              <Image
                                height={200}
                                width={200}
                                className="object-cover w-full sm:h-80 "
                                src={member.image}
                                alt={member.name}
                              />

                              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 text-lg text-gray-100">
                                  {member.name}
                                </p>
                                <p className="mb-4 text-xs text-gray-100">
                                  {member.occuparion}
                                </p>

                                <div className="flex items-center justify-center space-x-3">
                                  <SocialIcon
                                    url={member.linkedin}
                                    target="_blank"
                                    style={{ height: 35, width: 35 }}
                                    bgColor="black"
                                  />

                                  <SocialIcon
                                    url={member.instagram}
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
                  </div>
                </div>
                <div className="flex justify-center items-center text-black box-border lg:pb-20 md:pb-24 pb-16"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
