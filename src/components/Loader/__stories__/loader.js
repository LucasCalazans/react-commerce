import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../index';

const stories = storiesOf('Loader', module);

stories
    .add('Default', () => {
        return <Loader loading={true} />;
    })
    .add('Full Screen', () => {
        return (
            <Loader
                loading={true}
                type="fullscreen"
                icon="home"
                color="success"
                size="xxLarge"
                rotate={true}
            />
        );
    })
    .add('Inline', () => {
        return <Loader loading={true} type="inline" color="danger" size="large" rotate={true} />;
    });
