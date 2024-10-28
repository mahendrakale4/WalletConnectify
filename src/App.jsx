import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "./config";
import { WalletOptions } from "./WalletOptions";
import { Account } from "./Account";
import { SendTransaction } from "./SendTransaction";

const queryClient = new QueryClient();

function Main() {
  const { isConnected } = useAccount(); // Get the connection status

  return (
    <>
      {!isConnected && <WalletOptions />}
      {isConnected && <Account />}
      {isConnected && <SendTransaction />}{" "}
    </>
  );
}

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
