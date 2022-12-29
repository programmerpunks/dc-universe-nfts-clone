import collection1 from '../../../images/bat-cowl-collection.png'

const SingleNFTCollectible = () => {
  return (
    <div className="relative object-contain my-10 text-white">
      <img
        src={collection1}
        alt="Bat Cowl Collection"
        className="brightness-75"
      />
      <div className="absolute bottom-5 left-5">
        <button className="bg-green-700 rounded-sm">
          <p className="px-3 py-2 text-sm uppercase font-bold">Now Live</p>
        </button>
        <h2 className="text-2xl font-bold">Bat Cowl Collection</h2>
        <p className="text-lg">
          Stand for justice and join Batman on a multi year journey into Gotham.
        </p>
        <p>View Collection</p>
      </div>
    </div>
  )
}

export default SingleNFTCollectible
