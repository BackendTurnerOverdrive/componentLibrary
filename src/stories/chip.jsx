import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
import Chip from '../components/Chip';

const stories = storiesOf('Chip', module);

stories.addDecorator(withKnobs);

stories
  .add('default component renders with text', () => <Chip text="Default Text" />)
  .add('component exposes text and color via props', () => (
    <Chip
      text={text('text', 'Default Text')}
      fontColor={color('fontColor', 'rgba(0, 0, 0, 0.87)')}
      backgroundColor={color('backgroundColor', '#e0e0e0')}
    />));
