import { useNavigate } from "react-router-dom";

import harley from "../../../images/welcome-dc-nft.png";

const Welcome = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5 lg:flex lg:gap-14 items-center lg:px-10">
      <div className="flex justify-center">
        <div className="text-center lg:text-left w-[300px] lg:w-full">
          <h1 className="text-3xl font-extrabold uppercase lg:text-4xl lg:w-[300px]">
            Welcome to the DC NFT universe
          </h1>
          <p className="text-base lg:text-lg text-white/60">
            Build your collection, unlock exclusive fan experiences, and become
            a part of the story. It's all here waiting for you.
          </p>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center">
        <button
          onClick={async () => {
            logout
              ? (async function () {
                  await disconnect();
                  navigate("/");
                })()
              : (async function () {
                  await connection();
                  await readContract();
                  await getTokens();
                  navigate("/mint");
                })();
          }}
          className={` lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 ${
            logout ? "hover:before:content-['Disconnect:']" : ""
          }`}
        >
          {wallet}
        </button>
      </div>
    </div>
  );
};
export default Welcome;
