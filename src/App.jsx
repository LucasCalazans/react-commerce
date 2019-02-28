import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Icon } from './components/Icons';
import { Alerts } from './components/Alerts';
import Input from './Input';

const App = ({ className }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ev => {
        setInputValue(ev.target.value);
    };
    return (
        <main className={className}>
            <GlobalStyle />

            <Alerts id="warning">
                <div className="message">
                    <strong>Alert!</strong> React commerce.
                </div>
            </Alerts>

            <Title>React Commerce</Title>

            <Input placeholder="Type something" onChange={onInputChange} value={inputValue} />

            <Icon id="home" iconFill="blue" iconWidth="42" iconHeight="42" />
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
