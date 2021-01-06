import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-primary: #2BCFA2;
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