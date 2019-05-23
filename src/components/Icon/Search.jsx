import React from 'react';
import styled from 'styled-components';
import Icon from './index';
import { colors } from '../../helpers/styles';

const IconSearch = styled(Icon)`
    & path {
        stroke: ${({ stroke }) => stroke || colors.primary};
        transform: translate(-1421px, -39px);
        stroke-width: 2;
    }
`;

const SearchIcon = props => <IconSearch {...props} id="search" />;

export default SearchIcon;
