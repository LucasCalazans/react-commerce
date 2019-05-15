import React, { Fragment } from 'react';
import { FooterCopyright, FooterCopyrightPhrase } from './styles';

const Footer = props => {
    return (
        <Fragment>
            {props.children}
            <FooterCopyright>
                <FooterCopyrightPhrase>
                    Truck Transport ©Todos os Direitos reservados.
                </FooterCopyrightPhrase>
            </FooterCopyright>
        </Fragment>
    );
};

export default Footer;
