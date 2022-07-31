import { Editor } from '@tinymce/tinymce-react';
import initFullProps from './initFullProps';

const CustomEditor = ({ value, setValue, editorRef, editorName }: any) => {
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
      onInit={(_, editor) => (editorRef.current = editor)}
      id={editorName}
      tinymceScriptSrc='/tinymce/tinymce.min.js'
      value={contenido}
      init={{
        ...(initFullProps(editorName) as any),
      }}
      onEditorChange={setValue}
    />
  );
};

export default CustomEditor;
