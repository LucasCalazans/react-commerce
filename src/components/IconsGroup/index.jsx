import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../../helpers/styles';
import AccountIcon from '../Icons/Account';
import CartIcon from '../Icons/Cart';
import SearchIcon from '../Icons/Search';

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
