import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon, { icons } from '../index';

const stories = storiesOf('Icon', module);

stories.add('Icon', () => {
    return Object.keys(icons).map((icon, index) => <Icon id={icon} iconFill="blue" key={index} />);
});
