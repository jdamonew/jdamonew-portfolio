import React from "react";
import { connect } from "react-redux";
import { aboutMeTexts } from "../../configs/TranslatePackage";
import Tag from "../../components/General/Tag";
import Button from "../../components/General/Button";
import ImageBlob from "../../components/ImageBlob";
import Socials from "../../components/Socials";
import { ArrowRight2 } from "iconsax-react";

const AboutMe = ({ toggleMode, language }) => {
  return (
    <div
      className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"}`}
    >
      <div
        className={`about-me-contente ${
          toggleMode ? "dark-mode" : "light-mode"
        } texts`}
      >
        <Tag text={aboutMeTexts[language].tag} />
        <h1 className="about-me-title">{aboutMeTexts[language].title}</h1>
        <span className="about-me-subtitle">
          {aboutMeTexts[language].subTitle}
        </span>
        <p className="about-me-text">{aboutMeTexts[language].text}</p>
        <Button>
          <span>{aboutMeTexts[language].modal}</span>
          <ArrowRight2 size="20" color="#FFF" variant="Broken" />
        </Button>
      </div>
      <div
        className={`about-me-contente ${
          toggleMode ? "dark-mode" : "light-mode"
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

export default connect(mapStateToProps, {})(AboutMe);
