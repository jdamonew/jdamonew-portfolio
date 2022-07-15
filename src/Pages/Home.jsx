import React from "react";
import { Grid, Row, Col, Button } from "rsuite";
import "../Styles/Home.css";
import Logo from "../Components/Logo"
import Socials from "../Components/Socials";

const Home = () =>{
    return(
        <Grid fluid className="grid-home">
            <Row>
                <Col>
                    <Logo/>
                </Col>
            </Row>
            <Row className="second-row-home">
                <Col xs={24} sm={24} md={8}>
                    <h1 className="home-msg">coming soon...</h1>
                    {/* <Socials/> */}
                </Col>
            </Row>
        </Grid>
    )
}

export default Home;