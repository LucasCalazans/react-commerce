import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

stories.add('Button', () => {
    return <Button color="alternativeLight">Hello World</Button>;
});
