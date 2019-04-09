import React from 'react';
import { Title, Link, DropdownContent, ContentTitle, IconArrow } from './styles';
import { colors } from '../../helpers/styles';
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
    }

    showDropdownMenu() {
        this.setState({ displayMenu: !this.state.displayMenu });
    }

    render() {
        return (
            <DropdownContent>
                <ContentTitle onClick={this.showDropdownMenu}>
                    <Title>{this.props.title}</Title>
                    <IconArrow
                        id={this.state.displayMenu ? 'arrowup' : 'arrowdown'}
                        iconFill={colors.purple}
                        iconWidth="15"
                        iconHeight="11"
                    />
                </ContentTitle>

                {this.state.displayMenu ? this.props.children : null}
            </DropdownContent>
        );
    }
}

export default Dropdown;
