import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="pt-[10vh] px-2 sm:px-20 min-h-[90vh]">
      <h2 className="w-full h-[10vh] text-3xl sm:text-3xl md:text-4xl ">
        About:
      </h2>
      <div className="flex justify-between flex-wrap min-h-[60vh] gap-8">
        <div className=" w-[100%] sm:w-[40%] flex items-center justify-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi there! I'm Hassan Adawieh, a passionate full stack web and
              mobile developer with extensive experience in building
              user-friendly applications and establishing robust API
              relationships using Laravel. My expertise spans across various
              technologies including MERN stack (MongoDB, Express.js, React.js,
              Node.js), Python, PHP, Prisma, Next.js, and React Native.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I have a knack for clean code and problem-solving, ensuring
              efficient and maintainable solutions. With experience working
              remotely and on-site, I'm comfortable both working independently
              and as part of a team. Whether it's crafting elegant front-end
              interfaces or architecting scalable back-end systems, I thrive on
              bringing ideas to life through code.
            </p>
          </div>
        </div>
        <Image
          src="/profile-image-personal.jpeg"
          width={500}
          height={150}
          className="rounded-[2rem]"
        ></Image>
        {/* <div className=" w-[100%] sm:w-[40%] flex items-center justify-center border-gray-900 ">
          <div className="bg-slate-500 w-[20rem] h-[20rem]"></div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
