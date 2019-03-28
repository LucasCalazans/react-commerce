import styled from 'styled-components';
import { media, sizes } from '../../helpers/styles';

export const Modal = styled.div`
    ${media.phone`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* border: 1px solid red; */
        height: 96.5vh;
    `}
    ${media.tablet`
        height: auto;
        border-radius: 15px;
        box-shadow: 0 2px 20px #ccc;
        margin: 20% auto;
    `}
    ${media.tabletLandscape`
        width: 70%;
        margin: 15% auto;
    `}
    ${media.desktop`
        width: 50%;
        margin: 12% auto;
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
            top: 60px;
        }
    `}
    ${media.tablet`
       
    `}
`;

export const ModalContent = styled.div`
    ${media.phone`
        padding-left: ${sizes.medium};
        height: auto;
    `}
    ${media.tablet`
        margin-bottom: 20px;
    `}
`;

export const ModalButtons = styled.div`
    ${media.phone`
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        position: relative;
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
            bottom: 60px;
        }
    `}
    ${media.tablet`
        margin-bottom: 20px;
    `}
`;
