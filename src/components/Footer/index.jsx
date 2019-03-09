import React, { Fragment } from 'react';
import { Icon } from '../Icons';
import styles from './styles.css';

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
        <div className={styles.container}>
            {footerLinks &&
                footerLinks.map((footerlinks, index) => {
                    return (
                        <dl key={index}>
                            {' '}
                            <h2>{footerlinks.title}</h2>
                            {footerlinks.links &&
                                footerlinks.links.map((link, index) => {
                                    return (
                                        <dt key={index}>
                                            <a href={link.path}>{link.title}</a>
                                            <span>{link.number}</span>
                                            <span>{link.email}</span>
                                        </dt>
                                    );
                                })}
                        </dl>
                    );
                })}
        </div>
    );
};

export default Footer;
