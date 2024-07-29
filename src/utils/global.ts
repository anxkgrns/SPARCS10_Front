import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoB from '../assets/fonts/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEB from '../assets/fonts/AppleSDGothicNeoEB.ttf';
import AppleSDGothicNeoH from '../assets/fonts/AppleSDGothicNeoH.ttf';
import AppleSDGothicNeoM from '../assets/fonts/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoL from '../assets/fonts/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoR from '../assets/fonts/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoSB from '../assets/fonts/AppleSDGothicNeoSB.ttf';
import AppleSDGothicNeoUL from '../assets/fonts/AppleSDGothicNeoUL.ttf';
import AppleSDGothicNeoT from '../assets/fonts/AppleSDGothicNeoT.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'AppleSDGothicNeoB';
        src: local('AppleSDGothicNeoB'), local('AppleSDGothicNeoB');
        font-style: normal;
        src: url(${AppleSDGothicNeoB}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoEB';
        src: local('AppleSDGothicNeoEB'), local('AppleSDGothicNeoEB');
        font-style: normal;
        src: url(${AppleSDGothicNeoEB}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoH';
        src: local('AppleSDGothicNeoH'), local('AppleSDGothicNeoH');
        font-style: normal;
        src: url(${AppleSDGothicNeoH}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoM';
        src: local('AppleSDGothicNeoM'), local('AppleSDGothicNeoM');
        font-style: normal;
        src: url(${AppleSDGothicNeoM}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoL';
        src: local('AppleSDGothicNeoL'), local('AppleSDGothicNeoL');
        font-style: normal;
        src: url(${AppleSDGothicNeoL}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoR';
        src: local('AppleSDGothicNeoR'), local('AppleSDGothicNeoR');
        font-style: normal;
        src: url(${AppleSDGothicNeoR}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoSB';
        src: local('AppleSDGothicNeoSB'), local('AppleSDGothicNeoSB');
        font-style: normal;
        src: url(${AppleSDGothicNeoSB}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoUL';
        src: local('AppleSDGothicNeoUL'), local('AppleSDGothicNeoUL');
        font-style: normal;
        src: url(${AppleSDGothicNeoUL}) format('truetype');
    }
    @font-face {
        font-family: 'AppleSDGothicNeoT';
        src: local('AppleSDGothicNeoT'), local('AppleSDGothicNeoT');
        font-style: normal;
        src: url(${AppleSDGothicNeoT}) format('truetype');
    }
`;

export default GlobalStyle;