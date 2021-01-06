import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-primary: #2BCFA2;
  --color-red: #DF3558;

  --color-text-title: #00A35E;
  --color-text-lighter: #FFFFFF;
  --color-text-darker: #2C3834;

  --color-background-button: #00EA87;
  --color-background-footer: #3B3B3B;

  --color-placeholder-input: #7B7B7B;
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

::selection {
  background: red;
}

/*Phone*/
@media (min-width: 320px) 
  and (max-width: 479px) {
  :root {
    font-size: 50%;
  }
}

/*Tablet*/
@media (min-width: 480px) 
  and (max-width: 1023px) {
  :root {
    font-size: 56.25%;
  }
}

/*Desktop*/
@media (min-width: 1024px) {
  :root {
    font-size: 62.5%;
  }
}

/* @font-face {
  font-family: 'Muli';
  src: url('../assets/fonts/Muli.ttf') format("truetype");
} */

`;