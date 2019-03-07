import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../index';
import Navigation from '../../../components/Navigation';
import AccountIcon from '../../../components/Account';
import SearchIcon from '../../../components/Search';
import CartIcon from '../../../components/Cart';

const stories = storiesOf('HeaderTeste', module);

stories.add('HeaderTeste', () => {
    return (
        <Header>
            <Navigation />
            <div className="IconsGroup">
                <SearchIcon />
                <AccountIcon />
                <CartIcon />
            </div>
        </Header>
    );
});
