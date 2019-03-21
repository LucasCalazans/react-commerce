import React from 'react';
import Icon from '../Icon';
import { Overlay } from './styles';
import { colors, sizes } from '../../helpers/styles';

const Loader = ({
    type = 'default',
    icon = 'quarterCircle',
    color = 'primary',
    size = 'xLarge',
    rotate = true,
    loading = false,
}) => {
    return !loading ? null : (
        <Overlay type={type}>
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
