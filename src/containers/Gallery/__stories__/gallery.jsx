import React from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from '../index';

const stories = storiesOf('Gallery', module);

stories.add('Gallery', () => {
    return <Gallery />;
});
