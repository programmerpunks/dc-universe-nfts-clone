import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ethers } from "ethers";

import Collectibles from "../../components/Home/DcCollectibles";
import CreateAccount from "../../components/Home/CreateAccount";
import Instructions from "../../components/Home/Instructions";
import ServiceDetails from "../../components/Home/ServiceDetails";
import StoryWorld from "../../components/Home/StroyWorld";
import Welcome from "../../components/Home/Welcome";
import Mint from "../../components/Mint/Mint";
import { ContractABI } from "../../components/Mint/Contract";
import Carousel2 from "../../components/Carousel.2.0";
import Listing from "../../components/HorizontalScrollCard/Listing";



const Home = () => {
  const [wallet, setWallet] = useState("Connect a Wallet");
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [userMintedAmount, setUserMintedAmount] = useState(0);

  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
        );
        return false;
      } else {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        return address;
      }
    } else {
      notify("No Ether wallet available");
      return false;
    }
  };
  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };
  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount(0);
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };
  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };
  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const imagesTockens = await contract.nftsOnwedByWallet(address);
    let imagesLocal = [];
    await imagesTockens.map(async (image) => {
      const url = await contract.tokenURI(parseInt(image, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
      setImages(imagesLocal);
    });
  };

  useEffect(() => {
    getTokens();
  }, [userMintedAmount]);

  return (
    <div className="max-w-complete space-y-10">
                <Carousel2/>
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <Welcome
          connection={connection}
          disconnect={disconnect}
          getTokens={getTokens}
          logout={logout}
          readContract={readContract}
          wallet={wallet}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <ServiceDetails />
                <Listing/>
                <StoryWorld />
                <Collectibles />
                <Instructions />
              </>
            }
          />
          <Route
            exact
            path="/mint"
            element={
              <>
                <Mint
                  connection={connection}
                  disconnect={disconnect}
                  getTokens={getTokens}
                  images={images}
                  maxMintAmount={maxMintAmount}
                  price={price}
                  readContract={readContract}
                  userMintedAmount={userMintedAmount}
                  wallet={wallet}
                />
              </>
            }
          />
        </Routes>
        <CreateAccount />
      </BrowserRouter>
    </div>
  );
};

export default Home;
