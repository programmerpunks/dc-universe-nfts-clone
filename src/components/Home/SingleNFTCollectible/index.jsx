import { MdKeyboardArrowRight } from 'react-icons/md'

const SingleNFTCollectible = ({ img, heading, details }) => {
  return (
    <div className="relative object-contain my-10 text-white overflow-hidden mx-5">
      <img
        src={img}
        alt="Bat Cowl Collection"
        className="brightness-75 hover:scale-110 h-full w-full object-cover bg-center transition duration-1000 ease-in-out"
      />
      <div className="flex absolute bottom-5 left-5 items-center gap-5">
        <div className="w-4/5">
          <button className="bg-green-700 rounded-sm">
            <p className="px-3 py-2 text-sm uppercase font-bold">Now Live</p>
          </button>
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="text-lg">{details}</p>
        </div>

        <div className="bg-blue-600 rounded-full p-2">
          <MdKeyboardArrowRight size={30} />
        </div>
      </div>
    </div>
  )
}

export default SingleNFTCollectible
