import React from 'react';
import GlobalStyle from './GlobalStyle';
import Topmenu from './containers/Topmenu';
import { Logo, IconsGroup, Header } from './components';
import Footer from './components/Footer';
import FooterLinks from './components/Footer/FooterLinks';
import Search from './containers/Search';

const App = ({ children }) => (
    <main>
        <Header>
            <Logo />
            <Topmenu />
            <IconsGroup />
            <Search />
        </Header>
        {children}
        <Footer>
            <FooterLinks />
        </Footer>
        <GlobalStyle />
    </main>
);

export default App;
