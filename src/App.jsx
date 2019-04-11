import React from 'react';
import GlobalStyle from './GlobalStyle';
import Topmenu from './containers/Topmenu';
import { Logo, IconsGroup, Header } from './components';

const App = ({ children }) => (
    <main>
        <Header>
            <Logo />
            <Topmenu />
            <IconsGroup />
        </Header>
        {children}
        <GlobalStyle />
    </main>
);

export default App;
