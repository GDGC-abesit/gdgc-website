import Image from "next/image";

const Sponsers = () => {
  return (
    <div className="py-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          Our <span className="text-yellow-400 tracking-wider">SPONSERS</span>
        </h1>
        <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
          People who have helped us throughout our journey constantly.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div>
            <a href="https://interledger.org/">
              <Image
              alt="image"
              src={
                "https://gdsc-abesit.vercel.app/_next/image?url=https%3A%2F%2Fmms.businesswire.com%2Fmedia%2F20210414005467%2Fen%2F871272%2F23%2Fhorz-full-color.jpg&w=640&q=75"
              }
              height={300}
              width={500}
              className="h-full w-full"
            />
            </a>
        </div>
        <div>
            <a href="https://www.newtonschool.co/">
                <Image
                alt="image"
                src={
                  "https://gdsc-abesit.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkgwk8ey5%2Fimage%2Fupload%2Fv1699637800%2FNS_dvg3st.png&w=640&q=75"
                }
                height={300}
                width={500}
                className="h-full w-full"
              />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
