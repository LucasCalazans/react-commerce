import styled from 'styled-components';
import { colors, sizes } from '../../helpers/styles/';

export default styled.form`
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    order: 5;
    position: absolute;
    top: 100px;
    width: 100%;
    justify-content: center;
    margin-top: ${sizes.xLarge};
    background-color: ${colors.white};
    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${colors.alternativeLight};
        position: absolute;
        bottom: 55px;
    }
    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${colors.alternativeLight};
        position: absolute;
        bottom: 0;
        top: 55px;
    }
`;
