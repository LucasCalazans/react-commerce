import React from 'react';
import { storiesOf } from '@storybook/react';
import Buttons from '../index';

const stories = storiesOf('Buttons', module);

stories.add('Buttons', () => {
    return (
        <Buttons color="primary" size="small">
            Hello World
        </Buttons>
    );
});
