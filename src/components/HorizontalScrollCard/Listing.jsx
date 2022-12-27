import React from "react";
import { Data } from "./CardData.js";
import HorizontalCard from "./HorizontalCard.jsx";

const Listing = () => {
  return (

    <div className="">
      <div className="flex flex-col bg-black m-auto p-auto p-4">
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          {Data.map((card, index) => {

            return (
              <HorizontalCard
                key={index}
                url={card.url}
                url2={card.url2}
                comicName={card.comicName}
                date={card.date}
                // stylee={bgIMageStyle}
              />
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Listing;
