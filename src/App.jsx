import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Input from './Input';

const App = ({ className }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ev => {
        const { value: inputValue } = ev.target;
        setInputValue(value => (value = inputValue));
    };
    return (
        <main className={className}>
            <GlobalStyle />
            <Title>React Commerce</Title>
            <Input placeholder="Type something" onChange={onInputChange} value={inputValue} />
        </main>
    );
};
export default styled(App)`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    background-color: papayawhip;
`;
