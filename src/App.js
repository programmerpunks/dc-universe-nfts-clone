// import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <div className="justify-center px-5 bg-black text-white font-kanit gap-4">
        <Header/>
        {/* <Home/> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
