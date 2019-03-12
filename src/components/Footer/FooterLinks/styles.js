import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterCategories = styled.h2`
    width: 152px;
    height: 20px;
    color: #14214e;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
`;

export const CategoryLinks = styled.a`
    width: 169px;
    height: 68px;
    color: #707070;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
`;

export const SupportInfo = styled.span`
    width: 169px;
    height: 68px;
    color: #707070;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
    display: table-row-group;
`;

export const FooterImages = styled.img`
    padding-right: 10px;
`;
