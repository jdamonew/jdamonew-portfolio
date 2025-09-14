import React from "react";
import { connect } from "react-redux";
import { aboutMeTexts } from "../../Configs/TranslatePackage";
import Tag from "../../components/General/Tag";
import ImageBlob from "../../Components/ImageBlob";
import Socials from "../../Components/Socials";
import ModalContact from "../../Components/ModalContact";
import PropTypes from "prop-types";

const AboutMe = ({ toggleMode, language }) => {
  return (
    <div
      className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"}`}
    >
      <div
        className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"
          } texts`}
      >
        <Tag text={aboutMeTexts[language].tag} />
        <h1 className="about-me-title">{aboutMeTexts[language].title}</h1>
        <span className="about-me-subtitle">
          {aboutMeTexts[language].subTitle}
        </span>
        <p className="about-me-text">{aboutMeTexts[language].text}</p>
        <ModalContact
          text={aboutMeTexts[language].modal}
          data={aboutMeTexts[language]}
        />
      </div>
      <div
        className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"
          } images`}
      >
        <ImageBlob />
        <Socials />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggleMode: state.systemSettings.toggleMode,
  language: state.systemSettings.language,
});
AboutMe.propTypes = {
  toggleMode: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {})(AboutMe);
