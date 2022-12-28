// import Home from "./pages/Home";


import Footer from "./components/Footer";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
         {/* <Header/> */}
<Navbar/>



      <div className="px-5 bg-black text-white font-kanit gap-4">
        <Home />
      </div>
      <div>
      {/* <Carousel/> */}
      </div>

      {/* <Listing /> */}
      <Footer/>
    </div>
  );
};

export default App;
