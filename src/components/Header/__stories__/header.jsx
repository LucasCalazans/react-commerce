import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from '../index';
import Navigation from '../../../components/Navigation';
import AccountIcon from '../../../components/Account';
import SearchIcon from '../../../components/Search';
import CartIcon from '../../../components/Cart';
import logoImg from '../../../assets/images/logo.svg';
import CategoryList from '../../../components/CategoryList';
import { colors, sizes, media } from '../../../helpers/styles/index';

const Logo = styled.div`
    max-width: 90px;
    max-height: 62px;

    & img {
        max-width: 100%;
    }

    ${media.tabletLandscape`
        max-width: 126px;
        max-height: 88px;
    `}
`;

const IconsGroup = styled.div`
    ${media.tablet`
        margin-left: unset;
        min-width: 140px;
    `}
    margin-left: auto;
    & svg {
        margin-left: 10px;
    }
`;

const Topmenu = styled.div`
    margin: 0 auto;
    display: none;
    ${media.tablet`
        display: block;
    `}
        
    }
`;

const stories = storiesOf('Header', module);

stories.add('Header', () => {
    return (
        <Header>
            <Navigation />
            <Logo>
                <img src={logoImg} />
            </Logo>
            <Topmenu>
                <CategoryList />
            </Topmenu>
            <IconsGroup>
                <SearchIcon />
                <AccountIcon />
                <CartIcon />
            </IconsGroup>
        </Header>
    );
});
