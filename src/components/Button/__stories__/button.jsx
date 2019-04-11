import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

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
