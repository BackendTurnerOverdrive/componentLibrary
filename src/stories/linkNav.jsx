import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs/react';
import LinkNav from '../components/LinkNav';

const stories = storiesOf('LinkNav', module);

const defaultArray = [{
  text: 'Default Text',
  link: '#',
}];

stories.addDecorator(withKnobs);

stories
  .add('default component renders with text', () => <LinkNav linksArray={defaultArray} />)
  .add('component exposes text, effect, and inline style via props', () => (
    <LinkNav
      linksArray={object('linksArray', defaultArray, ',')}
      effect={text('effect', '')}
      navStyle={object('navStyle', {})}
    />));
