import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Icon } from './components/Icons';

const App = ({ className }) => (
    <main className={className}>
        <GlobalStyle />
        <Title>React Commerce</Title>

        <Icon id="home" iconFill="blue" iconWidth="42" iconHeight="42" />
    </main>
);

export default styled(App)`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    background-color: papayawhip;
`;
