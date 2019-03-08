import React from 'react';

import { Icon } from '../Icons';
import { Overlay } from './styles';

const Loader = ({ type, icon, color, width, height, loading, rotate }) => {
    type ? type : (type = 'normal');
    icon ? icon : (icon = 'quarterCircle');
    color ? color : (color = 'yellow');
    width ? width : (width = '35');
    height ? height : (height = '35');
    rotate ? rotate : (rotate = true);

    return !loading ? null : (
        <Overlay type={type}>
            <Icon
                id={icon}
                rotate={rotate}
                iconFill={color}
                iconWidth={width}
                iconHeight={height}
            />
        </Overlay>
    );
};

export default Loader;
