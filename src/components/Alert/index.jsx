import React, { Component } from 'react';
import AlertWrapper, { Button } from './styles';
import Icon from '../../components/Icons';

const TYPES = {
    info: {
        color: '#31708f',
        background: '#d9edf7',
        border: '#bce8f1',
    },

    success: {
        color: '#3c763d',
        background: '#dff0d8',
        border: '#d6e9c6',
    },

    warning: {
        color: '#8a6d3b',
        background: '#fcf8e3',
        border: '#faebcc',
    },

    danger: {
        color: '#a94442',
        background: '#f2dede',
        border: '#ebccd1',
    },
};

export const Alert = props => {
    const current = TYPES[props.id];

    return (
        <AlertWrapper current={current}>
            {props.children}
            <Button className="closeModal" onClick={props.onClose} id={props.id}>
                <Icon id="close" iconFill={current.color} iconWidth="12" iconHeight="12" />
            </Button>
        </AlertWrapper>
    );
};

export default Alert;
