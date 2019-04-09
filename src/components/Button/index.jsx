import React from 'react';
import styled from 'styled-components';
import { colors, btnSizes } from '../../helpers/styles';

const color = ({ color }) => {
    switch (color) {
        case 'secondary':
            return colors.secondary;
        case 'success':
            return colors.success;
        case 'danger':
            return colors.danger;
        case 'warning':
            return colors.warning;
        default:
            return colors.primary;
    }
};

const size = ({ size }) => {
    switch (size) {
        case 'small':
            return btnSizes.small;
        case 'large':
            return btnSizes.large;
        default:
            return btnSizes.default;
    }
};

export default styled.button`
    padding: 12px 15px;
    border: 0;
    background-color: ${color};
    color: #f5f5f5;
    height: ${size}px;
    display: flex;
    align-items: center;
`;
