import PropTypes from 'prop-types';
import "../../Styles/Components/_tag.scss";

const Tag = ({ text = "default", appearance = "default" }) => {
  return (
    <span className={`tag ${appearance}`}>
      {text}
    </span>
  )
}

Tag.propTypes = {
  text: PropTypes.string,
  appearance: PropTypes.string,
};

export default Tag