import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Rating from '../../Rating';

const stories = storiesOf('Rating', module);

stories.add('Rating Fixed', () => <Rating value="3" />);
stories.add('Rating Non Fixed', () => <Rating />);
