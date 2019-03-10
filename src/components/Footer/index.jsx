import React, { Fragment } from 'react';
import styles from './styles.css';
import boleto from './icons/boleto.svg';
import elo from './icons/elo.svg';
import mastercard from './icons/mastercard.svg';
import paypal from './icons/paypal.svg';
import visa from './icons/visa.svg';
import telephone from './icons/telephone.svg';
import email from './icons/email.svg';

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
                emailicon: [<img src={email} height="20" width="20" />],
                numbericon: [<img src={telephone} height="20" width="20" />],
                img: [
                    <img width="30" height="30" src={boleto} />,
                    <img width="30" height="30" src={elo} />,
                    <img width="30" height="30" src={mastercard} />,
                    <img width="30" height="30" src={paypal} />,
                    <img width="30" height="30" src={visa} />,
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
                                                <div>
                                                    <span>
                                                        {link.numbericon}
                                                        {link.number}
                                                    </span>
                                                    <span>
                                                        {link.emailicon}
                                                        {link.email}
                                                    </span>
                                                    <div>{link.img}</div>
                                                </div>
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
