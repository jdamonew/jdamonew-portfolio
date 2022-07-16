import React from "react";
import Logo from "../Components/Logo"
import Socials from "../Components/Socials";
import "../Styles/Home.scss";

const Home = () => {
    return (
        <div className="grid-home" >
            <header className="header-row-home">
                <Logo />
            </header>
            <div className="body-row-home">
                <h2 className="home-msg">coming soon...</h2>
                <Socials />
            </div>
            <footer className="footer-row-home">
                <span className="home-msg">
                    Copywrite © 2022 Jóbia Damone
                </span>
            </footer>
        </div>

    )
}

export default Home;