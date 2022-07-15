import React from "react";
import { socials } from "../../Configs/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Socials = () =>{
    return(
        <div className="socials-container">
            {socials.map((s,i)=>(
                <button key={s.id} className="btn-socials" onClick={()=>window.open(s.url, "__blank")} target="_blank">
                    <FontAwesomeIcon icon={s.logo} color={s.color} size="3x"/>
                </button>
            ))}
        </div>
    )
}

export default Socials;