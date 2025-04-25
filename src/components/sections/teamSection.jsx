import { Montserrat } from "next/font/google";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const montserrat = Montserrat({
  subsets: ["latin"],
  variants: ["400", "500", "600", "700", "800", "900"],
});

const teamData = [
  {
    id: 15,
    name: "Dr. Sumit Kumar",
    img: "https://live.staticflickr.com/65535/54042967550_3133e1108b_z.jpg",
    title: "Faculty Advisor",
    linkedin: "https://www.linkedin.com/in/dr-sumit-kumar-693288181/",
    github: "https://github.com/",
  },
  {
    id: 1,
    name: "Nikita Kumari Singh",
    img: "https://live.staticflickr.com/65535/54037852058_2755e63182_z.jpg",
    title: "Lead",
    linkedin: "https://www.linkedin.com/in/nikita-kumari-58455b284/",
    github: "https://github.com/Nikitakumarisingh",
  },
  {
    id: 2,
    name: "Prince Sharma",
    img: "https://live.staticflickr.com/65535/54037648148_973171e255_z.jpg",
    title: "Web Development",
    linkedin: "http://www.linkedin.com/in/prince-sharma-047973253",
    github: "https://github.com/Prince-Sharma002/",
  },
  {
    id: 3,
    name: "Vishnu Goswami",
    img: "https://live.staticflickr.com/65535/54474915695_54d229109e_z.jpg",
    title: "Web Development",
    linkedin: "https://www.linkedin.com/in/vishnu-goswami",
    github: "https://github.com/WebVishnu",
  },
  {
    id: 4,
    name: "Prithvee Ojha",
    img: "https://live.staticflickr.com/65535/54037747670_9d0cebbc2d_z.jpg",
    title: "App Development",
    linkedin: "https://www.linkedin.com/in/prithvee-ojha-0290b0267/",
    github: "https://github.com/PrithveeOjha",
  },
  {
    id: 5,
    name: "Utkarsh Aggarwal",
    img: "https://live.staticflickr.com/65535/54036432067_84faf80a02_z.jpg",
    title: "CyberSecurity",
    linkedin: "https://www.linkedin.com/in/utkarshcse26",
    github: "https://github.com/utkarshcse2026",
  },
  {
    id: 7,
    name: "Smrita Shukla",
    img: "https://live.staticflickr.com/65535/54041766082_770e8577a5_z.jpg",
    title: "Design",
    linkedin: "https://www.linkedin.com/in/smrita-shukla-7bb420243/",
    github: "https://github.com/smritashukla",
  },
  {
    id: 8,
    name: "Smita Tripathi",
    img: "https://live.staticflickr.com/65535/54037919555_d0b96721d5_z.jpg",
    title: "Design",
    linkedin: "http://www.linkedin.com/in/smita-tripathi-a23570251",
    github: "https://github.com/smitatripathi417",
  },
  {
    id: 9,
    name: "Shreyanshu Kumar",
    img: "https://live.staticflickr.com/65535/54037847780_98a1554486_z.jpg",
    title: "Outreach / PR",
    linkedin: "https://www.linkedin.com/in/shreyanshu-gupta",
    github: "https://github.com/Shreyanshu-Gupta",
  },
  {
    id: 10,
    name: "Vaibhav Sharma",
    img: "https://live.staticflickr.com/65535/54037740920_0126eb50f2_z.jpg",
    title: "Outreach / PR",
    linkedin: "https://www.linkedin.com/in/vaibhav-sharma-a6959824a/",
    github: "https://github.com/darknet2004",
  },
  {
    id: 11,
    name: "Ketan Chaudhary",
    img: "https://live.staticflickr.com/65535/54037922380_a67ee1d553_z.jpg",
    title: "Social Media",
    linkedin: "https://www.linkedin.com/in/ketan-chaudhary-aa1020295/",
    github:
      "https://www.instagram.com/ketan_ch17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: 12,
    name: "Vasundhara Pandey",
    img: "https://live.staticflickr.com/65535/54037915505_58e16ccdfa_z.jpg",
    title: "Social Media",
    linkedin: "http://www.linkedin.com/in/vasundhara-pandey-557142265",
    github: "https://www.instagram.com/vasu_pandey_2020/",
  },
  {
    id: 13,
    name: "Shreya Bharadwaj",
    img: "https://live.staticflickr.com/65535/54037808080_300b6b1e69_z.jpg",
    title: "Event Management",
    linkedin: "https://www.linkedin.com/in/shreya-bharadwaj-93834b2a5/",
    github: "https://github.com/i5hreyaa",
  },
  {
    id: 14,
    name: "Samyak Vansh",
    img: "https://live.staticflickr.com/65535/54043090560_5418bb9d70_z.jpg",
    title: "Event Management",
    linkedin: "https://www.linkedin.com/in/samyak-vansh-11aa83250/",
    github: "https://github.com/iamSamyakVansh",
  },
//   {
//     id: 16,
 //    name: "001",
 //    img: "https://i.pinimg.com/736x/2b/be/ea/2bbeead9464373ca9475bef908c0448e.jpg",
 //    title: "Frontman",
 //    github: "https://tinyurl.com/lostnow",
 //    linkedin: "https://tinyurl.com/eliminatedchild",
//   },
];

const TeamSection = () => {
  return (
    <div
      id="team"
      className={`bg-white text-black w-full text-center ${montserrat.className}`}
    >
      <div>
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
              Our <span className="text-yellow-400 tracking-wider">Team</span>
            </h1>
            <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
              The list of people who are working to make this community amazing
              & welcoming.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {teamData &&
              teamData.map((member) => {
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
                          {member.title}
                        </p>
                        <div className="flex items-center justify-center space-x-3">
                          <SocialIcon
                            url={member.linkedin}
                            target="_blank"
                            style={{ height: 35, width: 35 }}
                            bgColor="black"
                          />

                          <SocialIcon
                            url={member.github}
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
      </div>
    </div>
  );
};

export default TeamSection;
