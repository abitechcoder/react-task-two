import React from "react";
import { LogoWhite } from "../assets/images";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black-2 text-white">
      <div className="container px-4 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-14">
        <img src={LogoWhite} alt="Logo" className="w-[70px] h-[50px]"/>
        <div className="text-white flex flex-col gap-5 text-sm lg:text-base">
          <h3 className="font-bold mb-2">Information</h3>
          <Link to={"/"} className="font-medium">
            Main
          </Link>
          <Link to={"/gallery"} className="font-medium">
            Gallery
          </Link>
          <Link to={"/projects"} className="font-medium">
            Projects
          </Link>
          <Link to={"/certifications"} className="font-medium">
            Certifications
          </Link>
          <Link to={"/contacts"} className="font-medium">
            Contacts
          </Link>
        </div>
        <div className="text-white flex flex-col gap-5 text-sm lg:text-base w-[200px] lg:w-[250px]">
          <h3 className="font-bold mb-2">Contacts</h3>
          <div className="flex gap-2 items-start">
            <img src="/location.svg" alt="location icon" className="w-4 h-4" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
          <div className="flex gap-2 items-start w-[250px]">
            <img src="/phone.svg" alt="location icon" className="w-4 h-4" />
            <p>512.333.2222</p>
          </div>
          <div className="flex gap-2 items-start w-[250px]">
            <img src="/mail.svg" alt="location icon" className="w-4 h-4" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>
        <div className="text-white flex flex-col gap-4 text-sm lg:text-base">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-8 items-center">
            <img src="/facebook.svg" alt="facebook icon" className="w-5 h-5" />
            <img src="/twitter.svg" alt="twitter icon" className="w-5 h-5" />
            <img src="/Linked-In.svg" alt="linked in icon" className="w-5 h-5" />
            <img src="/pininterest.svg" alt="pinterest icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <hr className="text-white-3/50" />
      <div className="flex justify-center items-center p-8 text-white-3/50 text-sm lg:text-base">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
