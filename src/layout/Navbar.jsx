import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-primary">NovaStake</h1>
      <button className="bg-primary text-black font-semibold px-4 py-2 rounded hover:opacity-80 transition">
        Connect Wallet
      </button>
    </nav>
  );
}
