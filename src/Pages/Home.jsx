import Header from "../Components/Header"
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ toggleMode }) => {
    return (
        <div className='grid-home'>
            <div className={`grid-home bg ${!toggleMode ? "light-mode" : "dark-mode"}`}></div>
            <Header />
            <Body />
            <Footer />
        </div>

    )
}

Home.propTypes = {
    toggleMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});

export default connect(
    mapStateToProps,
    {})(Home);

