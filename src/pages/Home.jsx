import React from "react";
import StakeForm from "../features/staking/StakeForm";
import RewardCard from "../features/staking/RewardCard";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Stake tokens. Earn rewards. 💸
      </h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        Start staking and watch your mock tokens grow with beautiful UI and
        real-time updates.
      </p>

      <div className="flex flex-col gap-6 items-center">
        <StakeForm />
        <RewardCard />
      </div>
    </div>
  );
}
