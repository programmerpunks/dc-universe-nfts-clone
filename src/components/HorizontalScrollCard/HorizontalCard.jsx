import { useState } from "react";
import "./Card.css";
// import pic1 from "../../images/dc-universe-hero-section.png";

const HorizontalCard = ({ url, url2, comicName, date }) => {
  const [visibleUrl, setVisibleUrl] = useState(url2);
  const handleMouseHover = () => {
    if (visibleUrl === url) {
      setVisibleUrl(url2);
    } else {
      setVisibleUrl(url);
    }
  };
  return (
    <div className="inline-block px-3 relative">
        <img
          src={visibleUrl}
          className=" w-56 h-96 max-w-xs overflow-hidden shadow-md bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out hover:scale-100 grad"
          alt=""
          onMouseOver={() => handleMouseHover()}
          onMouseOut={() => handleMouseHover()}
        />
        <div className="absolute z-10 top-[50%] h-full grad"></div>
      <div className="h-[100px]"></div>
      <div className="absolute bottom-10 ">
        <p className="text-blue-400 text-xs font-bold">BUY IN MARKETPLACE</p>
        <p className="font-bold">{comicName}</p>
        <p className="font-semibold">{date}</p>
        <button class="bg-transparent border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
