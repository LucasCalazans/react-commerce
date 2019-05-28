import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { colors } from '../../helpers/styles';
import CategoryList from '../../containers/CategoryList';
import { NavigationFull, MenuBtn, IconMenu } from './styles';

const Navigation = ({ categories }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <NavigationFull>
            <Sidebar
                sidebar={<CategoryList categories={categories} />}
                open={isOpened}
                onSetOpen={setIsOpened}
                rootClassName="menu-mobile-box"
                styles={{ sidebar: { background: colors.primary } }}
            >
                &nbsp;
            </Sidebar>
            <MenuBtn className="menu-btn" onClick={() => setIsOpened(true)}>
                <IconMenu id="menu" iconFill={colors.primary} iconWidth="20" iconHeight="20" />
            </MenuBtn>
        </NavigationFull>
    );
};

export default Navigation;
