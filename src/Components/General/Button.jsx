
import PropTypes from 'prop-types';

const Button = ({ children, onClick, appearence = "default", className, style }) => {
  return (
    <button className={`button ${appearence} ${className}`} onClick={onClick} style={style} >

      {children}

    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  appearence: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button