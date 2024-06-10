import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Config, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Monerium',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia],
  // transports: {
  //   [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/..."),
  //   [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/..."),
  // },
}) as Config;
export default config;
