const initFullProps = (editorName) => ({
  formats: {
    tindent_format: { selector: 'p', styles: { 'text-indent': '40mm' } },
  },
  toolbar:
    'saveToPdf undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  print | insertfile upload_image_btn media link anchor | ltr rtl',
  plugins:
    'saveToPdf print paste importcss searchreplace autolink autosave directionality code visualblocks visualchars fullscreen link table charmap hr pagebreak nonbreaking anchor toc advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons',
  menubar: 'edit view insert format tools table',
  toolbar_mode: 'wrap',
  image_advtab: true,
  image_caption: true,
  quickbars_selection_toolbar:
    'bold italic | quicklink h2 h3 blockquote  forecolor backcolor quicktable',
  mobile: {
    theme: 'mobile',
    toolbar: ['undo', 'bold', 'italic', 'styleselect, restoredraft'],
  },
  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt',
  contextmenu: ' copy wordcount',
  browser_spellcheck: true,
  language: 'en',
  language_url: '/tinymce/langs/es.js',
  paste_data_images: false,
  force_p_newlines: false,
  branding: false,
  forced_root_block: '',
  height: '100vh',
  content_css: 'default',
  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  setup: (editor) => {
    editor.ui.registry.addIcon(
      'uploadImage',
      `<svg width="24" height="24" focusable="false"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg>`
    );
    editor.ui.registry.addButton('upload_image_btn', {
      text: '',
      icon: 'uploadImage',
      tooltip: 'Upload image',
      onAction: function () {
        window.parent.postMessage(
          JSON.stringify({ messageType: 'bookEditor', editorName: editorName }),
          window.location.origin
        );
      },
    });
  },
});

export default initFullProps;
