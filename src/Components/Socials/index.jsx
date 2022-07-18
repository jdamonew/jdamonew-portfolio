import React from "react";
import { socials } from "../../Configs/Params";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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