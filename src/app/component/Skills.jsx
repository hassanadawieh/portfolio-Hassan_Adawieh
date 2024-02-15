import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div id="skills" className="pt-[10vh] px-2 sm:px-20 min-h-[90vh] mt-[10vh]">
      <h2 className="font-mono w-full h-[10vh] text-3xl sm:text-3xl md:text-4xl ">
        Skills:
      </h2>
      <div className=" w-[100%] flex-wrap gap-4 flex items-center justify-center">
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/html-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">HTML</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/css-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">CSS</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/javaScript-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">JavaScript</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/typeScript-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">TypeScript</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/nodejs-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">Nodejs</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/react-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">React</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/nextjs-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">Nextjs</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/laravel-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">Laravel</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/mysql-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">MySQL</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/mongodb-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">MongoDB</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/python-image.jpeg" width={80} height={80} />
          <p className="font-mono text-[2rem] ">python</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/php-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">PHP</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/prisma-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">Prisma</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/wordPress-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">WordPress</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/tailwindcss.png" width={80} height={80} />
          <p className="font-mono text-[2rem] sm:text[2rem] ">Tailwindcss</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/github-image.jpeg" width={80} height={80} />
          <p className="font-mono text-[2rem] ">github</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/gitlab-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">gitlab</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/docker-image.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">Docker</p>
        </div>
        <div className="w-[20rem] h-[8rem] border-[2px] border-green-700 flex items-center justify-around rounded-md">
          <Image src="/postman-immage.png" width={80} height={80} />
          <p className="font-mono text-[2rem] ">postman</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
