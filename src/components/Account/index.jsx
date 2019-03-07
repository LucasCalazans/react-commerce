import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const LogoAccount = styled(Icon)`
    & path {
        stroke: #000000;
        transform: translate(-1476px, -40px);
        stroke-width: 2;
    }
`;

const AccountIcon = () => {
    return <LogoAccount id="account" iconFill="#ffffff" iconWidth="34" iconHeight="34" />;
};

export default AccountIcon;
