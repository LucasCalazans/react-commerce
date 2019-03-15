import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const LogoAccount = styled(Icon)`
    & path {
        stroke: #14214e;
        transform: translate(-1476px, -40px);
        stroke-width: 2;
    }
`;

const AccountIcon = () => {
    return <LogoAccount id="account" iconFill="#ffffff" iconWidth="32" iconHeight="32" />;
};

export default AccountIcon;
