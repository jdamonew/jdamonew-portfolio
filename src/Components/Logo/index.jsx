import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import "./styles.scss";

const Logo = ({size, toggleMode}) =>{
    return(
        <div>
            <h1 className={`title-logo-top ${toggleMode?"dark-mode":"light-mode"}`} style={{fontSize:size}}>jóbia</h1>
            <h1 className={`title-logo-bottom ${toggleMode?"dark-mode":"light-mode"}`} style={{fontSize:size}}>damone
                <span>.</span>
            </h1>
        </div>
    )
}

Logo.propTypes = {
    size:PropTypes.number,
}

Logo.defaultProps = {
    size: 40
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Logo);
