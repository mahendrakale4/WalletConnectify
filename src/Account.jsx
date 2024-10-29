// import React, { useEffect } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import "./Account.css"; // Import the CSS file
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

export function Account() {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const {
    data: balanceData,
    isLoading,
    isError,
  } = useBalance({
    address,
    watch: true,
    enabled: !!address,
  });

  const walletName = connector?.name || "Unknown Wallet";
  const navigate = useNavigate();
  const { isConnected } = useAccount();



  async function DisconnectandNavi() {
    await disconnect();
    navigate("/wo");
  }
  // UseEffect
  useEffect(() => {
    if (!isConnected) {
      navigate("/wo");
    }
  }, [isConnected, navigate]);

  return (
    <div className="account-container">
      {address && (
        <div className="account-info">
          <p>Your address is {address}</p>
          <p className="wallet-name">Connected Wallet: {walletName}</p>
          {isLoading && <p>Loading Balance...🔃</p>}
          {isError && <p>Error in fetching balance</p>}
          {balanceData && (
            <p>
              Your balance is {balanceData.formatted} {balanceData.symbol}
            </p>
          )}
        </div>
      )}
      {/* <button className="disconnect-button" onClick={() => disconnect()}>
        Disconnect
      </button> */}
      <button className="disconnect-button" onClick={DisconnectandNavi}>
        Disconnect
      </button>
    </div>
  );
}
