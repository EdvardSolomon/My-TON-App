import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PageSwitcher from "../components/PageSwitcher";
import ConnectWalletButton from "../components/ConnectWalletButton";

const SecondPage: React.FC = () => {
  const walletAddress = useSelector((state: RootState) => state.wallet.address);

  return (
    <div>
      <h1>Second Page</h1>
      <PageSwitcher />
      <ConnectWalletButton />
      <p>Wallet Address: {walletAddress || "Not connected"}</p>
    </div>
  );
};

export default SecondPage;
