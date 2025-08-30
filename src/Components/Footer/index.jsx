import React from "react";
import "../../Styles/Footer.scss";
import { getCurrentYear } from "../../Utils/getCurrentYear";
import { Github } from "lucide-react";
import { connect } from "react-redux";

const Footer = ({ toggleMode }) => {
    return (
        <footer className="footer-row-home">
            <span className={`home-msg ${toggleMode ? "dark-mode" : "light-mode"}`}>
                Copywrite © {getCurrentYear()} Jóbia Damone
            </span>
            <a
                className={`home-msg link-github ${toggleMode ? "dark-mode" : "light-mode"}`}
                href="https://github.com/jdamonew/jdamonew-portfolio"
                target="_blank"
                rel="noreferrer"
            >
                Criado com React.js - Código disponivel no <Github size={20} />
            </a>


        </footer>
    )
}


const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Footer);