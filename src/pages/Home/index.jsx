import CreateAccount from "../../components/Home/CreateAccount"
import Instructions from "../../components/Home/Instructions"
import ServiceDetails from "../../components/Home/ServiceDetails"
import StoryWorld from "../../components/Home/StroyWorld"
import Welcome from "../../components/Home/Welcome"

const Home = () => {
  return (
    <div className="max-w-complete space-y-10">
      <Welcome />
      <ServiceDetails />
      <StoryWorld />
      <Instructions />
      <CreateAccount />
    </div>
  )
}

export default Home
