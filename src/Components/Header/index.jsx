import { useEffect, useState } from "react";
import ToggleMode from "../ToggleMode";
import SelectLanguage from "../SelectLanguage";
import { aboutMeTexts } from "../../Configs/TranslatePackage";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ language }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadeOutPoint = 10; // altura até sumir
            const newOpacity = Math.max(1 - scrollY / fadeOutPoint, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header-row-home" style={{ opacity }}>

            <div className="header-container">
                <h2>{aboutMeTexts[language].headerTitle}</h2>

                <div className="header-row-home_options">
                    <SelectLanguage />
                    <ToggleMode />
                </div>
            </div>


        </header>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
    language: state.systemSettings.language,
});

Header.propTypes = {
    language: PropTypes.string.isRequired,
};

export default connect(
    mapStateToProps,
    {})(Header);
