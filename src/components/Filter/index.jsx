import React, { Fragment, Component } from 'react';
import AccountIcon from '../Icon/Account';
import Button from '../Button';
import {
    FilterWrapper,
    FilterHeader,
    FilterClose,
    FilterChoose,
    FilterBlock,
    FilterTitle,
    FilterList,
    FilterItem,
    FilterElement,
    FilterCount,
} from './styles';

const filters = [
    {
        title: 'Preco',
        options: [
            {
                title: 'R$0 - R$99',
                qty: 1,
            },
            {
                title: 'R$100 - R$199',
                qty: 5,
            },
            {
                title: 'R$200 - R$299',
                qty: 10,
            },
            {
                title: 'R$300 - R$399',
                qty: 450,
            },
        ],
    },
];

class Filter extends Component {
    constructor() {
        super();
        this.state = {
            isClosed: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isClosed: !this.state.isClosed });
    }
    render() {
        return (
            <Fragment>
                <FilterChoose>
                    <Button>
                        <AccountIcon iconFill="#fff" iconWidth="24" iconHeight="24" /> Filtrar
                    </Button>
                </FilterChoose>
                <FilterWrapper>
                    <FilterHeader>
                        <AccountIcon iconFill="#fff" iconWidth="24" iconHeight="24" /> Filtros{' '}
                        <FilterClose />
                    </FilterHeader>
                    {filters &&
                        filters.map((filter, index) => {
                            return (
                                <FilterBlock key={index}>
                                    <FilterTitle onClick={this.toggle} closed={this.state.isClosed}>
                                        {filter.title}
                                    </FilterTitle>
                                    <FilterList closed={this.state.isClosed}>
                                        {filter.options &&
                                            filter.options.map((option, index) => {
                                                return (
                                                    <FilterItem key={index}>
                                                        <FilterElement>
                                                            {option.title}
                                                            <FilterCount>
                                                                {' '}
                                                                ({option.qty})
                                                            </FilterCount>
                                                        </FilterElement>
                                                    </FilterItem>
                                                );
                                            })}
                                    </FilterList>
                                </FilterBlock>
                            );
                        })}
                    <Button>Limpar Filtros</Button>
                </FilterWrapper>
            </Fragment>
        );
    }
}

export default Filter;
