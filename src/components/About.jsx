import React from "react";
import { AboutImage1, AboutImage2, AboutImage3 } from "../assets/images";

const About = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 gap-8 bg-white-smoke p-4 lg:p-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <img src={AboutImage1} alt="Architectural building image 1" />
          <img src={AboutImage3} alt="Architectural building image 3" />
        </div>
        <div className="flex flex-col justify-center">
          <img src={AboutImage2} alt="Architectural building image 2" />
        </div>
      </div>
      <div>
        <h2 className="text-gray-4 font-light text-5xl lg:text-6xl">About</h2>
        <p className="font-light text-sm lg:text-base text-black leading-6 my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <a
          href="/projects"
          className="flex items-center gap-2 py-6 pl-5 pr-10 bg-white w-fit"
        >
          <h5 className="font-roboto font-normal uppercase text-gray-1">
            Read More
          </h5>
          <img src="/arrow-right.svg" alt="arrow right" className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default About;
