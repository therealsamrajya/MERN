import React from "react";

const Location = () => {
  return (
    <div className=" bg-heading">
      <div className="flex flex-col items-center justify-center">
        <span className="text-button font-primary text-4xl">Our Location</span>

        <span className="font-primary text-6xl text-dark font-bold mt-[2rem] max-sm:text-4xl">
          {" "}
          Find Mandala Meals near you
        </span>

        <span className="font-secondary text-gray text-[1rem] mt-[2rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          suscipit laborum totam quam <br />
          exercitationem, repellat nostrum, consequuntur.
        </span>

        <div className="flex flex-row items-center justify-center gap-[5rem] mb-[1rem] mt-[5rem] max-sm:grid max-sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <span className="font-primary text-button text-5xl">Kathmandu</span>
            <span className="mt-[1rem] font-secondary text-gray">
              Chabhail,Kathmandu
            </span>
            <span className="mt-[1rem] font-secondary text-gray">
              +977 981234567
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-primary text-button text-5xl">Pokhara</span>
            <span className="mt-[1rem] font-secondary text-gray">
              Sarangkot,Pokhara
            </span>
            <span className="mt-[1rem] font-secondary text-gray">
              +977 981234567
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-primary text-button text-5xl">Chitwan</span>
            <span className="mt-[1rem] font-secondary text-gray">
              Narayani,Chitwan
            </span>
            <span className="mt-[1rem] font-secondary text-gray">
              +977 981234567
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-primary text-button text-5xl">Dhangadhi</span>
            <span className="mt-[1rem] font-secondary text-gray">
              Campus Road,Dhangadhi
            </span>
            <span className="mt-[1rem] font-secondary text-gray">
              +977 981234567
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
