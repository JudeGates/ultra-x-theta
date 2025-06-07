import React from "react";
import { useStakeStore } from "../../state/useStakeStore";

export default function RewardCard() {
  const { staked } = useStakeStore();
  const rewards = (staked * 0.1).toFixed(2); // mock 10% APY

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full max-w-sm">
      <h4 className="text-lg font-semibold mb-2">Your Rewards</h4>
      <p className="text-2xl text-primary font-bold">${rewards}</p>
      <p className="text-gray-500 text-sm">Simulated 10% return</p>
    </div>
  );
}
