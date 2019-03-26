import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

stories.add('Button', () => {
    return (
        <Button color="primary" size="small">
            Hello World
        </Button>
    );
});
