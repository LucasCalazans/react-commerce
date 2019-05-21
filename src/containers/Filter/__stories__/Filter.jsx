import { storiesOf } from '@storybook/react';
import React from 'react';
import Filter from '../index';

const stories = storiesOf('Filter', module);

stories.add('Filter', () => {
    return <Filter />;
});
