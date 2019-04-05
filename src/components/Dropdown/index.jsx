import React from 'react';
import { Title, Link, DropdownContent, IconArrow } from './styles';
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        let links = this.props.link.links;
        return (
            <DropdownContent className="dropdown">
                <Title className="button" onClick={this.showDropdownMenu}>
                    {this.props.link.title}
                </Title>
                <IconArrow
                    id={this.state.displayMenu ? 'arrowup' : 'arrowdown'}
                    iconFill="#c70041"
                    iconWidth="15"
                    iconHeight="11"
                />
                {links &&
                    links.map((link, index) => {
                        return this.state.displayMenu ? (
                            <div className="mobile-dropdown" ref="dropdown" key={index}>
                                <Link className="mobile-dropdown_category" href={link.path}>
                                    {link.title}
                                </Link>
                                <span>
                                    {link.numbericon} {link.number}
                                </span>
                                <span>
                                    {link.emailicon} {link.email}
                                </span>
                            </div>
                        ) : null;
                    })}
            </DropdownContent>
        );
    }
}

export default Dropdown;
