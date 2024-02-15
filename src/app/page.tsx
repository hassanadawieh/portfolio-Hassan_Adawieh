import Image from "next/image";
import NavBar from "@/app/component/NavBar";
import About from "@/app/component/About";
import Skills from "@/app/component/Skills";
import Projects from "@/app/component/Projects";
import Contact from "@/app/component/Contact";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="px-2 sm:px-20 h-[90vh] flex items-center justify-center">
        <div className="font-mono flex items-center flex-col">
          <p className="">LET'S BUILD SOMETHING TOGETHER</p>
          <h2 className="text-[2rem] sm:text-[3rem] text-center">
            Hey,I'm{" "}
            <span className="font-mono text-green-700">Hassan Adawieh</span>
          </h2>
          <h3 className="text-[1.2rem] font-bold text-center">
            {" "}
            A Full Stack Web & Mobile Developer
          </h3>
          <p className="text-center font-[rem]">
            specialize in building User Friendly Web Applications
          </p>
          <div className="flex items-center mt-4 gap-2 ">
            <a href="https://linkedin.com/in/hassan-adawieh-2a122a246">
              <FaLinkedin className="text-[2rem] cursor-pointer" />
            </a>
            <a href="https://github.com/hassanadawieh">
              <FaGithub className="text-[2rem] cursor-pointer" />
            </a>
            <a href="https://wa.me/whatsapp81245825">
              <FaWhatsapp className="text-[2rem] cursor-pointer" />
            </a>
            <a href="mailto:adawiehhassan"></a>

            <FaEnvelope className="text-[2rem] cursor-pointer" />
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="w-full  flex items-center justify-center bg-green-600 gap-2">
        <Image src="/portfolio-logo.svg" width={150} height={150} ></Image>
        <a href="https://www.instagram.com/hassan_adawieh/">
          <FaInstagram className="text-[2rem] cursor-pointer" />
        </a>
        <a href="https://wa.me/whatsapp81245825">
          <FaWhatsapp className="text-[2rem] cursor-pointer" />
        </a>
      </footer>
    </div>
  );
}
