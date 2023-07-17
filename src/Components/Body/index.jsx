import React, { useEffect } from "react";
import Socials from "../Socials";
import { connect } from "react-redux";
import { homeTexts } from "../../Configs/TranslatePackage";
import "../../Styles/Body.scss";

const Body = ({toggleMode, language}) => {
    
    return (
        <div className="body-row-home">
            <h2 className={`home-msg ${toggleMode?"dark-mode":"light-mode"}`}>{homeTexts[language].message}</h2>
            <Socials />
        </div>

    )
}
const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
    language: state.systemSettings.language,
});


export default connect(
    mapStateToProps,
    {})
    (Body);
