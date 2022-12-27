import collection1 from '../../../images/bat-cowl-collection.png'
const Collectibles = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center uppercase">DC COLLECTIBLE COMICS</h2>
      <div className='relative object-contain my-10'>
        <img src={collection1} alt='Bat Cowl Collection' className='' />
        <div className='absolute bottom-0 px-5'>
          <button className='bg-green-700 rounded-sm'><p className='px-3 py-2 text-sm uppercase'>Now Live</p></button>
          <h2 className='text-2xl font-bold'>Bat Cowl Collection</h2>
          <p>Stand for justice and join Batman on a multi year journey into Gotham.</p>
          <p>View Collection</p>
        </div>
      </div>
      <button className="w-full bg-blue-600"><p className="font-semibold py-3">View All</p></button>
    </div>
  )
}

export default Collectibles
