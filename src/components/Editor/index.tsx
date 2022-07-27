import { Editor } from '@tinymce/tinymce-react';
import initFullProps from './initFullProps';

const CustomEditor = ({ value, setValue }) => {
  let contenido: string = value || '';
  let inicioBody: number = -1;
  let finBody: number = -1;

  inicioBody = contenido.indexOf('<body>');
  finBody = contenido.indexOf('</body>');
  if (inicioBody !== -1) {
    contenido = contenido.substring(inicioBody + 6, finBody - 1);
  }

  return (
    <Editor
      id='Editor'
      tinymceScriptSrc='/tinymce/tinymce.min.js'
      value={contenido}
      init={{
        ...initFullProps,
      }}
      onEditorChange={setValue}
    />
  );
};

export default CustomEditor;