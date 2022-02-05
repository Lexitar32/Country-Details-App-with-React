import React from 'react'
import { HiOutlineMoon } from "react-icons/hi"
// import { FiSun } from "react-icons/fi";
import "../index.css";

const Header = () => {
    return (
        <div className="appHeader">
            <p>Where in the world?</p>
            <p><span><HiOutlineMoon /></span> Dark Mode</p>
        </div>
    )
}

export default Header;
