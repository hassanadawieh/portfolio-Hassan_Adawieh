"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = ({ position }) => {
  const [showMenu, setShowMenu] = useState("hidden");
  console.log(position);
  const handleMenu = () => {
    if (showMenu === "hidden") {
      setShowMenu("block");
    } else {
      setShowMenu("hidden");
    }
  };
  return (
    <div className="fixed w-full h-[10vh] flex items-center justify-between  sm:px-20 z-10 bg-green-600 shadow-lg">
      <Image
        src="/portfolio-logo.svg"
        slt="logo-image"
        width={200}
        height={200}
      ></Image>
      <div className="hidden sm:block">
        <div className="flex items-center gap-2 sm:gap-8 pr-10">
          <a className={position < 700 && "border-b-2"} href="#">
            HOME
          </a>
          <a
            className={700 < position && position < 1400 && "border-b-2"}
            href="#about"
          >
            ABOUT
          </a>{" "}
          <a
            className={1400 < position && position < 2800 && "border-b-2"}
            href="#skills"
          >
            SKILLS
          </a>
          <a
            className={2800 < position && position < 3500 && "border-b-2"}
            href="#projects"
          >
            PROJECTS
          </a>
          <a className={position > 3500 && "border-b-2"} href="#contact">
            CONTACT
          </a>
        </div>
      </div>
      <div className="block sm:hidden pr-[2rem]">
        <GiHamburgerMenu
          className="w-[2rem] h-[2rem]"
          onClick={() => handleMenu()}
        />
      </div>
      <div
        className={`absolute bottom-[-31vh] w-full flex flex-col items-center py-[1rem] gap-8 bg-green-600 ${showMenu}`}
      >
        <a href="#" onClick={() => handleMenu()}>
          HOME
        </a>
        <a href="#about" onClick={() => handleMenu()}>
          ABOUT
        </a>
        <a href="#skills" onClick={() => handleMenu()}>
          SKILLS
        </a>
        <a href="#projects" onClick={() => handleMenu()}>
          PROJECTS
        </a>
        <a href="#contact" onClick={() => handleMenu()}>
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default NavBar;
