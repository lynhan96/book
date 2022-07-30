import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0 !important;
  }
  figure.image {
    display: inline-block;
    border: 1px solid gray;
    margin: 0 2px 0 1px;
    background: #f5f2f0;
  }

  figure.align-left {
    float: left;
  }

  figure.align-right {
    float: right;
  }

  figure.image img {
    margin: 8px 8px 0 8px;
  }

  figure.image figcaption {
    margin: 6px 8px 6px 8px;
    text-align: center;
  }

  .tox-tinymce {
    border-radius: 0 !important;
  }

  /*
  Alignment using classes rather than inline styles
  check out the "formats" option
  */

  img.align-left {
    float: left;
  }

  img.align-right {
    float: right;
  }


  .mce-toc h2 {
    margin: 4px;
  }

  .mce-toc li {
    list-style-type: none;
  }

  .tox-notifications-container {
    display: none;
  }

`;
