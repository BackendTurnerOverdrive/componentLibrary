import React from 'react';
import PropTypes from 'prop-types';

const Chip = (props) => {
  const { text, fontColor, backgroundColor } = props;
  const textStyle = {
    cursor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    paddingLeft: 12,
    paddingRight: 12,
  };
  const chipStyle = {
    color: fontColor,
    border: 'none',
    height: 32,
    cursor: 'default',
    padding: 0,
    display: 'inline-flex',
    outline: 'none',
    fontSize: '0.8125rem',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor,
    margin: 8,
  };
  return (
    <div style={chipStyle} tabIndex="-1" role="button" >
      <span style={textStyle}>{text}</span>
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

Chip.defaultProps = {
  text: '',
  backgroundColor: '#e0e0e0',
  fontColor: 'rgba(0, 0, 0, 0.87)',
};

export default Chip;
