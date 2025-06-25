import React from "react";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "../assets/images";

const OurProjects = () => {
  return (
    <section className="container mx-auto p-4 lg:p-10 flex flex-col">
      <h2 className="text-gray-4 font-light text-4xl lg:text-6xl">Our Projects</h2>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="relative">
          <div className="bg-gray-1/80 absolute inset-0 flex flex-col justify-center">
            <div className="ml-5 lg:ml-10 flex flex-col gap-4">
              <h3 className="text-white font-bold text-4xl lg:text-5xl">
                Sample <br />
                Project
              </h3>
              <a href="/projects" className="flex items-center gap-2">
                <h5 className="font-roboto font-normal uppercase text-white">
                  View More
                </h5>
                <img
                  src="/arrow-right-white.svg"
                  alt="arrow right"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <img
            src={Project1}
            alt="Project one image"
            className="h-[255px] w-full object-cover object-center"
          />
        </div>
        <img
          src={Project2}
          alt="Project two image"
          className="h-[255px] w-full object-cover object-center"
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <img
          src={Project3}
          alt="Project three image"
          className="h-[255px] w-full object-cover object-center"
        />
        <img
          src={Project4}
          alt="Project four image"
          className="h-[255px] w-full object-cover object-center"
        />
        <img
          src={Project5}
          alt="Project five image"
          className="h-[255px] w-full object-cover object-center"
        />
      </div>
      <a
        href="/projects"
        className="flex justify-center px-8 py-4 items-center gap-2 bg-gray-1 self-end mt-8"
      >
        <h5 className="font-roboto text-sm lg:text-base font-normal uppercase text-white">
          All Projects
        </h5>
        <img
          src="/arrow-right-white.svg"
          alt="arrow right"
          className="w-6 h-6"
        />
      </a>
    </section>
  );
};

export default OurProjects;
