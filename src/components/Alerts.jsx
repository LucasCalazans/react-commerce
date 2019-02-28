import React from 'react';
import styled from 'styled-components';

export const Alerts = styled.div`
    font-family: sans-serif;
    border: 1px solid;
    border-radius: 4px;
    padding: 15px;
    width: 1200px;
    position: fixed;
    top: 6%;
    color: ${props => props.warning.color};
    background-color: #dff0d8;
    border-color: #d6e9c6;
`;

Alerts.defaultProps = {
    warning: {
        color: 'blue',
    },

    success: {
        color: 'red',
    },
};
