import { connect } from "react-redux";
import PropTypes from "prop-types";

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

Logo.propTypes = {
    toggleMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});

export default connect(
    mapStateToProps,
    {})(Logo);
