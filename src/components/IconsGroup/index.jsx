import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/styles';
import AccountIcon from '../Icon/Account';
import CartIcon from '../Icon/Cart';
import SearchIcon from '../Icon/Search';

const GroupCont = styled.div`
    margin-left: auto;
    & svg {
        margin-left: 10px;
    }
    ${media.tablet`
        margin-left: unset;
        min-width: 140px;
    `}
`;

const IconsGroup = () => (
    <GroupCont>
        <SearchIcon iconFill="#ffffff" iconWidth="32" iconHeight="32" />
        <AccountIcon iconFill="#ffffff" iconWidth="32" iconHeight="32" />
        <CartIcon iconFill="#ffffff" iconWidth="32" iconHeight="32" />
    </GroupCont>
);

export default IconsGroup;
