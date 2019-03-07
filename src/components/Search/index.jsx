import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const IconSearch = styled(Icon)`
    & path {
        stroke: #000000;
        transform: translate(-1421px, -39px);
        stroke-width: 2;
    }
`;

const SearchIcon = () => {
    return <IconSearch id="search" iconFill="#ffffff" iconWidth="34" iconHeight="34" />;
};

export default SearchIcon;
