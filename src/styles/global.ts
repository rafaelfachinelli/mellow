import { createGlobalStyle } from 'styled-components';

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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}

body, input, button {
  font-family: 'Open Sans';
}

::selection {
  background: var(--color-selection);
}

/* @font-face {
  font-family: 'Muli';
  src: url('../assets/fonts/Muli.ttf') format("truetype");
} */

`;