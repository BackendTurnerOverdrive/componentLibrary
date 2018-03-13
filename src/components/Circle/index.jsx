import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ strokeWidth = 10, bgWidth = 10, strokeColor='#1571b6', bgColor = '#f5f5f7', strokeLinecap = 'butt', percent = 50, style = {} }) => {
  const radius = (50 - strokeWidth / 2);
  const path = `M 50,50 m 0,-${radius}
   a ${radius},${radius} 0 1 1 0,${2 * radius}
   a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
  const circumference = Math.PI * 2 * radius;

  return (
    <svg viewBox="0 0 100 100" style={style}>
      <path
        d={path}
        stroke={bgColor}
        strokeWidth={bgWidth || strokeWidth}
        fillOpacity="0"
      />
      <path
        d={path}
        strokeLinecap={strokeLinecap}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fillOpacity="0"
        style={{
          strokeDasharray: `${circumference}px ${circumference}px`,
          strokeDashoffset: `${((100 - percent) / 100 * circumference)}px`,
        }}
      />
    </svg>
  );
};

Circle.propTypes = {
  strokeWidth: PropTypes.number,
  bgWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  bgColor: PropTypes.string,
  strokeLinecap: PropTypes.string,
  percent: PropTypes.string,
  style: PropTypes.object,
};

export default Circle;
