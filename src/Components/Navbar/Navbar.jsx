import "./navbar.css"
import logo from "../../images/logo.png"
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {

    const [navOpen, setNavOpen]= useState(true)

    return (
        <div id="navbar">
            <div className="inner-nav">
            <img width={"100px"} className="logo" src={logo} alt="" />
            <ul className={`nav-items ${navOpen ? "open" : ""}`}>
                {/* TODO: replace with meaningful links */}
                <li>
                    ingredients
                </li>
                <li>
                    how to use
                </li>
                <li>
                   about us
                </li>
            </ul>
            <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
                {!navOpen?<IoMenu />:<IoClose/>}
            </button>
            </div>
        </div>
    )
}