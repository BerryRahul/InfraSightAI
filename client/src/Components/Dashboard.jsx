import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import MapComponent from "./MapComponent";

const Dashboard = () => {
  return (
    <div className="relative w-full min-h-svh flex">
      <Navbar />
      {/* <SideBar /> */}
      <div className="flex-1">
        <MapComponent />
      </div>
    </div>
  );
};

export default Dashboard;
