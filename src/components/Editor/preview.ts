// import tinymce from 'tinymce';

import { forEach } from 'lodash';

const getContentStyle = (editor) => {
  return editor.getParam('content_style', '', 'string');
};
const shouldUseContentCssCors = (editor) => {
  return editor.getParam('content_css_cors', false, 'boolean');
};
const getBodyClassByHash = (editor) => {
  var bodyClass = editor.getParam('body_class', '', 'hash');
  return bodyClass[editor.id] || '';
};
const getBodyClass = (editor) => {
  var bodyClass = editor.getParam('body_class', '', 'string');
  if (bodyClass.indexOf('=') === -1) {
    return bodyClass;
  } else {
    return getBodyClassByHash(editor);
  }
};
const getBodyIdByHash = (editor) => {
  var bodyId = editor.getParam('body_id', '', 'hash');
  return bodyId[editor.id] || bodyId;
};
const getBodyId = (editor) => {
  var bodyId = editor.getParam('body_id', 'tinymce', 'string');
  if (bodyId.indexOf('=') === -1) {
    return bodyId;
  } else {
    return getBodyIdByHash(editor);
  }
};

// var global$1 = tinymce.util.Tools.resolve('tinymce.Env');

// var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

const getPreviewHtml = (editor, htmlContent) => {
  var headHtml = '';
  var encode = editor.dom.encode;
  var contentStyle = getContentStyle(editor);
  headHtml += '<base href="' + encode(editor.documentBaseURI.getURI()) + '">';
  var cors = shouldUseContentCssCors(editor) ? ' crossorigin="anonymous"' : '';
  forEach(editor.contentCSS, function (url) {
    headHtml +=
      '<link type="text/css" rel="stylesheet" href="' +
      encode(editor.documentBaseURI.toAbsolute(url)) +
      '"' +
      cors +
      '>';
  });
  if (contentStyle) {
    headHtml += '<style type="text/css">' + contentStyle + '</style>';
  }
  var bodyId = getBodyId(editor);
  var bodyClass = getBodyClass(editor);
  var isMetaKeyPressed = 'e.metaKey';
  var preventClicksOnLinksScript =
    '<script>' +
    'document.addEventListener && document.addEventListener("click", function(e) {' +
    'for (var elm = e.target; elm; elm = elm.parentNode) {' +
    'if (elm.nodeName === "A" && !(' +
    isMetaKeyPressed +
    ')) {' +
    'e.preventDefault();' +
    '}' +
    '}' +
    '}, false);' +
    '</script> ';
  var directionality = editor?.getBody()?.dir;
  var dirAttr = directionality ? ' dir="' + encode(directionality) + '"' : '';
  var previewHtml =
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    headHtml +
    '</head>' +
    '<body id="' +
    encode(bodyId) +
    '" class="mce-content-body ' +
    encode(bodyClass) +
    '"' +
    dirAttr +
    '>' +
    htmlContent +
    preventClicksOnLinksScript +
    '</body>' +
    '</html>';
  return previewHtml;
};

export default getPreviewHtml;
