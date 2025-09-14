import PropTypes from 'prop-types';
import { Github } from 'lucide-react';
import { connect } from 'react-redux';
import { getCurrentYear } from '../../Utils/getCurrentYear';
import '../../Styles/Footer.scss';

const Footer = ({ toggleMode }) => {
    return (
        <footer className='footer-row-home'>
            <a
                className={`home-msg link-github ${toggleMode ? 'dark-mode' : 'light-mode'}`}
                href='https://github.com/jdamonew/jdamonew-portfolio'
                target='_blank'
                rel='noreferrer'
            >
                Criado com React.js - Código disponivel no <Github size={20} />
            </a>
            <span className={`home-msg ${toggleMode ? 'dark-mode' : 'light-mode'}`}>
                Copywrite © {getCurrentYear()} Jóbia Damone </span>


        </footer>
    )
}

const mapStateToProps = (state) => ({
    toggleMode: state.systemSettings.toggleMode,
});

Footer.propTypes = {
    toggleMode: PropTypes.bool.isRequired,
};

export default connect(
    mapStateToProps,
    {})(Footer);