import React, { Fragment } from 'react';
import styles from './styles.css';
import FooterLinks from './links/index';

const Footer = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                {FooterLinks &&
                    FooterLinks.map((FooterLinks, index) => {
                        return (
                            <dl key={index}>
                                {' '}
                                <h2>{FooterLinks.title}</h2>
                                {FooterLinks.links &&
                                    FooterLinks.links.map((link, index) => {
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
