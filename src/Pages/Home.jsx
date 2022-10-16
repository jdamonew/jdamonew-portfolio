import React from "react";
import { connect } from "react-redux";

//Compoenents
import Header from "../Components/Header"
import Body from "../Components/Body";
import Footer from "../Components/Footer";

//Settings
import "../Styles/Home.scss";

const Home = ({toggleMode}) => {
    return (
        <div className={`grid-home ${!toggleMode ? "light-mode":"dark-mode"}`} >
            <Header/>
            <Body/>
            <Footer/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});


export default connect(
    mapStateToProps,
    {})
    (Home);

