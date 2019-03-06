import React from 'react';
import styled from 'styled-components';

export default styled.div`
    font-family: sans-serif;
    border: 1px solid;
    border-radius: 4px;
    padding: 15px;
    width: 1200px;
    position: fixed;
    top: 6%;
    color: ${props => props.current.color};
    background-color: ${props => props.current.background};
    border-color: ${props => props.current.border};
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    float: right;
    cursor: pointer;
    padding: 0;
    margin-top: 8px;
`;
