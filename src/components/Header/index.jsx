import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
`;

const Header = props => {
    return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
