import React from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PageSwitcher from "../components/PageSwitcher";

const FirstPage: React.FC = () => {
  const walletAddress = useSelector((state: RootState) => state.wallet.address);

  return (
    <div>
      <h1>First Page</h1>
      <PageSwitcher />
      <ConnectWalletButton />
      <p>Wallet Address: {walletAddress || "Not connected"}</p>
    </div>
  );
};

export default FirstPage;
