import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icons';

const IconSearch = styled(Icon)`
    & path {
        stroke: #14214e;
        transform: translate(-1421px, -39px);
        stroke-width: 2;
    }
`;

const SearchIcon = () => {
    return <IconSearch id="search" iconFill="#ffffff" iconWidth="32" iconHeight="32" />;
};

export default SearchIcon;
