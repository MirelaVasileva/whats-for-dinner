import "./navbar.css"
import logo from "../../images/logo.png"

export const Navbar = () => {
    return (
        <div id="navbar">
            <div className="inner-nav">
            <img width={"100px"} className="logo" src={logo} alt="" />
            <ul className="nav-items">
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
            </div>
        </div>
    )
}