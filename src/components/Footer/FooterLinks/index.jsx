import React from 'react';
import boleto from './icons/boleto.svg';
import elo from './icons/elo.svg';
import americanexpress from './icons/american-express.svg';
import mastercard from './icons/mastercard.svg';
import paypal from './icons/paypal.svg';
import visa from './icons/visa.svg';
import telephone from './icons/telephone.svg';
import email from './icons/email.svg';
import {
    FooterContainer,
    FooterTitle,
    CategoryLinks,
    SupportInfo,
    FooterImage,
    FooterIcon,
    BorderDiv,
} from './styles';
import styled from 'styled-components';
import media from '../../../helpers/styles/mediaQuery';
import Dropdown from '../../../containers/Dropdown';
import { DropdownContent, Link } from '../../../containers/Dropdown/styles';

const DropdownContainer = styled.div`
    ${media.phoneLandscape`
        display:none;
    `}
`;

const footerLinks = [
    {
        title: 'Categories',
        links: [
            {
                title: 'Peças',
                path: 'pecas',
            },
            {
                title: 'Serviços',
                path: 'servicos',
            },
            {
                title: 'Manutenção',
                path: 'manutencao',
            },
            {
                title: 'Sistema de Trocas',
                path: 'sistema-de-trocas',
            },
        ],
    },
    {
        title: 'Institucional',
        links: [
            {
                title: 'Quem Somos',
                path: 'quem-somos',
            },
            {
                title: 'Nosso Historia',
                path: 'nosso-historia',
            },
            {
                title: 'Trabalhe Conosco',
                path: 'trabalhe-conosco',
            },
        ],
    },
    {
        title: 'Ajuda',
        links: [
            {
                title: 'Política de Privacidade',
                path: 'politica-de-privacidade',
            },
            {
                title: 'Política de Troca',
                path: 'politica-de-troca',
            },
            {
                title: 'Termos e Condições',
                path: 'termos-e-condicoes',
            },
            {
                title: 'FAQ',
                path: 'xxx',
            },
            {
                title: 'Fale Conosco',
                path: 'fale-conosco',
            },
        ],
    },
    {
        title: 'Suporte',
        links: [
            {
                number: '080000000',
                email: 'ajuda@trucktransport.com.br',
                emailicon: [<FooterIcon src={email} height="20" width="20" />],
                numbericon: [<FooterIcon src={telephone} height="20" width="20" />],
                img: [
                    <FooterImage src={boleto} />,
                    <FooterImage src={elo} />,
                    <FooterImage src={americanexpress} />,
                    <FooterImage src={mastercard} />,
                    <FooterImage src={paypal} />,
                    <FooterImage src={visa} />,
                ],
            },
        ],
    },
];

const MainFooter = () => {
    return (
        <FooterContainer>
            {footerLinks &&
                footerLinks.map((footerLink, index) => {
                    return (
                        <dl key={index}>
                            <FooterTitle>{footerLink.title}</FooterTitle>
                            <DropdownContainer>
                                <Dropdown title={footerLink.title}>
                                    {footerLink.links &&
                                        footerLink.links.map((link, index) => {
                                            return (
                                                <div key={index}>
                                                    <Link href={link.path}>{link.title}</Link>
                                                    <span>
                                                        {link.numbericon} {link.number}
                                                    </span>
                                                    <span>
                                                        {link.emailicon} {link.email}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                </Dropdown>
                                <BorderDiv />
                            </DropdownContainer>
                            {footerLink.links &&
                                footerLink.links.map((link, index) => {
                                    return (
                                        <dt key={index}>
                                            <CategoryLinks href={link.path}>
                                                {link.title}
                                            </CategoryLinks>
                                            <SupportInfo>
                                                {link.numbericon}
                                                {link.number}
                                            </SupportInfo>
                                            <SupportInfo>
                                                {link.emailicon}
                                                {link.email}
                                            </SupportInfo>
                                            <div>{link.img}</div>
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
