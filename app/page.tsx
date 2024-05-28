import Image from "next/image";
import type { Metadata } from "next";
import programming_image from "@/public/programming.svg";
import programming_guy_image from "@/public/programming-guy.svg";
import reactjs_icon from "@/public/reactjs.svg";
import nextjs_icon from "@/public/nextjs.svg";
import nodejs_icon from "@/public/nodejs.svg";
import tailwind_icon from "@/public/tailwind.svg";
import github_icon from "@/public/github.svg";
import linkedin_icon from "@/public/linkedin.svg";
import figma_icon from "@/public/figma.svg";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Full Stack Software Developer, Melbourne  | Jye Stillitano",
  description:
    "Melbourne based Software Developer. Computer Science undergraduate, majoring in Software Development.",
};

// Credit https://storyset.com/ for illustrations.

export default function Home() {
  return (
    // Outer Container
    <div className="m-auto h-full max-w-5xl">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 bg-gray-100 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="mx-4 mb-8 flex-grow rounded-xl bg-white p-4 shadow-lg md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="my-8 text-center text-6xl font-extrabold tracking-tight text-blue-600">
            Who Am I?
          </h1>
          <p className="mx-auto my-4 max-w-96 text-center leading-7">
            Hi there, I&apos;m Jye, a Melbourne based programmer with a
            Bachelors of Computer Science, majoring in Software Development.
          </p>
          <Image
            src={programming_image}
            alt="Programming illustration."
            className="mx-auto"
          />
          <p className="mx-auto my-4 max-w-96 text-center leading-7">
            I have created this website as a hobby project and as a place to
            showcase my personal work. <br />
            It has been built using the following tools and frameworks...
          </p>
          {/* Tech Stack */}
          <div className="my-12 flex flex-row justify-evenly">
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={reactjs_icon}
              alt="React JS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={nextjs_icon}
              alt="Next JS"
            />
            <Image
              className="m-auto size-16 sm:size-16 md:size-20 lg:size-24 "
              src={nodejs_icon}
              alt="Node JS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={tailwind_icon}
              alt="Tailwind CSS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={figma_icon}
              alt="Figma"
            />
          </div>
          <p className="mx-auto max-w-96 text-center leading-7">
            The project is completely open source and available on my{" "}
            <a
              href="https://github.com/JyeStillitano/jyestillitano.github.io"
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              GitHub
            </a>
            .
          </p>
          <Image
            src={programming_guy_image}
            alt="Programming guy illustration."
            className="mx-auto"
          />
          <p className="mb-4 text-center leading-7">
            Want to find out more of <b>what I do?</b>
          </p>
          <div className="flex justify-center">
            <div className="relative left-[236px] top-3 h-3 w-3  animate-ping rounded-full bg-blue-600 opacity-70" />
            <div className="relative left-[224px] top-3 h-3 w-3 rounded-full bg-blue-200" />
            <a
              href="/projects"
              className="m-4 rounded-full bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 hover:shadow-lg"
            >
              Check Out My Projects
            </a>
          </div>
          {/* Contact Information */}
          <div className="my-4 flex flex-wrap justify-evenly">
            <div className=" whitespace-nowrap">
              <Image
                src={github_icon}
                alt="Github Icon"
                className="mx-4 inline"
              />
              <p className="inline text-nowrap">@JyeStillitano</p>
            </div>
            <div className=" whitespace-nowrap">
              <Image
                src={linkedin_icon}
                alt="LinkedIn Icon"
                className="mx-4 inline"
              />
              <p className="inline text-nowrap">@Jye Stillitano</p>
            </div>
            <div className=" whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-4 inline h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="inline text-nowrap">jyestillitano@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
