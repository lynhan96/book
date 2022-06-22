import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  .react-page-plugins-content-divider {
    background-color: #aaa;
    width: 100%;
    height: 2px;
    border: none;
  }

  .editable-area code,
  .editable-area pre {
    font-family: monospace;
    border-radius: 0.3em;
    padding: 0.4em;
  }

  .editable-area code {
    display: inline;
    margin: 0 0.5em;
    white-space: pre;
  }

  .editable-area pre {
    display: block;
    margin: 1em;
  }

  .editable-area ul,
  .editable-area ol {
    margin: 1em 0;
    list-style-type: inside;
  }

  .editable-area li {
    margin: 0.2em 0 0.2em 1em;
  }

  .editable-area li p {
    margin: 0;
  }

  .editable-area ol {
    list-style-type: decimal;
  }

  .editable-area ul {
    list-style-type: disc;
  }

  .react-page-cell-inner-leaf {
    padding: 20px;
  }

  .react-page-cell-inner {
    p {
      margin-bottom: 0;
    }
  }
  p[data-slate-node="element"] {
    margin-bottom: 0px;
  }

  body,
  caption,
  th,
  td,
  input,
  textarea,
  select,
  option,
  legend,
  fieldset,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size-adjust: 0.5;
  }

  .editable-area p,
  .editable-area h1,
  .editable-area h2,
  .editable-area h3,
  .editable-area h4,
  .editable-area h5,
  .editable-area h6,
  .editable-area blockquote,
  .editable-area pre {
    margin: 1em 0 0.5em;
  }

  .editable-area p:first-child,
  .editable-area h1:first-child,
  .editable-area h2:first-child,
  .editable-area h3:first-child,
  .editable-area h4:first-child,
  .editable-area h5:first-child,
  .editable-area h6:first-child,
  .editable-area blockquote:first-child,
  .editable-area pre:first-child {
    margin-top: 0;
  }

  .editable-area p:last-child,
  .editable-area h1:last-child,
  .editable-area h2:last-child,
  .editable-area h3:last-child,
  .editable-area h4:last-child,
  .editable-area h5:last-child,
  .editable-area h6:last-child,
  .editable-area blockquote:last-child,
  .editable-area pre:last-child {
    margin-bottom: 0;
  }

  .editable-area ul,
  .editable-area ol {
    margin: 0;
  }

  .editable-area li {
    margin: 1em 0;
  }

  .editable-area body {
    font-size: 1em;
    line-height: 1.25em;
  }

  .editable-area em {
    font-style: italic;
  }

  .editable-area strong {
    font-weight: 700;
  }

  .editable-area h1 strong,
  .editable-area h2 strong,
  .editable-area h3 strong,
  .editable-area h4 strong,
  .editable-area h5 strong,
  .editable-area h6 strong {
    font-weight: 800;
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area body {
      font-size: 1em;
      line-height: 1.375em;
    }
  }

  .editable-area h1 {
    margin: 1em 0 0.5em 0;
    font-size: 2em;
    line-height: 1.25em;
  }

  .editable-area h1:first-child {
    margin-top: 0;
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h1 {
      font-size: 2.5em; /* 2.5x body copy size = 40px */
      line-height: 1.125;
    }
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h1 {
      font-size: 3em; /* 3x body copy size = 48px */
      line-height: 1.05; /* keep to a multiple of the 20px line height and something more appropriate for display headings */
    }
  }

  .editable-area h2 {
    margin: 0.8em 0 0.5em 0;
    font-size: 1.625em; /* 1.625x body copy size = 26px */
    line-height: 1.15384615; /* 30px / 26px */
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h2 {
      font-size: 2em; /* 2x body copy size = 32px */
      line-height: 1.25em;
    }
  }

  @media only screen and (max-width: 48em) {
    .editable-area h2 {
      font-size: 2.25em; /* 2.25x body copy size = 36px */
      line-height: 1.25em;
    }
  }

  .editable-area h3 {
    margin: 0.8em 0 0.5em 0;
    font-size: 1.375em; /* 1.375x body copy size = 22px */
    line-height: 1.13636364; /* 25px / 22px */
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h3 {
      font-size: 1.5em; /* 1.5x body copy size = 24px */
      line-height: 1.25em;
    }
  }

  @media only screen and (max-width: 48em) {
    .editable-area h3 {
      font-size: 1.75em; /* 1.75x body copy size = 28px */
      line-height: 1.25em;
    }
  }

  .editable-area h4 {
    margin: 0.8em 0 0.5em 0;
    font-size: 1.125em; /* 1.125x body copy size = 18px */
    line-height: 1.11111111;
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h4 {
      line-height: 1.25em;
    }
  }

  @media only screen and (max-width: 48em) {
    .editable-area h4 {
      line-height: 1.25em;
    }
  }

  .editable-area h5 {
    margin: 0.8em 0 0.5em 0;
    font-size: 1.085em; /* 1.125x body copy size = 18px */
    line-height: 1.055;
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h5 {
      line-height: 1.25em;
    }
  }

  @media only screen and (max-width: 48em) {
    .editable-area h5 {
      line-height: 1.25em;
    }
  }

  .editable-area h6 {
    margin: 0.8em 0 0.5em 0;
    font-size: 1.055em; /* 1.125x body copy size = 18px */
    line-height: 1.005;
  }

  @media only screen and (max-width: 64em) and (min-width: 48em) {
    .editable-area h6 {
      line-height: 1.25em;
    }
  }

  @media only screen and (max-width: 48em) {
    .editable-area h6 {
      line-height: 1.25em;
    }
  }

  .editable-area blockquote {
    font-size: 1em;
    font-style: italic;
    padding: 0 2.5em;
  }

`;
