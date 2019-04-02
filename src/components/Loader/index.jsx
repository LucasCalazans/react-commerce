import React from 'react';
import { colors, sizes } from '../../helpers/styles';
import Icon from '../Icon';
import { Overlay } from '../index';

const Loader = ({
    type = 'default',
    icon = 'quarterCircle',
    color = 'primary',
    size = 'xLarge',
    rotate = true,
    loading = false,
}) => {
    return !loading ? null : (
        <Overlay type={type} padding="25px">
            <Icon
                id={icon}
                iconFill={colors[color]}
                iconWidth={sizes[size]}
                iconHeight={sizes[size]}
                rotate={rotate}
            />
        </Overlay>
    );
};

export default Loader;
