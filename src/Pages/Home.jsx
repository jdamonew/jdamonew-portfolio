import React from "react";
import Header from "../Components/Header"
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import "../Styles/Home.scss";

const Home = () => {
    return (
        <div className="grid-home" >
            <Header/>
            <Body/>
            <Footer/>
        </div>

    )
}

export default Home;