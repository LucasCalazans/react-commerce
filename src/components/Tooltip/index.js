import styled from 'styled-components';
import { colors } from '../../helpers/styles';

const position = ({ position }) => {
    switch (position) {
        case 'left':
            return `
                top: 50%;
                right: 120%;
                transform: translate(0,-50%);
                &:after {
                    right: -12px;
                    top: 50%;
                    transform: translate(0,-50%) rotate(270deg);
                }
            `;
        case 'bottom':
            return `
                top: 120%;
                left: 50%;
                transform: translate(-50%,0);
                &:after {
                    top: -8px;
                    left: 50%;
                    transform: translate(-50%,0) rotate(180deg);
                }
            `;
        case 'right':
            return `
                top: 50%;
                left: 120%;
                transform: translate(0,-50%);
                &:after {
                    left: -12px;
                    top: 50%;
                    transform: translate(0,-50%) rotate(90deg);
                }
            `;
        case 'top':
        default:
            return `
                bottom: 120%;
                left: 50%;
                transform: translate(-50%,0);
                &:after {
                    left: 50%;
                    transform: translate(-50%,0);
                    bottom: -7px;
                }
            `;
    }
};

const Tooltip = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    min-width: 108px;
    font-size: 14px;
    background: ${colors.black};
    color: ${colors.white};
    border-radius: 8px;
    padding: 5px;
    ${position}
    &:after {
        content: '';
        position: absolute;
        border: 8px solid transparent;
        border-top-color: ${colors.black};
        border-bottom: 0;
    }
`;

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export default Tooltip;
