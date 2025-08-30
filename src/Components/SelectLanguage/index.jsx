import React from "react";
import { Creators as SystemSettingsActions } from "../../Store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { languagesOptions } from "../../Configs/TranslatePackage";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { ChevronDown, Languages } from "lucide-react";
import "./style.scss";

const SelectLanguage = (props) => {
    const isMobile = useIsMobile(768);
    const [open, setOpen] = React.useState(false);

    function changeLanguage(event) {
        props.setLanguageSystem(event.value)
    }

    return isMobile ?
        <div className="language-content-mobile">
            <Languages
                size="20"
                color="#fff"
            />
            <select
                className="select-container"
                value={props.language}
                onChange={(event) => {
                    props.setLanguageSystem(event.target.value)
                }}
            >
                {
                    languagesOptions[props.language].map(option => (
                        <option value={option.value}>{option.title}</option>

                    ))
                }
            </select>
        </div> :
        <div className="language-content-desktop" onClick={() => setOpen(!open)}>
            <div className="language-content-desktop_display">
                <Languages size={20} color="#fff" />
                <p>{languagesOptions[props.language].filter(item => item.value === props.language)[0].title}</p>
                <ChevronDown size={20} color="#fff" />
            </div>

            {/* {open && */}
            <div className={`language-content-desktop_options ${open ? "open" : ""}`}>
                {
                    languagesOptions[props.language].map(option => (
                        <option onClick={() => changeLanguage(option)} value={option.value}>{option.title}</option>

                    ))
                }
            </div>
            {/* } */}

        </div>


}

const mapStateToProps = (state) => ({
    language: state.systemSettings.language,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(SystemSettingsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (SelectLanguage);

