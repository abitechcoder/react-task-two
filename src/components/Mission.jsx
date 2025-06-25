import React from "react";

const Mission = () => {
  return (
    <section className="container mx-auto p-4 lg:p-10">
      <h2 className="text-gray-4 font-light text-4xl lg:text-6xl">
        Main Focus/Mission Statement
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="flex gap-4 items-center lg:items-start">
          <h3 className="text-gray-6 font-black text-7xl lg:text-9xl">1</h3>
          <p className="font-light text-sm lg:text-base text-black leading-6 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="flex gap-4 items-center lg:items-start">
          <h3 className="text-gray-6 font-black text-7xl lg:text-9xl">2</h3>
          <p className="font-light text-sm lg:text-base text-black leading-6 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
