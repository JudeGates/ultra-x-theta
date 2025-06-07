import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black bg-opacity-80 backdrop-blur-md border-r border-gray-800 p-4 flex flex-col">
      <div className="mb-10 flex items-center gap-3">
        <img src="/assets/logo.png" alt="NovaStake" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-primary">NovaStake</h1>
      </div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-primary">Dashboard</Link>
        <Link to="/supply" className="hover:text-primary">Supply</Link>
        <Link to="/borrow" className="hover:text-primary">Borrow</Link>
      </nav>
    </aside>
  );
}
