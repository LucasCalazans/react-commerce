import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const App = ({ className }) => (
    <main className={className}>
        <GlobalStyle />
        <Title>React Commerce</Title>
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
