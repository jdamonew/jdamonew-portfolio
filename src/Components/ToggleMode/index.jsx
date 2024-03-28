import React from "react";
import { Creators as SystemSettingsActions } from "../../store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Moon, Sun1 } from "iconsax-react";

const ToggleMode = (props) => {
  const setToggle = () => {
    props.setModeSystem();
  };

  return (
    <label className="toggle-container">
      <input
        className="toggle"
        type="checkbox"
        onChange={setToggle}
        checked={props.toggleMode}
      />
      <span className="slide">
        <Moon size="16" color="#FFFFFF" variant="Broken" />
        <Sun1 size="16" color="#FFFFFF" variant="Broken" />
      </span>
    </label>
  );
};

const mapStateToProps = (state) => ({
  toggleMode: state.systemSettings.toggleMode,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(SystemSettingsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMode);
