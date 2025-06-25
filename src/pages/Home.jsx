import React from "react";
import { Hero, About, Mission, OurProjects, ContactUs } from "../components";

const Home = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <About />
      <Mission />
      <OurProjects />
      <ContactUs />
    </div>
  );
};

export default Home;
