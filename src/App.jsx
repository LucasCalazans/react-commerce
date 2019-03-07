import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Icon } from './components/Icons';
import Input from './components/Input';
import Button from './components/Button';
import Alert from './components/Alert';

const App = ({ className }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ev => {
        setInputValue(ev.target.value);
    };

    const [hasAlert, setHasAlert] = useState(true);

    return (
        <main className={className}>
            <GlobalStyle />
        </main>
    );
};

export default styled(App)`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
