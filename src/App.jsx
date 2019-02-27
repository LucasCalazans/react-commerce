import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { UmbrellaIcon, HomeIcon } from './Components/Icons/icons';

const App = ({ className }) => (
    <main className={className}>
        <GlobalStyle />
        <Title>React Commerce</Title>

        <UmbrellaIcon umbrellaFill="blue" iconWidth="60" iconHeight="50" />
        <HomeIcon homefill="#ff00ff" iconWidth="40" iconHeight="40" />
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
