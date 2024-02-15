import React from "react";
import Project from "@/app/component/UI/Project";
const Projects = () => {
  const dataProjects = [
    {
      name: "Ceramic E-Commerce Website",
      image: "/ceramic.png",
      codeUrl: "https://github.com/hassanadawieh/ceramic-frontend.git",
      url: "https://ceramic-web.onrender.com",
    },
    {
      name: "Turkish Delight Portfolio",
      image: "/turkish-delight-portfolio.png",
      codeUrl: "",
      url: "https://marwanlokum.netlify.app/",
    },
    {
      name: "Real Time Chatting",
      image: "/chat.png",
      codeUrl: "https://github.com/hassanadawieh/real-time-chat.git",
      url: "https://real-time-chat-lime.vercel.app/",
    },
    {
      name: "Learning Management System",
      image: "/lms.png",
      codeUrl: "//github.com/MouhamadAlAssaad/lms-frontend.git",
      url: "",
    },
    {
      name: "Meals App",
      image: "/meals-app.png",
      codeUrl: "https://github.com/hassanadawieh/Meals-app.git",
      url: "",
    },
  ];

  https: return (
    <div
      id="projects"
      className="z-1 pt-[10vh] px-2 sm:px-20 min-h-[90vh] mt-[10vh] flex justify-start gap-4 flex-wrap"
    >
      <h2 className="w-full h-[10vh] text-3xl sm:text-3xl md:text-4xl ">
        Projects:
      </h2>
      <div className=" w-[100%] flex-wrap gap-4 flex items-center justify-center mt-4">
        {dataProjects.map((project) => (
          <>
            <Project project={project} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
