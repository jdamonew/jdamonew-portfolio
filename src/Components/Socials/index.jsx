import React from "react";
import { connect } from "react-redux";
import { socials } from "../../Configs/Params";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Socials = ({toggleMode}) =>{
    return(
        <div className={`socials-container`}>
            {socials.map((s,i)=>(
                <button key={s.id} className={`btn-socials ${toggleMode?"dark-mode":"light-mode"}`} onClick={()=>window.open(s.url, "__blank")} target="_blank">
                    <FontAwesomeIcon icon={s.logo} color={s.color} size="3x"/>
                </button>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Socials);

