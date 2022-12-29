import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import SingleNFTCollectible from '../SingleNFTCollectible'

import { Carousel } from 'antd'
import { useRef } from 'react'

const Collectibles = () => {
  const carouselRef = useRef(null)

  const handlePrevious = () => {
    carouselRef.current.prev()
  }
  const handleNext = () => {
    carouselRef.current.next()
  }
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-center uppercase">
          NFT COLLECTIBLE COMICS
        </h2>
        <div className="flex items-center gap-10">
          <button className="bg-blue-600 rounded-sm">
            <p className="px-8 py-3 text-base uppercase font-semibold">
              View All
            </p>
          </button>
          <div className="flex gap-2">
            <div className="bg-blue-600 rounded-full p-2" onClick={() => handlePrevious()}>
              <MdKeyboardArrowLeft size={30} />
            </div>
            <div className="bg-blue-600 rounded-full p-2" onClick={() => handleNext()}>
              <MdKeyboardArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
      <Carousel slidesToShow={2} infinite={false} ref={carouselRef}>
        <SingleNFTCollectible />
        <SingleNFTCollectible />
        <SingleNFTCollectible />
        <SingleNFTCollectible />
        <SingleNFTCollectible />
      </Carousel>
    </div>
  )
}

export default Collectibles
