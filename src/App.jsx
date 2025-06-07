import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-hero-canvas bg-cover">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 backdrop-blur-md bg-black/70">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
