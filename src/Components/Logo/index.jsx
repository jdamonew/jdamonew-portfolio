import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";

const Logo = ({ toggleMode }) => {
    return (
        <div className="logo-container">
            <h1 className={`title-logo-top ${toggleMode ? "dark-mode" : "light-mode"}`} >
                Jóbia
            </h1>
            <h1 className={`title-logo-bottom ${toggleMode ? "dark-mode" : "light-mode"}`} >
                Damone
            </h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Logo);
