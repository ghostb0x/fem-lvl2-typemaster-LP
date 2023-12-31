import { createGlobalStyle } from 'styled-components/macro';

import { COLORS, WEIGHTS, FAMILIES } from '../../constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-offblack: ${COLORS.offblack};
  --color-darkGray: ${COLORS.darkGray};
  --color-lightGray: ${COLORS.lightGray};
  --color-darkOrange: ${COLORS.darkOrange};
  --color-lightOrange: ${COLORS.lightOrange};

  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};
  --font-weight-black: ${WEIGHTS.black};

  /* font shorthand follows pattern: 
  font-style font-weight font-size/line-height font-family */
  --font-h1-desktop: normal var(--font-weight-black) 3.5rem/3.5rem Barlow;
  --font-h1-mobile: normal var(--font-weight-black) 3rem/3rem Barlow;
  --font-h2: normal var(--font-weight-black) 2rem/2.25rem Barlow;
  --font-h3: normal var(--font-weight-black) 1.5rem/1.75rem Barlow;

  --font-body: normal var(--font-weight-medium) 1rem/1.625rem Barlow;
  --font-hero-body-desktop: normal var(--font-weight-medium) 1.125rem/1.625rem Barlow;

  --font-button: normal var(--font-weight-bold) 1rem/1.625rem Barlow;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--color-gray-100);
  font-family: 'Barlow', sans-serif;
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
