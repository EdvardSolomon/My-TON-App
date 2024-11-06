import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { connectWallet, disconnectWallet } from "../../store/walletSlice";
import styles from "./ConnectWalletButton.module.scss";

const ConnectWalletButton: React.FC = () => {
  const dispatch = useDispatch();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    if (wallet) {
      dispatch(connectWallet(wallet.account.address));
    } else {
      dispatch(disconnectWallet());
    }
  }, [wallet, dispatch]);

  const handleDisconnect = async () => {
    await tonConnectUI.disconnect();
    dispatch(disconnectWallet());
  };

  return (
    <div className={styles.container}>
      {wallet ? (
        <button
          onClick={handleDisconnect}
          className={styles.disconnectButton}
        >
          Disconnect
        </button>
      ) : (
        <TonConnectButton className={styles.connectButton} />
      )}
    </div>
  );
};

export default ConnectWalletButton;
