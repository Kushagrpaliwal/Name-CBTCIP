"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import Underline from "./Underline";

const Experience = () => {
  return (
    <div className='mt-12 w-full py-20 ' id="experience">
      <div className="flex justify-center font-bold text-4xl md:text-5xl title ">
        <h1>My Work</h1>
        <span className="text-lightpurple">&nbsp;Experience</span>
      </div>
      <div className="flex justify-center">
      <Underline />
      </div>
      <div className='flex flex-row justify-center gap-16 cards'>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-darkpurple relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-darkpurple dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border cardbody ">
              <div className="w-full flex items-center justify-center">
                <CardItem
                  translateZ="50"
                  className="text-2xl text-center font-bold text-neutral-600 dark:text-white"
                >
                  Freelancer
                </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/exp1.svg"
                    height="300"
                    width="300"
                    className=" rounded-xl group-hover/card:shadow-xl my-8"
                    alt="thumbnail"
                  />
                </div>
              </CardItem>
              <div className="flex justify-center">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-10 text-center mt-8"
                >
                  Worked on various client demands for website functionalities using HTML/CSS, JavaScript, Vue.js, and version control systems.        </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-darkpurple relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-darkpurple dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div className="w-full flex items-center justify-center">
                <CardItem
                  translateZ="50"
                  className="text-2xl text-center font-bold text-neutral-600 dark:text-white"
                >
                  Internship at CipherByte Technologies

                </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/exp2.svg"
                  height="500"
                  width="1000"
                  className="  rounded-xl group-hover/card:shadow-xl my-8 "
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center">
              <CardItem
                as="p"
                translateZ="60"
                className=" text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-10 text-center mt-8"
                >
                Currently interning at CipherByte Technologies, actively involved in projects such as TodoList and Portfolio using JavaScript, Next.js, Firebase, Aceternity UI, and Tailwind CSS. Gaining hands-on experience and proficiency in these technologies while contributing to software development solutions. Excited to expand my skills and knowledge in the field of software development.
              </CardItem>
                </div>
            </CardBody>
          </CardContainer>
        </div>

      </div>
    </div>
  )
}

export default Experience