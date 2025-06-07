import React, { useState } from "react";
import { useStakeStore } from "../../state/useStakeStore";

export default function StakeForm() {
  const { stake, unstake, staked } = useStakeStore();
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-4">Stake Tokens</h3>
      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 mb-4 rounded bg-gray-900 text-white border border-gray-600"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={() => {
            stake(parseFloat(amount));
            setAmount("");
          }}
          className="flex-1 bg-primary text-black py-2 rounded hover:opacity-80"
        >
          Stake
        </button>
        <button
          onClick={() => {
            unstake();
            setAmount("");
          }}
          className="flex-1 bg-red-500 text-white py-2 rounded hover:opacity-80"
        >
          Unstake
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Currently staked: <span className="text-primary">{staked}</span>
      </p>
    </div>
  );
}
