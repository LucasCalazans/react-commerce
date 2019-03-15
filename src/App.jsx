import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const App = ({ className }) => {
    return (
        <main className={className}>
            <GlobalStyle />
            <Title>React Commerce</Title>
        </main>
    );
};

export default styled(App)`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
