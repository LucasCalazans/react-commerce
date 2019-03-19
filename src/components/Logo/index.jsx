import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../../helpers/styles';
import logoImg from '../../assets/images/logo.svg';

const LogoCont = styled.div`
    max-width: 90px;
    max-height: 62px;

    & img {
        max-width: 100%;
    }

    ${media.tabletLandscape`
        max-width: 126px;
        max-height: 88px;
    `}
`;

const Logo = () => (
    <LogoCont>
        <img src={logoImg} />
    </LogoCont>
);

export default Logo;
