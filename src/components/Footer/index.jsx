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
                icons: [
                    <Icon id="visa" iconFill="#2394BC" iconWidth="50" iconHeight="50" />,
                    <Icon id="paypal" iconFill="#283593" iconWidth="50" iconHeight="55" />,
                ],
            },
        ],
    },
];

const Footer = () => {
    return (
        <Fragment>
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
                                                <span>{link.icons}</span>
                                            </dt>
                                        );
                                    })}
                            </dl>
                        );
                    })}
            </div>
            <div className={styles.container2}>
                <p className={styles.outline}>Truck Transport ©Todos os Direitos reservados.</p>
            </div>
        </Fragment>
    );
};

export default Footer;
