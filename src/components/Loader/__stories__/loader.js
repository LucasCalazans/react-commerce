import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../index';

const stories = storiesOf('Loader', module);

stories.addParameters({ options: { panelPosition: 'bottom' } });

stories
    .add('Default', () => {
        return <Loader loading={true} />;
    })
    .add('Full Screen', () => {
        return <Loader loading={true} type="fullscreen" icon="home" color="white" rotate={true} />;
    })
    .add('Inline', () => {
        return (
            <Loader loading={true} type="inline" color="red" width="75" height="75" rotate={true} />
        );
    });
