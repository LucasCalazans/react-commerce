import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icons';

const Overlay = styled.div`
    position: ${({ type }) => (type === 'inline' ? 'relative' : 'fixed')};
    background-color: ${({ type }) => (type === 'inline' ? 'transparent' : 'rgba(0, 0, 0, 0.5)')};
    padding: ${({ type }) => (type === 'inline' ? 'none' : '25px')};
    width: ${({ type }) => (type === 'fullscreen' ? '100%' : 'none')};
    height: ${({ type }) => (type === 'fullscreen' ? '100%' : 'none')};

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

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
