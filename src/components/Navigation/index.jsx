import React from 'react';
import styled from 'styled-components';

const NavUl = styled.ul`
    display: flex;
`;

const NavList = styled.li`
    float: left;
    list-style: none;
    text-transform: uppercase;
    margin: 0 10px;
`;

const NavItem = styled.a`
    color: #c70041;
    font-size: 16px;
    text-transform: uppercase;
`;

const Navigation = () => {
    return (
        <nav>
            <NavUl>
                <NavList>
                    <NavItem href="#">Peças</NavItem>
                </NavList>
                <NavList>
                    <NavItem href="#">Serviços</NavItem>
                </NavList>
                <NavList>
                    <NavItem href="#">Manutenção</NavItem>
                </NavList>
                <NavList>
                    <NavItem href="#">Sistemas de troca</NavItem>
                </NavList>
            </NavUl>
        </nav>
    );
};

export default Navigation;
