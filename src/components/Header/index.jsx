import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';
import logoImg from '../../assets/images/logo.svg';

const Logo = styled.div`
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
    max-width: 130px;
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
`;

const Header = props => {
    return (
        <StyledHeader>
            <Logo>
                <img src={logoImg} />
            </Logo>
            {props.children}
        </StyledHeader>
    );
};

export default Header;
