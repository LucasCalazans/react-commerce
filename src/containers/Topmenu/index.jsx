import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import { media } from '../../helpers/styles';
import CategoryList from '../CategoryList';
import BaseApi from '../../api/BaseApi';
import { SkeletonWrapper, SkeletonItem } from '../../components/Skeleton';

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
        isLoading: true,
    };

    componentDidMount() {
        const localCategories = localStorage.getItem('categories');
        if (localCategories) {
            this.setState({
                categories: JSON.parse(localCategories),
                isLoading: false,
            });
        }
        this.getCategories();
    }

    getCategories = async () => {
        const url = BaseApi.getUrl('categories?_limit=4');
        const response = await fetch(url);
        const categories = await response.json();

        this.setState({ categories, isLoading: false }, () => {
            localStorage.setItem('categories', JSON.stringify(categories));
        });
    };

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <Fragment>
                    <SkeletonWrapper width="auto" phone>
                        <SkeletonItem width="28px" height="4px" />
                        <SkeletonItem width="28px" height="4px" />
                        <SkeletonItem width="28px" height="4px" />
                    </SkeletonWrapper>
                    <MenuCont>
                        <SkeletonWrapper type="row" width="500px">
                            <SkeletonItem />
                            <SkeletonItem />
                            <SkeletonItem />
                            <SkeletonItem />
                        </SkeletonWrapper>
                    </MenuCont>
                </Fragment>
            );
        } else {
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
}

export default Topmenu;
