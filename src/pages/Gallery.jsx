import React from "react";
import { Pagination } from "../components";

const Gallery = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="pb-8 text-center lg:text-left">
        <h1 className="text-gray-4 font-light text-4xl lg:text-6xl">Photo</h1>
        <h2 className="text-gray-1 font-bold text-4xl lg:text-6xl">Gallery</h2>
      </div>
      <hr className="text-gray-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 my-10">
        <img
          src="gallery1.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery2.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery3.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery4.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery5.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery6.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery7.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery8.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery9.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
        <img
          src="gallery10.png"
          alt="gallery picture"
          className="h-[260px] w-full object-cover object-center"
        />
      </div>
      <Pagination />
    </section>
  );
};

export default Gallery;
