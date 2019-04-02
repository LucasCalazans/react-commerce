import React from 'react';
import styled from 'styled-components';
import { colors, btnSizes, sizes } from '../../helpers/styles';

const getBackgroundColor = ({ color, hover }) => {
    switch (color) {
        case 'secondary':
            return colors.secondary;
        case 'tertiary':
            return !hover ? colors.tertiary : '#0b7457';
        case 'alternative':
            return colors.alternative;
        case 'alternativeLight':
            return !hover ? colors.alternativeLight : '#14214e';
        case 'success':
            return colors.success;
        case 'danger':
            return colors.danger;
        case 'warning':
            return colors.warning;
        default:
            return !hover ? colors.primary : '#c70041';
    }
};
const getFontColor = ({ color, hover }) => {
    switch (color) {
        case 'alternativeLight':
            console.log('Funfou');
            return !hover ? '#14214e;' : '#FFFFFF';
        default:
            return '#FFFFFF';
    }
};
const size = ({ size }) => {
    switch (size) {
        case 'small':
            return btnSizes.small;
        case 'large':
            return btnSizes.large;
        default:
            return btnSizes.def;
    }
};
const fontSize = ({ fontSize }) => {
    switch (fontSize) {
        case 'xxSmall':
            return sizes.xxSmall;
        case 'xSmall':
            return sizes.xSmall;
        case 'small':
            return sizes.small;
        case 'large':
            return sizes.large;
        case 'xLarge':
            return sizes.xLarge;
        case 'xxLarge':
            return sizes.xxLarge;
        default:
            return sizes.medium;
    }
};

export default styled.button`
    padding: 12px 50px 13px 50px;
    font-family: Lato;
    font-size: ${fontSize}px;
    text-transform: uppercase;
    border: 0;
    background-color: ${getBackgroundColor};
    color: ${getFontColor};
    font-weight: 800;
    line-height: 20px;
    height: ${size}px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${({ color }) => getBackgroundColor({ color, hover: true })};
        color: ${({ color }) => getFontColor({ color, hover: true })};
    }
`;
