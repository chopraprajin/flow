import Nav from "./components/Nav";
import { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Landing from "./pages/AddService.jsx";
import Home from "./pages/Home.jsx";
import Outgoing from "./pages/Outgoing.jsx";
import { Router, Route } from "wouter";
import Incoming from "./pages/Incoming.jsx";
import Streams from "./pages/Streams.jsx";
import AddService from "./pages/AddService";

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.polygonMumbai,
    chain.ropsten,
    chain.rinkeby,
  ],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Streamify",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <div className="App">
          <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
          <Router>
            <Route path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/streams" component={Streams} />
            <Route path="/incoming" component={Incoming} />
            <Route path="/outgoing" component={Outgoing} />
            <Route path="/addservice" component={AddService} />
          </Router>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
