import React from "react";
import "./styles.css";
import { socials } from "../../Configs/Socials"
import { IconButton } from "rsuite";
const Home = () =>{
    return(
        <div>
            {socials.map((s,i)=>(
                <IconButton style={{
                    backgroundColor:"red",
                    marginRight:2
                }}>
                    {s.name}
                </IconButton>
            ))}
        </div>
    )
}

export default Home;