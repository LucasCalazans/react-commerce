import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import { colors, media } from '../../helpers/styles';
import CategoryList from '../CategoryList';

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
        const response = await fetch('http://localhost:3100/categories?_limit=4');
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
