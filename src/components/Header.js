import React, { useState } from 'react'
import "./CSS/Header.css"
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";


function Header() {
    const [toggle, setToggle] = useState(false)


    const menuToggle = () => {
        setToggle({toggle: !toggle})
        console.log("click")
    }



    return (
        <div className="header">
            <div className="header-title">
                <div className="logo">
                    <img src="http://godrejproperty.in/godrej-ananda/images/developer-logo.png" alt="logo" />
                </div>
                <div className="menu" onClick={menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
            </div>
            <div className="header-menu">
                <li>Overview</li>
                <li>Feature</li>
                <li>Payment & Price</li>
                <li>Highlights</li>
                <li>Other Details</li>
                <li>Brochure</li>
                <li>Discount offers</li>
                <li>Book A Site Visit</li>
            </div>
        </div>
    )
}

export default Header
