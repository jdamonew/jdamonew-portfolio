import React from "react";
import { Grid, Row, Col } from "rsuite";
import Logo from "../Components/Logo"
import Socials from "../Components/Socials";
import "../Styles/Home.scss";

const Home = () =>{
    return(
        <div className="grid-home" >
            <Grid fluid>
                <Row className="header-row-home">
                    <Col>
                        <Logo />
                    </Col>
                </Row>
                <Row className="body-row-home">
                    <Col xs={24} sm={24} md={24}>
                        <h1 className="home-msg">coming soon...</h1>
                        <Socials/>
                    </Col>
                </Row>
                <Row className="footer-row-home">
                    <Col xs={24} sm={24} md={24}>
                        <span className="home-msg"> 
                            Copywrite © 2022 Jóbia Damone
                        </span>
                    </Col>
                </Row>
            </Grid>
        </div>
                
    )
}

export default Home;