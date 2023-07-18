import React from "react";
import { Creators as SystemSettingsActions } from "../../Store/ducks/systemSettings";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { languagesOptions } from "../../Configs/TranslatePackage";

import "./style.scss";
import { LanguageSquare } from "iconsax-react";

const SelectLanguage = (props) => {

    return (

        <div className="language-contente">
            <LanguageSquare
                size="20"
                color="#fff"
                variant="Broken"
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
        </div>

    )
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

