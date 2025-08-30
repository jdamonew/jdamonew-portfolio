import React, { useEffect } from "react";
import { connect } from "react-redux";
import { homeTexts } from "../../Configs/TranslatePackage";
import "../../Styles/Body.scss";
import AboutMe from "../../Modules/AboutMe";

import FloatingMenu from "../FloatingMenu";

const Body = ({ toggleMode, language }) => {

    return (
        <div className="body-row-home">
            <AboutMe />
            {/* <FloatingMenu /> */}
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
