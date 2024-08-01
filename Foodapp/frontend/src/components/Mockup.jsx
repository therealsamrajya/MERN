import React from "react";

const Mockup = () => {
  return (
    <div className="relative h-[120vh] max-sm:hidden  ">
      <div className="bg-mockup-background absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80"></div>
      <div className="z-50 relative flex items-center justify-center">
        <span className="font-primary text-heading text-8xl z-50 ml-[33rem] mt-[4rem]">
          Get our mobile application now
        </span>
      </div>
    </div>
  );
};

export default Mockup;
