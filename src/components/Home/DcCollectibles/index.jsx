
import SingleNFTCollectible from '../SingleNFTCollectible'
import data from '../../../Content/DcCollectibles/index'


const Collectibles = () => {

  return (
    <div id="collection" className="py-20">
      <div className="flex justify-between overflow-hidden">
        <h2 className="text-2xl font-bold text-center uppercase">
          NFT COLLECTIBLE COMICS
        </h2>
        <div className="flex items-center gap-10">
          <button className="bg-blue-600 rounded-sm hidden sm:block">
            <p className="px-8 py-3 text-base uppercase font-semibold">
              View All
            </p>
          </button>
        </div>
      </div>
        <div className='carousel rounded-box'>
             <div className='carousel-item'>
               {data.map((item, index) => {
          return (
            <div>
              <SingleNFTCollectible
                img={item.img}
                heading={item.heading}
                details={item.details}
              />
            </div>
          )
        })}
             </div>
         </div>
    </div>
  )
}

export default Collectibles
