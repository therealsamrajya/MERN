import React from "react";

import banner7 from "../../images/banner7.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpeg";
import banner9 from "../../images/banner9.jpg";
import { FaStore, FaPizzaSlice } from "react-icons/fa";

const About = () => {
  const parallaxStyle1 = {
    backgroundImage: `url(${banner7})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  };

  const parallaxStyle2 = {
    backgroundImage: `url(${banner9})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  };

  return (
    <div>
      <div className="bg-heading mx-auto mb-[3rem] max-sm:text-center h-[120vh] ">
        <div className="flex flex-row max-sm:flex-col">
          <div className="flex flex-col mx-[2rem]">
            <h2 className="text-button font-primary font-semibold text-2xl my-[5rem]">
              Our Story
            </h2>
            <h2 className="text-dark font-primary text-7xl font-bold">
              Authentic Nepalese Food
            </h2>
            <span className="font-secondary text-dark text-xl font-medium mt-[2rem]">
              Varius eu mauris est vitae ultrices et, justo, at in ut faucibus
              libero pellentesque facilisis <br className="max-sm:hidden" />{" "}
              molestie suspendisse lacinia gravida sed habitasse diam nec nulla.
            </span>
            <div className="flex max-sm:flex-col flex-row gap-[5rem]">
              <img src={banner6} alt="" className="mt-[3rem] w-[50rem]" />
              <div className="flex flex-col mt-[2rem]">
                <h2 className="text-dark font-primary text-4xl font-bold">
                  It's All About The Family
                </h2>
                <span className="font-secondary text-dark text-xl font-medium mt-[2rem] max-sm:whitespace-pre-line">
                  Imperdiet orci, volutpat consequat fermentum,
                  <br className="max-sm:hidden" /> proin tempus et tellus,
                  vulputate adipiscing <br className="max-sm:hidden" /> auctor
                  nulla in malesuada et amet, aliquam{" "}
                  <br className="max-sm:hidden" /> laoreet mauris gravida
                  consectetur malesuada <br className="max-sm:hidden" /> est
                  ultricies diam vestibulum velit sit aliquet pellentesque
                  vitae.
                </span>
                <h2 className="text-dark font-primary text-4xl font-bold my-[2rem]">
                  Generations in The Making
                </h2>
                <span className="font-secondary text-dark text-xl font-medium">
                  Imperdiet orci, volutpat consequat fermentum,
                  <br /> proin tempus et tellus, vulputate adipiscing <br />{" "}
                  auctor nulla in malesuada et amet, aliquam <br /> laoreet
                  mauris gravida consectetur malesuada <br /> est ultricies diam
                  vestibulum velit sit aliquet pellentesque vitae.
                </span>
              </div>
            </div>
          </div>
          <img
            src={banner5}
            alt=""
            className="mt-[3rem] ml-[7rem] max-sm:ml-[0] max-sm:w-full"
          />
        </div>
      </div>

      <div style={parallaxStyle1}>
        <div className="relative z-10">
          <div className="bg-heading absolute mt-[2rem] ml-[2rem] w-[40vw] h-[80vh] max-sm:w-[30rem] max-sm:ml-[4rem]  ">
            <div className="flex flex-col gap-[2rem] max-sm:gap-[1rem] ml-[3rem] max-sm:ml-[1rem] ">
              <h3 className="font-secondary text-button font-semibold mt-[2rem] text-2xl">
                Mandala Meals
              </h3>
              <span className="font-primary font-medium text-dark text-5xl max-sm:text-4xl">
                Incredible Dishes Start Here
              </span>
              <span className="font-secondary text-xl text-gray">
                Semper dictumst sit interdum venenatis pellentesque nunc libero
                vestibulum velit sit aliquet pellentesque vitae.
              </span>
              <div className="flex flex-row">
                <FaStore className="text-button h-[5vh] w-[5vw]" />
                <div className="flex flex-col gap-[1rem]">
                  <span className="font-primary font-normal text-3xl text-dark">
                    4,200 square feet of space
                  </span>
                  <span className="text-gray font-secondary font-normal text-xl">
                    Bibendum rhoncus amet tellus ornare lobortis sit aliquet
                    elit,
                    <br /> hac nisi, mauris ac tellus velit sollicitudin.
                  </span>
                </div>
              </div>
              <div className="flex flex-row">
                <FaPizzaSlice className="text-button h-[5vh] w-[5vw]" />
                <div className="flex flex-col gap-[1rem]">
                  <span className="font-primary font-normal text-3xl text-dark">
                    Heritage You Can Taste
                  </span>
                  <span className="text-gray font-secondary font-normal text-xl">
                    Pretium, condimentum magna amet egestas ligula pretium{" "}
                    <br /> magna rutrum a in arcu, mauris porttitor fermentum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={parallaxStyle2}>
        <div className="relative z-10">
          <div className="bg-heading absolute mt-[2rem] ml-[50rem] max-sm:ml-[4rem] max-sm:w-[30rem] w-[40vw] h-[80vh]">
            <div className="flex flex-col gap-[2rem] ml-[3rem] max-sm:gap-[1rem] max-sm:ml-[rem]">
              <h3 className="font-secondary text-button font-semibold mt-[2rem] text-2xl">
                Authentic
              </h3>
              <span className="font-primary font-medium text-dark text-5xl">
                Recipe With Roots
              </span>
              <span className="font-secondary text-xl text-gray">
                Semper dictumst sit interdum venenatis pellentesque nunc libero
                vestibulum velit sit aliquet pellentesque vitae.
              </span>
              <div className="flex flex-row">
                <FaStore className="text-button h-[5vh] w-[5vw]" />
                <div className="flex flex-col gap-[1rem]">
                  <span className="font-primary font-normal text-3xl text-dark">
                    Authentic flavours
                  </span>
                  <span className="text-gray font-secondary font-normal text-xl">
                    Bibendum rhoncus amet tellus ornare lobortis sit aliquet
                    elit,
                    <br /> hac nisi, mauris ac tellus velit sollicitudin.
                  </span>
                </div>
              </div>
              <div className="flex flex-row">
                <FaPizzaSlice className="text-button h-[5vh] w-[5vw]" />
                <div className="flex flex-col gap-[1rem]">
                  <span className="font-primary font-normal text-3xl text-dark">
                    Handmade "Secret" Ingredients
                  </span>
                  <span className="text-gray font-secondary font-normal text-xl">
                    Pretium, condimentum magna amet egestas ligula pretium{" "}
                    <br /> magna rutrum a in arcu, mauris porttitor fermentum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
