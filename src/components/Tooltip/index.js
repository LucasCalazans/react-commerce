import styled from 'styled-components';

const Tooltip = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    top: -52px;
    left: -4px;
    width: 108px;
    font-size: 14px;
    background: #111;
    color: #ffff;
    border-radius: 8px;
    padding: 5px;
    &:after {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 17px;
        border: 8px solid transparent;
        border-top-color: #111;
        border-bottom: 0;
    }
`;

export const TooltipWrapper = styled.div`
    position: relative;
`;

export default Tooltip;
