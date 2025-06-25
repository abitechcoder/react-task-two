import React from "react";
import { Pagination } from "../components";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/project1.png",
      title: "Sample Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: "/project2.png",
      title: "Sample Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: "/project3.png",
      title: "Sample Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="pb-8 text-center lg:text-left">
        <h1 className="text-gray-4 font-light text-4xl lg:text-6xl">Our</h1>
        <h2 className="text-gray-1 font-bold text-4xl lg:text-6xl">Projects</h2>
      </div>
      <hr className="text-gray-6" />
      <div className="grid gap-8 my-10">
        {projects.map((project) => (
          <div className="grid lg:grid-cols-2" key={project.id}>
            <img
              src={project.image}
              alt={`${project.title} picture`}
              className="h-[250px] lg:h-[400px] w-full object-cover object-center"
            />
            <div className="p-4 bg-white-4 flex flex-col gap-4 lg:gap-8">
              <h3 className="font-light text-gray-4 text-2xl lg:text-4xl">{project.title}</h3>
              <p className="text-black font-light text-sm lg:text-base">{project.description}</p>
              <div className="bg-white lg:py-4 py-3 px-6 lg:px-8 hover:cursor-pointer flex items-center gap-2 self-start shadow-md">
                <p className="font-normal uppercase text-gray-1 text-sm lg:text-base">View More</p>
                <img src="/arrow-right.svg" alt="arrow right" className='w-6 h-6'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default Projects;
