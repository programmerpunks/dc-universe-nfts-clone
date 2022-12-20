import starBox from '../../../images/star-box.svg'
import ticket from '../../../images/ticket.svg'
import book from '../../../images/book.svg'
import stackLine from '../../../images/stack-line.svg'

const ServiceDetails = () => {
  return (
    <>
      <div className="flex gap-5">
        <div>
          <div>
            <img src={starBox} alt="Star Box" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">
              Unique Digital Collectibles
            </h2>
            <p className="text-sm leading-6">
              Discover collections based on your favorite DC characters.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={ticket} alt="Ticket" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">
              Exclusive Fan Experiences
            </h2>
            <p className="text-sm leading-6">
              Your collectibles are the key to exclusive previews and events.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <div>
            <img src={book} alt="Book" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">
              An immersive Storyworld
            </h2>
            <p className="text-sm leading-6">
              Participate in original storylines and create your world.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={stackLine} alt="Stack Line" />
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">
              A BUILT-IN MARKETPLACE
            </h2>
            <p className="text-sm leading-6">
              Buy and sell your collectibles with ease on the DC NFT
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails
