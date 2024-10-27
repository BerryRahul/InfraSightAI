"use client";
import MapComponent from "@/Components/DashboardComponents/MapComponent";
import Navbar from "@/Components/DashboardComponents/Navbar";
import SideBar from "@/Components/DashboardComponents/SideBar";

export default function Home() {
  return (
    <div>
      <div className="container ">
        <Navbar />
        <div className="flex justify-between gap-x-10">
          <SideBar />
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
