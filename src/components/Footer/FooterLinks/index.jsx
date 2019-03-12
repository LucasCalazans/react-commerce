import React from 'react';
import boleto from './icons/boleto.svg';
import elo from './icons/elo.svg';
import mastercard from './icons/mastercard.svg';
import paypal from './icons/paypal.svg';
import visa from './icons/visa.svg';
import telephone from './icons/telephone.svg';
import email from './icons/email.svg';
import {
    FooterContainer,
    FooterCategories,
    CategoryLinks,
    SupportInfo,
    FooterImages,
} from './styles';

const FooterLinks = [
    {
        title: 'Categories',
        links: [
            {
                title: 'Peças',
                path: 'xxx',
            },
            {
                title: 'Serviços',
                path: 'xxx',
            },
            {
                title: 'Manutenção',
                path: 'xxx',
            },
            {
                title: 'Sistema de Trocas',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Institucional',
        links: [
            {
                title: 'Quem Somos',
                path: 'xxx',
            },
            {
                title: 'Nosso Historia',
                path: 'xxx',
            },
            {
                title: 'Trabalhe Conosco',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Ajuda',
        links: [
            {
                title: 'Política de Privacidade',
                path: 'xxx',
            },
            {
                title: 'Política de Troca',
                path: 'xxx',
            },
            {
                title: 'Termos e Condições',
                path: 'xxx',
            },
            {
                title: 'FAQ',
                path: 'xxx',
            },
            {
                title: 'Fale Conosco',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Suporte',
        links: [
            {
                number: '080000000',
                email: 'ajuda@scania.com.br',
                emailicon: [<FooterImages src={email} height="20" width="20" />],
                numbericon: [<FooterImages src={telephone} height="20" width="20" />],
                img: [
                    <FooterImages width="30" height="30" src={boleto} />,
                    <FooterImages width="30" height="30" src={elo} />,
                    <FooterImages width="30" height="30" src={mastercard} />,
                    <FooterImages width="30" height="30" src={paypal} />,
                    <FooterImages width="30" height="30" src={visa} />,
                ],
            },
        ],
    },
];

const MainFooter = () => {
    return (
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
    );
};

export default MainFooter;
