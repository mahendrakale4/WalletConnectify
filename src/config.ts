import { http, createConfig } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "YOUR_ACTUAL_PROJECT_ID"; // Replace with your WalletConnect Project ID

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(), 
    // walletConnect({ projectId }), 
    metaMask(), 
    safe()
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
