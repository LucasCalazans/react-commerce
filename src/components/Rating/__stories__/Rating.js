import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Rating from '../../Rating';

const stories = storiesOf('Rating', module);

stories.add('Ratings', () => (
    <Fragment>
        <Rating />
    </Fragment>
));
