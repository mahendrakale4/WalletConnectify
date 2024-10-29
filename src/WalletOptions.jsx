import React, { useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import "./WalletOptions.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  async function ConnectandNavi({ connector }) {
    await connect({ connector });
  }
  // use efect after isConnected is updated
  useEffect(() => {
    if (isConnected) navigate("/acc");
  }, [isConnected, navigate]);

  return (
    <div className="wallet-options-container">
      {connectors.map((connector) => (
        <div key={connector.uid} className="wallet-option">
          <button
            onClick={() => ConnectandNavi({ connector })}
            className="wallet-button"
          >
            {" "}
            {connector.name}{" "}
          </button>

          <span className="wallet-id">id:{connector.uid}</span>
        </div>
      ))}
    </div>
  );
}
