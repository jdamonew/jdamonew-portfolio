import React from "react";
import { Creators as SystemSettingsActions } from "../../store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { languagesOptions } from "../../Configs/TranslatePackage";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { ChevronDown, Languages } from "lucide-react";
import PropTypes from "prop-types";
import posthog from "posthog-js";
import "./style.scss";

const SelectLanguage = ({ setLanguageSystem, language }) => {
    const isMobile = useIsMobile(768);
    const [open, setOpen] = React.useState(false);

    function changeLanguage(event) {
        posthog.capture('change_language', {
            language: event.value
        })
        setLanguageSystem(event.value)
    }

    return isMobile ?
        <div className="language-content-mobile">
            <Languages
                size="20"
                color="#fff"
            />
            <select
                className="select-container"
                value={language}
                onChange={(event) => {
                    setLanguageSystem(event.target.value)
                }}
            >
                {
                    languagesOptions[language].map(option => (
                        <option key={option.value} value={option.value}>{option.title}</option>

                    ))
                }
            </select>
        </div> :
        <div className="language-content-desktop" onClick={() => setOpen(!open)}>
            <div className="language-content-desktop_display">
                <Languages size={20} color="#fff" />
                <p>{languagesOptions[language].filter(item => item.value === language)[0].title}</p>
                <ChevronDown size={20} color="#fff" />
            </div>

            <div className={`language-content-desktop_options ${open ? "open" : ""}`}>
                {
                    languagesOptions[language].map(option => (
                        <option
                            key={option.value}
                            onClick={() => changeLanguage(option)}
                            value={option.value}
                        >
                            {option.title}
                        </option>

                    ))
                }
            </div>
        </div>


}

SelectLanguage.propTypes = {
    setLanguageSystem: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    language: state.systemSettings.language,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(SystemSettingsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SelectLanguage); s
