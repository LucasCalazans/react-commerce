import React, { Fragment } from 'react';
import FooterLinks from './links/index';
import {
    FooterContainer,
    FooterCategories,
    CategoryLinks,
    SupportInfo,
    FooterCopyright,
    FooterCopyrightPhrase,
} from './styles';

const Footer = () => {
    return (
        <Fragment>
            <FooterContainer>
                {FooterLinks &&
                    FooterLinks.map((FooterLinks, index) => {
                        return (
                            <dl key={index}>
                                {' '}
                                <FooterCategories key={index}>{FooterLinks.title}</FooterCategories>
                                {FooterLinks.links &&
                                    FooterLinks.links.map((link, index) => {
                                        return (
                                            <dt key={index}>
                                                <CategoryLinks href={link.path}>
                                                    {link.title}
                                                </CategoryLinks>
                                                <div>
                                                    <SupportInfo>
                                                        {link.numbericon}
                                                        {link.number}
                                                    </SupportInfo>
                                                    <SupportInfo>
                                                        {link.emailicon}
                                                        {link.email}
                                                    </SupportInfo>
                                                    <div>{link.img}</div>
                                                </div>
                                            </dt>
                                        );
                                    })}
                            </dl>
                        );
                    })}
            </FooterContainer>
            <FooterCopyright>
                <FooterCopyrightPhrase>
                    Truck Transport ©Todos os Direitos reservados.
                </FooterCopyrightPhrase>
            </FooterCopyright>
        </Fragment>
    );
};

export default Footer;
