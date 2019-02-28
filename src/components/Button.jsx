import React from 'react';
import styled from 'styled-components';

import { colors, size } from '../helpers/styles';

const color = props => {
    switch (props.color) {
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

export default styled.button`
    padding: 12px 15px;
    border: 0;
    background-color: ${props => color(props)};
    color: #f5f5f5;
    height: ${props => (props.size === 'large' ? size.large : size.small)}px;
    display: flex;
    align-items: center;
`;
