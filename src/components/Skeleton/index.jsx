import styled, { keyframes } from 'styled-components';
import { colors, media } from '../../helpers/styles';

const SkeletonAnim = keyframes`
    0% {
        transform: translateX(-200%);

    }
    100% {
        transform: translateX(200%);
    }
`;

export const SkeletonWrapper = styled.span`
    display: flex;
    width: ${props => props.width || 'calc(100% - 4px)'};
    min-width: 16px;
    flex-direction: ${({ type }) => (type === 'row' ? 'row' : 'column')};
    box-sizing: border-box;
    &.skeleton-phone {
        ${media.tablet`
            display: none;
        `}
    }
    &.skeleton-desktop {
        ${media.phone`
            display: none;
        `}
    }
`;

export const SkeletonItem = styled.span`
    width: ${props => props.width || 'calc(100% - 4px)'};
    height: ${props => props.height || '16px'};
    border-radius: ${({ circle }) => (circle === true ? '100%' : '3px')};
    background-color: ${colors.alternativeLight};
    overflow: hidden;
    margin: 2px 2px ${props => props.space || '2px'};
    box-sizing: border-box;
    &:before {
        width: 100%;
        height: 100%;
        content: '';
        background-image: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
        );
        display: block;
        line-height: 1;
        background-repeat: no-repeat;
        animation: 1.2s linear 0s infinite normal none running ${SkeletonAnim};
    }
`;
