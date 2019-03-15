import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const IconCart = styled(Icon)`
    & path {
        stroke: #14214e;
        transform: translate(-1530px, -39px);
        stroke-width: 2;
    }
`;

const CartIcon = () => {
    return <IconCart id="cart" iconFill="#ffffff" iconWidth="32" iconHeight="32" />;
};

export default CartIcon;
