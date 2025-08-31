import { Creators as SystemSettingsActions } from "../../Store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MoonIcon, Sun } from "lucide-react";
import PropTypes from "prop-types";
import "./style.scss";

const ToggleMode = ({ setModeSystem, toggleMode }) => {

    const setToggle = () => {
        setModeSystem()
    }

    return (
        <label className="toggle-container">
            <input
                className="toggle"
                type="checkbox"
                onChange={setToggle}
                checked={toggleMode}
            />
            <span className="slide">
                <MoonIcon
                    size="18"
                    color="#FFFFFF"
                    variant="Broken"
                />
                <Sun
                    size="18"
                    color="#FFFFFF"
                />
            </span>
        </label>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(SystemSettingsActions, dispatch);

ToggleMode.propTypes = {
    setModeSystem: PropTypes.func.isRequired,
    toggleMode: PropTypes.bool.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ToggleMode);

