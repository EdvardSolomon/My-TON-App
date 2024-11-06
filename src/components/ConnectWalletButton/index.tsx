import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTonConnectModal, TonConnectUI } from "@tonconnect/ui-react";
import { connectWallet, disconnectWallet } from "../../store/walletSlice";
import { RootState } from "../../store/store";
import styles from "./ConnectWalletButton.module.scss";

const ConnectWalletButton: React.FC = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector((state: RootState) => state.wallet.address);
  const { open, close } = useTonConnectModal();
  const [tonConnectUI] = useState(() => new TonConnectUI());

  const handleConnect = () => {
    open();
  };

  const handleDisconnect = () => {
    dispatch(disconnectWallet());
  };

  useEffect(() => {
    tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        dispatch(connectWallet(wallet.account.address));
        close();
      } else {
        dispatch(disconnectWallet());
      }
    });
  }, [dispatch, tonConnectUI, close]);

  return (
    <div>
      <button
        onClick={walletAddress ? handleDisconnect : handleConnect}
        className={`${styles.button} ${
          walletAddress ? styles.connected : styles.disconnected
        }`}
      >
        {walletAddress ? "Disconnect" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default ConnectWalletButton;
