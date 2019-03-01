import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Icon } from './components/Icons';
import Input from './Input';
import Tooltip, { TooltipWrapper } from './components/Tooltip';

const App = ({ className }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ev => {
        setInputValue(ev.target.value);
    };

    const [tooltipActive, tooltipHover] = useState(false);

    return (
        <main className={className}>
            <GlobalStyle />
            <Title>React Commerce</Title>

            <Input placeholder="Type something" onChange={onInputChange} value={inputValue} />
            <TooltipWrapper
                onMouseOver={() => tooltipHover(true)}
                onMouseOut={() => tooltipHover(false)}
            >
                <Icon id="question" iconFill="blue" iconWidth="42" iconHeight="42" />
                <Tooltip active={tooltipActive}>
                    <span>Type something on this input</span>
                </Tooltip>
            </TooltipWrapper>
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
