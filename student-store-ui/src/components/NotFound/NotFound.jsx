import * as React from "react";
import "./NotFound.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <p className="error">404: Nothing Found</p>
      <Sidebar />
    </main>
  );
}
