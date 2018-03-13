import React from 'react';

import { storiesOf } from '@storybook/react';
import Circle from '../components/Circle';
import { withKnobs, text, boolean, number, object, color } from '@storybook/addon-knobs/react';

const defaultDivStyle = {
  height: 200,
  width: 200,
}
const stories = storiesOf('Shapes/Circle', module);

stories.addDecorator(withKnobs);

stories
  .add('default component', () => <Circle />)
  .add('default component inside a 200 x 200 div', () => <div style={ defaultDivStyle } ><Circle /></div>)
  .add('default component inside an adjustable div', () => <div style={ object('Div inline style object', defaultDivStyle) } ><Circle /></div>)
  .add('component with props exposed in adjustable div', () => {
    return (
      <div style={ object('Div inline style object', defaultDivStyle) } >
        <Circle 
          strokeWidth={ number('strokeWidth', 10) } 
          bgWidth={ number('bgWidth', 10) }
          strokeColor={ color('strokeColor', '#1571b6') }
          bgColor={ color('bgColor', '#f5f5f7') }
          strokeLinecap={ text('strokeLinecap', 'butt') }
          percent={ number('percent', 50) }
          style={ object('SVG style object', {}) }
        />
      </div>
    );
  })