import harley from '../../../images/welcome-dc-nft.png'
const Welcome = () => {
  return (
    <div className='space-y-5 lg:flex lg:gap-14 items-center lg:px-10'>
      <div className='lg:w-3/5'>
        <img src={harley} alt="Harley Quinn"/>
      </div>
      <div className='flex justify-center'>
        <div className='text-center lg:text-left w-[300px] lg:w-full'>
          <h1 className='text-3xl font-extrabold uppercase lg:text-4xl lg:w-[300px]'>Welcome to the DC NFT universe</h1>
          <p className='text-base lg:text-lg text-white/60'>Build your collection, unlock exclusive fan experiences, and become a part of the story. It's all here waiting for you.</p>
        </div>
      </div>
    </div>
  )
}
export default Welcome