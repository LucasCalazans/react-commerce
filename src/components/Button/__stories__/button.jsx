import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

<<<<<<< HEAD
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
=======
const getVersions = color => (
    <Fragment>
        <Button color={color}>{color}</Button>
        <br />
        <Button color={color} size="small">
            Small
        </Button>
        <br />
        <Button color={color} size="large">
            Large
        </Button>
        <br />
        <br />
    </Fragment>
);

stories.add('Button', () => (
    <Fragment>
        {getVersions('primary')}
        {getVersions('secondary')}
        {getVersions('danger')}
        {getVersions('warning')}
    </Fragment>
));
>>>>>>> master
