import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const IconCart = styled(Icon)`
    & path {
        stroke: #000000;
        transform: translate(-1530px, -39px);
        stroke-width: 2;
    }
`;

const CartIcon = () => {
    return <IconCart id="cart" iconFill="#ffffff" iconWidth="34" iconHeight="34" />;
};

export default CartIcon;
