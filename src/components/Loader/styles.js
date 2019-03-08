import styled from 'styled-components';

export const Overlay = styled.div`
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
