import * as React from "react"
import "./NotFound.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export default function NotFound() {
    return (
        <main>
        <Navbar />
        <p>There's nothing here!</p>
        <Sidebar />
      </main>
    )
  }