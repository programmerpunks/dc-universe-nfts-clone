import React from "react";
import "./Carousel.css";
import {imageSlide} from "./Data.js";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgIMageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: "100%",

    // object-fit: 'cover',
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div>
      <div style={bgIMageStyle} className="p-96 bg-no-repeat">

      <div className="description ">
        <div className=" pt-44">
          <div className="py-2">
            <button class="bg-green-400 font-sm py-2 px-5  text-white rounded-sm text-sm">
              Now Live
            </button>
          </div>
          <h1 className="text-6xl font-extrabold">
            {imageSlide[currentState].heading}
          </h1>
          <p> {imageSlide[currentState].description}</p>
        </div>
        <div className="c-button pt-4 flex gap-2">
          {imageSlide.map((data, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
        <button class="bg-gray-800 font-sm py-2 px-14 text-white rounded-sm text-sm mt-5 mr-3 border-white border font-bold ">
          EXPLORE COLLECTION
        </button>

        <button class="bg-gray-800 font-sm py-2 px-14 text-white rounded-sm text-sm mt-5 border-white border font-bold ">
          JOIN THE DISCORD
        </button>
      </div>
      </div>
      {/* <div className="bg">
      </div> */}
    </div>
  );
};

export default Carousel;
