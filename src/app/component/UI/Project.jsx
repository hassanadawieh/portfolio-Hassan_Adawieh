import React from "react";
import Image from "next/image";

const Project = ({ project }) => {
  return (
    <div className="relative group">
      <Image
        src={project.image}
        width={800}
        height={400}
        className="object-cover rounded-md cursor-pointer"
        alt="about-image"
      />
      <div className="absolute inset-0 bg-black opacity-0 rounded-md group-hover:opacity-90 transition-opacity flex flex-col items-center justify-center cursor-pointer">
        <h2 className="text-white text-[1.8rem] sm:text-[3rem]">
          {project.name}
        </h2>
        <div className="flex gap-8">
          {project.codeUrl !== "" && (
            <a
              className="text-green-500 text-[1.2rem] sm:text-[2rem]"
              href={project.codeUrl}
            >
              Code
            </a>
          )}
          {project.url !== "" && (
            <a
              href={project.url}
              className="text-green-500 text-[1.2rem] sm:text-[2rem]"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
