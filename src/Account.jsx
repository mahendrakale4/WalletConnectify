import {
  useAccount,
  useBalance,
  useDisconnect,
} from "wagmi";
import './Account.css'; // Import the CSS file

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
      <button className="disconnect-button" onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
