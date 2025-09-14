
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Logo from "../../components/Logo";
import SelectLanguage from "../../components/SelectLanguage";
import ToggleMode from "../../components/ToggleMode";
import AboutMe from "../../modules/aboutMe";
import { getCurrentYear } from "../../utils/getCurrentYear";

const Home = ({ toggleMode }) => {
  return (
    <div className={`grid-home ${!toggleMode ? "light-mode" : "dark-mode"}`}>
      <header className="header-row-home">
        <Logo />

        <div className="header-row-home_options">
          <SelectLanguage />
          <ToggleMode />
        </div>
      </header>

      <div className="body-row-home">
        <AboutMe />
      </div>

      <footer className="footer-row-home">
        <span className="home-msg">
          Copywrite © {getCurrentYear()} Jóbia Damone
        </span>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggleMode: state.systemSettings.toggleMode,
});

Home.propTypes = {
  toggleMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(Home);
