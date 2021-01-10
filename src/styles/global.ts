import { createGlobalStyle } from 'styled-components';

import EksellDisplaySmallOtf from '../assets/fonts/EksellDisplay-Small.otf';
import EksellDisplaySmallWoff from '../assets/fonts/EksellDisplay-Small.woff';

import EksellDisplayMediumOtf from '../assets/fonts/EksellDisplay-Medium.otf';
import EksellDisplayMediumWoff from '../assets/fonts/EksellDisplay-Medium.woff';

export default createGlobalStyle`
  :root {
    --color-red: #DF3558;

    --color-primary: #2BCFA2;

    --color-text-title: #00A35E;
    --color-text-lighter: #FFFFFF;
    --color-text-darker: #2C3834;

    --color-background-button: #00EA87;
    --color-background-footer: #3B3B3B;

    --color-placeholder-input: #7B7B7B;

    --color-selection: #2BCFA2;
    
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans';
  }

  ::selection {
    background: var(--color-selection);
  }

  @font-face {
    font-family: 'EksellDisplaySmall';
    src: 
      local('EksellDisplaySmall'),
      url(${EksellDisplaySmallOtf}) format('otf'),
      url(${EksellDisplaySmallWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'EksellDisplayMedium';
    src: 
      local('EksellDisplayMedium'),
      url(${EksellDisplayMediumOtf}) format('otf'),
      url(${EksellDisplayMediumWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;