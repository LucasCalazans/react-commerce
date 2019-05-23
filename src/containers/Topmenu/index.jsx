import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import { media } from '../../helpers/styles';
import CategoryList from '../CategoryList';
import BaseApi from '../../api/BaseApi';

const MenuCont = styled.div`
    margin: 0 auto;
    display: none;
    order: 3;
    ${media.tablet`
        display: block;
    `}
`;

class Topmenu extends Component {
    state = {
        categories: [],
    };

    componentDidMount = () => {
        this.getCategories();
    };

    getCategories = async () => {
        const url = BaseApi.getUrl('categories?_limit=4');
        const response = await fetch(url);
        const categories = await response.json();
        this.setState(() => ({ categories }));
    };

    render() {
        return (
            <Fragment>
                <Navigation categories={this.state.categories} />
                <MenuCont>
                    <CategoryList categories={this.state.categories} />
                </MenuCont>
            </Fragment>
        );
    }
}

export default Topmenu;
