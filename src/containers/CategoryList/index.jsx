import React, { useRef, useState } from 'react';
import { NavItem, NavList, NavUl, ChooseMenuItem, ChooseMenu, IconArrow } from './styles';
import { useClickOutside } from '../../helpers/hooks';

const CategoryList = ({ categories }) => {
    const menuRef = useRef(null);
    const [menuActive, setMenuActive] = useState(1);
    const [categoryActive, setCategoryActive] = useState(-1);
    useClickOutside(menuRef, () => setCategoryActive(-1));

    return (
        <nav>
            <ChooseMenu>
                <ChooseMenuItem onClick={() => setMenuActive(1)} active={menuActive === 1}>
                    Menu
                </ChooseMenuItem>
                <ChooseMenuItem onClick={() => setMenuActive(2)} active={menuActive === 2}>
                    Conta
                </ChooseMenuItem>
            </ChooseMenu>
            <NavUl ref={menuRef}>
                {categories.map(category => (
                    <NavList key={category.id}>
                        <NavItem
                            onClick={() => setCategoryActive(category.id)}
                            active={categoryActive === category.id}
                        >
                            {category.title}
                            <IconArrow
                                id={categoryActive === category.id ? 'arrowup' : 'arrowdown'}
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
};

export default CategoryList;
