import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import image1 from "../images/banner1.jpg";
import image2 from "../images/banner2.jpg";
import image3 from "../images/banner3.jpg";
import image4 from "../images/banner4.jpg";
import image5 from "../images/banner5.jpg";
import image6 from "../images/banner7.jpg";

const images = [
  image1,
  image2,
  image3,
  "banner-instagram",
  image4,
  image5,
  image6,
  "banner-facebook",
  // Add more images and banners as needed
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-heading my-[1rem]">
      <h2 className="text-3xl font-bold font-primary text-dark text-center mb-8">
        Connect With Us
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer">
            {item.startsWith("banner-") ? (
              <div className="flex flex-col items-center justify-center bg-gray-200 h-full w-full text-center p-4">
                {item === "banner-instagram" ? (
                  <>
                    <FaInstagram className="text-4xl text-pink-600 mb-2" />
                    <span className="text-lg font-bold text-dark font-secondary">
                      Follow us on Instagram
                    </span>
                  </>
                ) : (
                  <>
                    <FaFacebook className="text-4xl text-blue-600 mb-2" />
                    <span className="text-lg font-bold text-dark font-secondary">
                      Follow us on Facebook
                    </span>
                  </>
                )}
              </div>
            ) : (
              <img
                src={item}
                alt={`Gallery Image ${index + 1}`}
                className="w-[30rem] h-[13rem] object-cover transform transition-transform duration-300 hover:scale-110 max-sm:w-[14rem] max-sm:h-[12rem]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
