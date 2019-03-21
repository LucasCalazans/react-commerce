import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../index';
import Navigation from '../../Navigation';
import Logo from '../../Logo';
import Topmenu from '../../Topmenu';
import IconsGroup from '../../IconsGroup';

const stories = storiesOf('Header', module);

stories.add('Header', () => {
    return (
        <Header>
            <Navigation />
            <Logo />
            <Topmenu />
            <IconsGroup />
        </Header>
    );
});
