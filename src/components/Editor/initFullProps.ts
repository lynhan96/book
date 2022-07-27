const initFullProps = {
  formats: {
    tindent_format: { selector: 'p', styles: { 'text-indent': '40mm' } },
  },
  toolbar:
    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview  print | insertfile image media link anchor codesample | ltr rtl',
  plugins:
    'print preview paste importcss searchreplace autolink autosave directionality code visualblocks visualchars fullscreen link codesample table charmap hr pagebreak nonbreaking anchor toc advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons',
  menubar: 'edit view insert format tools table',
  toolbar_sticky: true,
  image_advtab: true,
  image_caption: true,
  quickbars_selection_toolbar:
    'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
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
};

export default initFullProps;
