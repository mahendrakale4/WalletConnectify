import React from "react";
import { useConnect } from "wagmi";
import "./WalletOptions.css"; 

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className="wallet-options-container">
      {connectors.map((connector) => (
        <div key={connector.uid} className="wallet-option">
          <button
            onClick={() => connect({ connector })}
            className="wallet-button"
          >
            {connector.name}
          </button>
          <span className="wallet-id">uid:{connector.uid}</span>
        </div>
      ))}
    </div>
  );
}
