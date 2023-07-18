import React from 'react';
import { connect } from "react-redux";
import { aboutMeTexts } from "../Configs/TranslatePackage";
import Tag from '../Components/General/Tag';
import Button from '../Components/General/Button';
import ImageBlob from '../Components/ImageBlob';
import "../Styles/AboutMe.scss";
import Socials from '../Components/Socials';

const AboutMe = ({toggleMode,language}) => {
  return (

    <div className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"}`} >
        <div 
        className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"} texts`} >
            <Tag text={aboutMeTexts[language].tag}/>
            <h1 className='about-me-title'>{aboutMeTexts[language].title}</h1>
            <span className='about-me-subtitle'>{aboutMeTexts[language].subTitle}</span>
            <p className='about-me-text'>{aboutMeTexts[language].text}</p>
            <Button title={aboutMeTexts[language].modal}/>
        </div>
        <div className={`about-me-contente ${toggleMode ? "dark-mode" : "light-mode"} images`}>
            <ImageBlob/>
            <Socials/>
        </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
    language: state.systemSettings.language,
});


export default connect(
    mapStateToProps,
    {})
    (AboutMe);