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



  .controls {
    border-bottom: 1px solid black;
    padding: 10px;
    background-color: Gainsboro;
  }

  .controls > div {
    margin-bottom: 10px;
  }

  .controls > div:last-child {
    margin-bottom: 0px;
  }

  .controls button {
    outline: 0;
    cursor: pointer;
    width: 150px;
    height: 30px;
    font-size: .85rem;
    border: 1px solid RoyalBlue;
    background-color: LightSteelBlue;
    margin-right: 10px;
    font-weight: bold;
    border-radius: 3px;
  }

  .controls button:hover {
    color: Snow;
    background-color: RoyalBlue;
  }

  // Toc Template
  .toc-list, .toc-list ol {
    list-style-type: none;
  }

  .toc-list {
    padding: 0;
  }

  .toc-list ol {
    padding-inline-start: 2ch;
  }

  .toc-list li > a {
      text-decoration: none;
      display: grid;
      grid-template-columns: auto max-content;
      align-items: end;
  }

  .toc-list li > a > .page {
      text-align: right;
  }

  .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      width: 1px;
      white-space: nowrap;
  }

  .toc-list li > a > .title {
      position: relative;
      overflow: hidden;
  }

  .toc-list li > a .leaders::after {
      position: absolute;
      padding-inline-start: .25ch;
      content: " . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . . . . ";
      text-align: right;
  }

`;
