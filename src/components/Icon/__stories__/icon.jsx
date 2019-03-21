import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../index';

const stories = storiesOf('Icon', module);

stories.add('Icon', () => {
    return <Icon id="home" iconFill="blue" iconWidth="42" iconHeight="42" />;
});
