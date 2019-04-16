import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../helpers/styles';
import Icon from '../Icon';

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const defaultLayout = `
    padding: 10px;
    height: 30px;
    padding-top: 0px;
    background: none;
    border: none;
    outline: none;
`;

const PageButton = styled.button`
    font-family: '${fonts.fontbase}';
    font-size: 24px;

    ${defaultLayout}
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    color: ${({ active }) => (active ? colors.secondary : colors.primary)};
`;

const LeftButton = styled.button`
    ${defaultLayout}
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    padding-top: 7px;
`;

const RightButton = styled.button`
    ${defaultLayout}
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    padding-top: 7px; 
`;

class Pagination extends Component {
    state = {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 0,
        pagesRange: 2,
    };

    goTo(pageNumber) {
        const totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);

        if (pageNumber >= 1 && pageNumber <= totalPages) {
            this.setState(state => ({
                currentPage: pageNumber,
            }));
        }
    }

    changePagination() {
        console.log('change pagination');
    }

    componentDidMount() {
        this.setState(state => ({
            currentPage: parseInt(this.props.currentPage),
            itemsPerPage: parseInt(this.props.itemsPerPage),
            totalItems: parseInt(this.props.totalItems),
            pagesRange: parseInt(this.props.pagesRange),
            totalPages: Math.ceil(this.props.totalItems / this.props.itemsPerPage),
        }));
    }

    render() {
        const pageList = [];
        const totalPages = this.state.totalPages;
        const currentPage = this.getCurrentPage();
        const minRange = currentPage - this.state.pagesRange;
        const maxRange = currentPage + this.state.pagesRange;

        if (totalPages > 0) {
            for (let i = 1; i <= totalPages; i++) {
                let pageButton;

                if (i >= minRange && i <= maxRange) {
                    pageButton = (
                        <PageButton active={i == currentPage} onClick={() => this.goTo(i)}>
                            {i}
                        </PageButton>
                    );
                }

                pageList.push(pageButton);
            }

            return (
                <PageWrapper>
                    <LeftButton
                        onClick={() => this.goTo(currentPage - 1)}
                        active={currentPage == 1}
                    >
                        <Icon
                            id="arrowleft"
                            iconHeight="13"
                            iconWidth="13"
                            iconFill={currentPage == 1 ? colors.alternativeLight : colors.secondary}
                        />
                    </LeftButton>

                    {pageList}

                    <RightButton
                        onClick={() => this.goTo(currentPage + 1)}
                        active={currentPage == totalPages}
                    >
                        <Icon
                            id="arrowright"
                            iconHeight="13"
                            iconWidth="13"
                            iconFill={
                                currentPage == totalPages
                                    ? colors.alternativeLight
                                    : colors.secondary
                            }
                        />
                    </RightButton>
                </PageWrapper>
            );
        } else {
            return false;
        }
    }

    getCurrentPage() {
        return this.state.currentPage > this.state.totalPages
            ? this.state.totalPages
            : this.state.currentPage < 1
            ? 1
            : this.state.currentPage;
    }
}

export default Pagination;
