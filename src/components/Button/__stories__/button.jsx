import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

stories.add('Button', () => {
    return (
        <>
            <Button color="primary">Hello World</Button>
            <br />
            <Button color="tertiary">Hello World</Button>
            <br />
            <Button color="alternative">Hello World</Button>
            <br />
            <Button color="alternativeLight">Hello World</Button>
            <br />
            <Button color="success">Hello World</Button>
            <br />
            <Button color="danger">Hello World</Button>
            <br />
            <Button color="warning">Hello World</Button>
            <br />
        </>
    );
});
