import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../../helpers/styles';
import CategoryList from '../CategoryList';

const MenuCont = styled.div`
    margin: 0 auto;
    display: none;
    ${media.tablet`
        display: block;
    `}
        
    }
`;

const Topmenu = () => (
    <MenuCont>
        <CategoryList />
    </MenuCont>
);

export default Topmenu;
