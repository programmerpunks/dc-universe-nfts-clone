
const pic1 = require("../../images/Navbar/dc-logo.svg").default;
const pic2 = require("../../images/Navbar/nft-studio-logo.svg").default;

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="/"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <img src={pic1} alt="/" />
          </a>
          <a
            href="/"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <img src={pic2} alt="" />
          </a>
          <a
            href="/"
            className="text-white dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </a>

          <a
            href="/"
            className="text-white dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            features
          </a>

          <a
            href="/"
            className="text-white dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            pricing
          </a>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
