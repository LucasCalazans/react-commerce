import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import CategoryList from '../../containers/CategoryList';
import { colors } from '../../helpers/styles';
import { NavigationFull, MenuBtn, IconMenu } from './styles';
import { useOverflow } from '../../helpers/hooks';

const Navigation = ({ categories }) => {
    const [active, setActive] = useState(false);
    useOverflow(active);

    return (
        <NavigationFull>
            <Sidebar
                sidebar={<CategoryList categories={categories} />}
                open={active}
                onSetOpen={setActive}
                rootClassName="menu-mobile-box"
                styles={{ sidebar: { background: colors.primary } }}
            >
                &nbsp;
            </Sidebar>
            <MenuBtn className="menu-btn" onClick={() => setActive(true)}>
                <IconMenu id="menu" iconFill={colors.primary} iconWidth="20" iconHeight="20" />
            </MenuBtn>
        </NavigationFull>
    );
};

export default Navigation;
