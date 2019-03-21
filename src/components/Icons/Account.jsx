import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from './index';
import { colors } from '../../helpers/styles';

const LogoAccount = styled(Icon)`
    & path {
        stroke: ${({ stroke }) => stroke || colors.primary};
        transform: translate(-1476px, -40px);
        stroke-width: 2;
    }
`;

const AccountIcon = props => {
    return <LogoAccount {...props} id="account" />;
};

export default AccountIcon;
