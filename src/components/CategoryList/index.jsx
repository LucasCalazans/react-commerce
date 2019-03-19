import React, { Component } from 'react';
import { NavItem, NavList, NavUl, ChooseMenuItem, ChooseMenu, IconArrow } from './styles';
import { Icon } from '../../components/Icons';

const itensMenu = [
    {
        id: 1,
        label: 'Peças',
        path: '/pecas',
    },
    {
        id: 2,
        label: 'Serviços',
        path: '/servicos',
    },
    {
        id: 3,
        label: 'Manutenção',
        path: '/manutencao',
    },
    {
        id: 4,
        label: 'Sistemas de troca',
        path: '/sistemas-de-troca',
    },
];

class CategoryList extends Component {
    state = {
        menuActive: 1,
        categoryActive: '',
    };

    render() {
        return (
            <nav>
                <ChooseMenu>
                    <ChooseMenuItem
                        onClick={() => this.setState({ menuActive: 1 })}
                        active={this.state.menuActive === 1}
                    >
                        Menu
                    </ChooseMenuItem>
                    <ChooseMenuItem
                        onClick={() => this.setState({ menuActive: 2 })}
                        active={this.state.menuActive === 2}
                    >
                        Conta
                    </ChooseMenuItem>
                </ChooseMenu>
                <NavUl>
                    {itensMenu.map(menu => (
                        <NavList key={menu.id}>
                            <NavItem
                                onClick={() => this.setState({ categoryActive: menu.id })}
                                active={this.state.categoryActive === menu.id}
                            >
                                {menu.label}
                                <IconArrow
                                    id={
                                        this.state.categoryActive === menu.id
                                            ? 'arrowup'
                                            : 'arrowdown'
                                    }
                                    iconFill=""
                                    iconWidth="10"
                                    iconHeight="10"
                                />
                            </NavItem>
                        </NavList>
                    ))}
                </NavUl>
            </nav>
        );
    }
}

export default CategoryList;
