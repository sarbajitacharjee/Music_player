import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
