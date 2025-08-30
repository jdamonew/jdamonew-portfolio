
import { connect } from "react-redux";
import { aboutMeTexts } from "../Configs/TranslatePackage";
import ImageBlob from '../Components/ImageBlob';
import Socials from '../Components/Socials';
import Logo from '../Components/Logo';
import ModalContact from '../Components/ModalContact';

const AboutMe = ({ toggleMode, language }) => {
    return (

        <div className={`about-me-content ${toggleMode ? "dark-mode" : "light-mode"}`} >
            <div className={`about-me-content_texts ${toggleMode ? "dark-mode" : "light-mode"} images`}>
                <Logo size={100} />
                <span className='about-me-subtitle'>{aboutMeTexts[language].subTitle}</span>
                <Socials />
                <ModalContact
                    text={aboutMeTexts[language].btnModal}
                    data={aboutMeTexts[language]}
                />
            </div>

            <div className={` ${toggleMode ? "dark-mode" : "light-mode"} images`}>
                <ImageBlob />
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