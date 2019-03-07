import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icons';

const footerLinks = [
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
        ],
    },
];

const contactLinks = [
    {
        title: 'Suporte',
        links: [
            {
                number: '080000000',
                email: 'ajuda@scania.com.br',
            },
        ],
    },
];

const Footer = () => {
    return (
        <div>
            {footerLinks &&
                footerLinks.map((footerlinks, index) => {
                    return (
                        <dl key={index}>
                            {' '}
                            {footerlinks.title}
                            {footerlinks.links &&
                                footerlinks.links.map((link, index) => {
                                    return (
                                        <dt key={index}>
                                            <a href={link.path}>{link.title}</a>
                                        </dt>
                                    );
                                })}
                        </dl>
                    );
                })}
            {contactLinks &&
                contactLinks.map((contactlinks, index) => {
                    return (
                        <dl key={index}>
                            {' '}
                            {contactlinks.title}
                            {contactlinks.links &&
                                contactlinks.links.map((link, index) => {
                                    return <Icon id="umbrella" />;
                                })}
                        </dl>
                    );
                })}
        </div>
    );
};

export default styled(Footer)`
    display: flex;
`;
