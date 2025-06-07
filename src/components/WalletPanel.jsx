import React from "react";
import { useAppStore } from "../state/useAppStore";

export default function WalletPanel() {
  const { balance, connected, connect } = useAppStore();

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">Wallet Balance</p>
        <h2 className="text-xl font-bold text-primary">${balance.toFixed(2)}</h2>
      </div>
      <button
        onClick={connect}
        className="bg-primary text-black px-4 py-2 rounded font-semibold hover:opacity-80"
      >
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}
