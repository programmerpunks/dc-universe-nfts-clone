import harley from '../../../images/welcome-dc-nft.png'
const Welcome = () => {
  return (
    <div className='space-y-5'>
      <div>
        <img src={harley} alt="Harley Quinn"/>
      </div>
      <div className='text-center'>
        <h1 className='text-3xl font-extrabold uppercase'>Welcome to the DC NFT universe</h1>
        <p className='text-base'>Build your collection, unlock exclusive fan experiences, and become a part of the story. It's all here waiting for you.</p>
      </div>
    </div>
  )
}
export default Welcome