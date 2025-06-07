import React from "react";
import MarketList from "../components/MarketList";
import WalletPanel from "../components/WalletPanel";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <WalletPanel />
      <MarketList />
    </div>
  );
}
