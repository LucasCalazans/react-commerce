import styled from 'styled-components';
import { media, sizes, colors } from '../../helpers/styles';

export const Modal = styled.div`
    ${media.phone`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${colors.white};
        height: 100vh;
        width: 100%;
        position: relative;
    `}
    ${media.tablet`
        height: auto;
        border-radius: ${sizes.medium};
        box-shadow: 0 2px 20px #555;
        margin: ${sizes.large} auto;
    `}
    ${media.tabletLandscape`
        width: 70%;
        margin: ${sizes.medium} auto;
    `}
    ${media.desktop`
        width: 50%;
        margin: ${sizes.small} auto;
    `}
`;

export const ModalHeader = styled.header`
    ${media.phone`
        display: flex;
        position: relative;
        padding-left: ${sizes.medium};
        &:after{
            background-color: #ccc;
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            left: 0;
            top: calc(${sizes.large} + ${sizes.xxLarge});
        }
    `}
`;

export const ModalContent = styled.div`
    ${media.phone`
        padding-left: ${sizes.medium};
        height: auto;
    `}
    ${media.tablet`
        margin-bottom: ${sizes.large};
    `}
`;

export const ModalFooter = styled.div`
    ${media.phone`
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        position: relative;
        margin-bottom: ${sizes.small}
        button {
            margin-right: ${sizes.medium};
        }
        &:before{
            background-color: #ccc;
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: calc(${sizes.large} + ${sizes.xxLarge});;
        }
    `}
    ${media.tablet`
        margin-bottom: ${sizes.large};
    `}
`;
