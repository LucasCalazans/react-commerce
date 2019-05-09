import { css, createGlobalStyle } from 'styled-components';
import Montserrat from './assets/fonts/Montserrat/Montserrat-Regular.ttf';

export const styles = css`
    html,
    body,
    #main {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

	*{
		font-family: 'Montserrat';
	}

	@font-face {
		font-family: 'Montserrat';
		src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
		font-weight: 500;
	    font-style: normal;
	    letter-spacing: 1px;
	}

`;
