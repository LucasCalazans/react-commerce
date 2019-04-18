import React, { Component } from 'react';
import { PageWrapper, PageButton, LeftButton, RightButton } from './styles';
import { colors } from '../../helpers/styles';
import Icon from '../Icon';
class Pagination extends Component {
    // Vars -------
    state = {
        currentPage: 1,
    };

    static defaultProps = {
        itemsPerPage: 10,
        totalItems: 0,
        pagesRange: 2,
    };

    // Main -------
    goToPage(pageNumber) {
        const totalPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);

        if (pageNumber >= 1 && pageNumber <= totalPages) {
            this.setState(state => ({
                currentPage: pageNumber,
            }));
            this.props.onChange && this.props.onChange(pageNumber);
        }
    }

    render() {
        // Vars
        const pageList = [];
        const totalPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
        const currentPage = this.getCurrentPage();
        const minRange = currentPage - parseInt(this.props.pagesRange);
        const maxRange = currentPage + parseInt(this.props.pagesRange);

        // If has results
        if (totalPages > 0) {
            for (let i = 1; i <= totalPages; i++) {
                let pageButton;

                // Show only specific pages
                if (i >= minRange && i <= maxRange) {
                    pageButton = (
                        <PageButton active={i == currentPage} onClick={() => this.goToPage(i)}>
                            {i}
                        </PageButton>
                    );
                }

                pageList.push(pageButton);
            }

            return (
                <PageWrapper>
                    <LeftButton
                        onClick={() => this.goToPage(currentPage - 1)}
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
                        onClick={() => this.goToPage(currentPage + 1)}
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

    // Support --------
    /**
     * Returns a valid current page
     */
    getCurrentPage() {
        return this.state.currentPage > this.props.totalPages
            ? this.props.totalPages
            : this.state.currentPage < 1
            ? 1
            : this.state.currentPage;
    }

    componentDidMount() {
        this.setState(state => ({
            currentPage: parseInt(this.props.currentPage),
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.setState(state => ({
                currentPage: parseInt(this.props.currentPage),
            }));
        }
    }
}

export default Pagination;
