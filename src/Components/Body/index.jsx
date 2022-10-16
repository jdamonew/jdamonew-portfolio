import React from "react";
import Socials from "../Socials";
import { connect } from "react-redux";
import "../../Styles/Body.scss";

const Body = ({toggleMode}) => {
    return (
        <div className="body-row-home">
            <h2 className={`home-msg ${toggleMode?"dark-mode":"light-mode"}`}>coming soon...</h2>
            <Socials />
        </div>

    )
}
const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Body);
