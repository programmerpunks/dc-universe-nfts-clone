import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
          <div className="flex justify-center px-5 bg-black text-white font-kanit">
            <Home />
          </div>
      <Footer />
    </div>
  );
};

export default App;
