import React from "react";
import { ContactUsImage } from "../assets/images";

const ContactUs = () => {
  return (
    <section className="container mx-auto p-4 lg:p-10 flex flex-col">
      <h2 className="text-gray-4 font-light text-4xl lg:text-6xl">Contact Us</h2>
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="w-full grid gap-3">
            <input type="text" placeholder="Name" className="px-4 py-2 w-full bg-white-2" />
            <input type="text" placeholder="Phone Number" className="px-4 py-2 w-full bg-white-2" />
            <input type="text" placeholder="Email" className="px-4 py-2 w-full bg-white-2" />
            <input type="text" placeholder="Interested In" className="px-4 py-2 w-full bg-white-2" />
            <textarea placeholder="Message" className="px-4 py-2 w-full bg-white-2" ></textarea>
        </div>
        <div className="hidden lg:block lg:col-span-2">
            <img src={ContactUsImage} alt="Contact Us Section Image" className="w-full h-full object-center object-cover" />
        </div>
      </div>
      <a
        href="/projects"
        className="flex justify-center px-8 py-4 items-center gap-2 bg-gray-1 self-start mt-8"
      >
        <h5 className="font-roboto text-sm lg:text-base font-normal uppercase text-white">
          Send Email
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

export default ContactUs;
