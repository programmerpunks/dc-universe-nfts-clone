
import {imageSlide} from "../Carousel/Data.js";
import { useState, useEffect } from "react";

const Carousel2 = () => {
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

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className='relative'>
    <img src={imageSlide[currentState].url} alt='' className='object-contain hidden sm:block '/>
    <img src={imageSlide[currentState].url2} alt='' className='object-contain sm:hidden  '/>
      <div className='absolute  sm:left-40 lg:top-96 top-[50%] lg:w-[50%]  mb:text-left text-center  '>
        <button className='bg-green-400 m-2'><p className='p-5 font-sm py-2 px-5 text-white rounded-sm text-sm'>Live Now</p></button>
        <h1 className='lg:text-6xl text-3xl font-extrabold'>{imageSlide[currentState].heading}</h1>
        <p className='text-base font-lora'>{imageSlide[currentState].description}</p>
        <div className="c-button pt-4 flex gap-2">
          {imageSlide.map((data, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
        <button className="bg-gray-800 font-sm py-1 px-14 text-white rounded-sm text-sm m-1 mr-3 border-white border font-bold ">
          EXPLORE COLLECTION
        </button>

        <button className="bg-gray-800 font-sm py-1 px-14 text-white rounded-sm m-1 text-sm border-white border font-bold ">
          JOIN THE DISCORD
        </button>
      </div>

    </div>
  )
}

export default Carousel2
