import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import ButtonNav from '../components/ButtonNav';

const stories = storiesOf('ButtonNav', module);

stories.addDecorator(withKnobs);
const defaultLinks = [
  { key: 'Google', data: 'https://google.com' },
  { key: 'Yahoo', data: 'https://yahoo.com' },
];

stories
  .add('default component renders with text', () => <ButtonNav title="title" />)
  .add('Links show with transition animation after clicking hamburger', () => <ButtonNav title="With Links" links={defaultLinks} />)
  .add('Links can be provided as props', () => <ButtonNav title="Link Props" links={object('Links array', defaultLinks)} />);
