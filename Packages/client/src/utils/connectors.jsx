import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import {appName} from './constants';
import { providers } from 'ethers'
// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
//const alchemyId = process.env.ALCHEMY_ID
const alchemyId = import.meta.env.VITE_ALCHEMY_ID;
const etherscanApiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
const infuraId = import.meta.env.VITE_INFURA_ID;

// Chains for connectors to support
const chains = defaultChains;
const defaultChain = chain.mainnet;

// Set up connectors
export const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0]
  return [
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      chains,
      options: {
        appName: 'wagmi',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
};

export const isChainSupported = (chainId) =>
  chains.some((x) => x.id === chainId);

// Set up providers
export const provider = ({ chainId }) =>
  providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      alchemy: alchemyId,
      etherscan: etherscanApiKey,
      infura: infuraId,
    },
  );

export const webSocketProvider = ({ chainId }) =>
  isChainSupported(chainId)
    ? new providers.InfuraWebSocketProvider(chainId, infuraId)
    : undefined

