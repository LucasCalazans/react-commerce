import React from 'react';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';
import { Icon } from '../../components/Icons';
import CategoryList from '../../components/CategoryList';
import { colors, sizes, media } from '../../helpers/styles';

const NavigationFull = styled.div`
    display: flex;
    & .menu-mobile-box {
        max-width: 80%;
    }
    ${media.tablet`
        display: none;
    `}
`;

const MenuBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    margin-right: 15px;
    line-height: 0;
`;

const IconMenu = styled(Icon)`
    & path {
        stroke: ${colors.primary};
        transform: translate(-15px, -40px);
        stroke-width: 3;
    }
`;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <NavigationFull>
                <Sidebar
                    sidebar={<CategoryList />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    rootClassName="menu-mobile-box"
                    styles={{ sidebar: { background: colors.primary } }}
                >
                    &nbsp;
                </Sidebar>
                <MenuBtn className="menu-btn" onClick={() => this.onSetSidebarOpen(true)}>
                    <IconMenu
                        id="menu"
                        iconFill="${colors.primary}"
                        iconWidth="20"
                        iconHeight="20"
                    />
                </MenuBtn>
            </NavigationFull>
        );
    }
}

export default Navigation;
