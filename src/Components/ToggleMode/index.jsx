import React from "react";
import { Creators as SystemSettingsActions } from "../../Store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import "./style.scss";

const ToggleMode = (props) => {

    const setToggle = () =>{
        props.setModeSystem()
    }

    return (
        <label className="toggle-container">
            <input 
                className="toggle"
                type="checkbox" 
                onChange={setToggle}
                checked={props.toggleMode}
            />
            <span className="slide">
             <FontAwesomeIcon icon={faMoon}/>
             <FontAwesomeIcon icon={faSun}/>
            </span>
        </label>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators( SystemSettingsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToggleMode);

