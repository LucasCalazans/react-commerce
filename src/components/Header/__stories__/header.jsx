import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../index';
import Logo from '../../Logo';
import Topmenu from '../../../containers/Topmenu';
import IconsGroup from '../../IconsGroup';

const stories = storiesOf('Header', module);

stories.add('Header', () => {
    return (
        <Header>
            <Logo />
            <Topmenu />
            <IconsGroup />
        </Header>
    );
});
