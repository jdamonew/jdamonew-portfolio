
import { connect } from "react-redux";
import "../../Styles/Body.scss";
import AboutMe from "../../Modules/AboutMe";

const Body = ({ toggleMode, language }) => {

    return (
        <div className="body-row-home">
            <AboutMe />
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
