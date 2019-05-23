import React, { Component } from 'react';
import { NavItem, NavList, NavUl, ChooseMenuItem, ChooseMenu, IconArrow } from './styles';

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
                    {this.props.categories.map(category => (
                        <NavList key={category.id}>
                            <NavItem
                                onClick={() => this.setState({ categoryActive: category.id })}
                                active={this.state.categoryActive === category.id}
                            >
                                {category.title}
                                <IconArrow
                                    id={
                                        this.state.categoryActive === category.id
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
