import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/styles';
import AccountIcon from '../Icon/Account';
import CartIcon from '../Icon/Cart';
import SearchIcon from '../Icon/Search';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actions/index';

const GroupCont = styled.div`
    margin-left: auto;
    order: 4;
    & svg {
        margin-left: 10px;
    }
    ${media.tablet`
        margin-left: unset;
        min-width: 140px;
    `}
`;

const IconsGroup = props => {
    const handleClick = () => {
        props.onSetVisibility();
    };

    return (
        <GroupCont>
            <SearchIcon onClick={handleClick} iconFill="#ffffff" iconWidth="32" iconHeight="32" />
            <AccountIcon iconFill="#ffffff" iconWidth="32" iconHeight="32" />
            <CartIcon iconFill="#ffffff" iconWidth="32" iconHeight="32" />
        </GroupCont>
    );
};

const mapStateToProps = state => {
    return {
        isVisible: state.toggleSearch.isVisible,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetVisibility: () => dispatch(actionTypes.setVisibility()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IconsGroup);
