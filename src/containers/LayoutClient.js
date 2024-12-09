import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const LayoutClient = () => {
    return (
        <div>
            <div><Navbar /> </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutClient