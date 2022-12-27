// import Carousel from "../../components/Carousel"
import Carousel2 from "../../components/Carousel.2.0"
import CreateAccount from "../../components/Home/CreateAccount"
import Instructions from "../../components/Home/Instructions"
import ServiceDetails from "../../components/Home/ServiceDetails"
import StoryWorld from "../../components/Home/StroyWorld"
import Welcome from "../../components/Home/Welcome"
import Listing from "../../components/HorizontalScrollCard/Listing"


const Home = () => {
  return (
    <div className="max-w-complete space-y-10">

      <Carousel2 />
      <Listing />
      <Welcome />
      <ServiceDetails />
      <StoryWorld />
      <Instructions />
      <CreateAccount />

    </div>
  )
}

export default Home
