import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "wouter";

const Nav = ({ isAuth, setIsAuth }) => {
  return (
    <nav className="w-full absolute top-0 p-2 flex justify-between">
      <h1 className="text-2xl font-black text-gradient">StreamyFi</h1>
      {isAuth && (
        <ul className="flex items-center">
          <li className="px-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/streams">All Stream</Link>
          </li>
          <li className="px-2">
            <Link to="/incoming">Incoming</Link>
          </li>
          <li className="px-2">
            <Link to="/outgoing">Outgoing</Link>
          </li>
          <li className="px-2">
            <Link to="/addService">Add Service</Link>
          </li>
        </ul>
      )}
      {/* <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      className="bg-blue-500 rounded-md px-[20px] w-[15vw] py-[10px] hover:font-semibold "
                      type="button"
                    >
                      Connect Wallet
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>
                    <button onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom> */}
      <ConnectButton />{" "}
    </nav>
  );
};

export default Nav;
