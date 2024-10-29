import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "./config";
import { WalletOptions } from "./WalletOptions";
import { Account } from "./Account";
import { SendTransaction } from "./SendTransaction";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";

const queryClient = new QueryClient();

// function Main() {
//   const { isConnected } = useAccount(); // Get the connection status

//   return (
//     <>
//       {!isConnected && <WalletOptions />}
//       {isConnected && <Account />}
//       {isConnected && <SendTransaction />}{" "}
//     </>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* <Main /> */}
          <Routes>
            <Route path="/acc" element={<Account />} />
            <Route path="/wo" element={<WalletOptions />} />
            <Route path="/" element={<Landing />} />
            <Route />
          </Routes>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  );
}
