import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from './index';
import { colors } from '../../helpers/styles';

const IconCart = styled(Icon)`
    & path {
        stroke: ${({ stroke }) => stroke || colors.primary};
        transform: translate(-1530px, -39px);
        stroke-width: 2;
    }
`;

const CartIcon = props => <IconCart {...props} id="cart" />;

export default CartIcon;
