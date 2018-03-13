import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = (props) => {
  const { effect, linksArray, navStyle } = props;
  const classMap = {
    fade: 'shift',
  };
  const className = classMap[effect];
  return (
    <nav className={className} style={navStyle}>
      <ul>
        {linksArray.length && linksArray.map(linkObject =>
          <li key={linkObject.text}><a href={linkObject.link}>{linkObject.text}</a></li>)}
      </ul>
    </nav>
  );
};

Button.propTypes = {
  navStyle: PropTypes.shape(),
  effect: PropTypes.string,
  linksArray: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
  })),
};

Button.defaultProps = {
  navStyle: {},
  effect: '',
  linksArray: [],
};

export default Button;
