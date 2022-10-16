import React from "react";
import Logo from "../Logo"
import "../../Styles/Header.scss";
import ToggleMode from "../ToggleMode";

const Header = () => {
    return (
        <header className="header-row-home">
            <Logo />
            <ToggleMode/>
        </header>
    )
}

export default Header;