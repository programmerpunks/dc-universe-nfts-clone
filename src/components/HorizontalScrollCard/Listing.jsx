import { Data } from "../../Content/HorizontalCard/index";
import HorizontalCard from "./HorizontalCard.jsx";

import "./Card.css";

const Listing = () => {
  return (

    <div id="about" className="w-[350px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[100%]">
      <div className='carousel rounded-box'>
             <div className='carousel-item'>    {Data.map((card, index) => {
            return (
              <HorizontalCard
                key={index}
                url={card.url}
                url2={card.url2}
                comicName={card.comicName}
                date={card.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
