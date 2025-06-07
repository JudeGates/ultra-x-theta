import React from "react";
import { mockTokens } from "../mock/tokens";

export default function MarketList() {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Markets</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400">
            <th className="text-left py-2">Asset</th>
            <th className="text-left py-2">APY</th>
            <th className="text-left py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {mockTokens.map((token) => (
            <tr key={token.symbol} className="border-t border-gray-700">
              <td className="py-3 flex items-center gap-2">
                <img src={token.icon} alt={token.symbol} className="w-5 h-5" />
                {token.symbol}
              </td>
              <td>{token.apy}%</td>
              <td>${token.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
