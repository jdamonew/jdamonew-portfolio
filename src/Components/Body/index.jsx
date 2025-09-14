
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AboutMe from '../../Modules/AboutMe';
import '../../Styles/Body.scss';

const Body = ({ toggleMode, language }) => {
    return (
        <div className='body-row-home'>
            <AboutMe toggleMode={toggleMode} language={language} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
    language: state.systemSettings.language,
});

Body.propTypes = {
    toggleMode: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {})(Body);
