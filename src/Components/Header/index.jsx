import React from "react";
import Logo from "../Logo"
import ToggleMode from "../ToggleMode";
import "../../Styles/Header.scss";
import SelectLanguage from "../SelectLanguage";

const Header = () => {
    return (
        <header className="header-row-home">
            <Logo />
            
            <div className="header-row-home_options">
                <SelectLanguage/>
                <ToggleMode/>
            </div>

        </header>
    )
}

export default Header;