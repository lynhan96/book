const initFullProps = (editorName) => ({
  formats: {
    tindent_format: { selector: 'p', styles: { 'text-indent': '40mm' } },
  },
  plugins:
    'toc owerpaste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen link template table charmap pagebreak nonbreaking anchor advlist lists wordcount help charmap quickbars emoticons export',
  toolbar:
    'toc undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen print | upload_image_btn link anchor | template ltr rtl',
  menubar: 'file edit view insert format tools table',

  quickbars_selection_toolbar:
    'bold italic | quicklink h2 h3 fontsize | blockquote forecolor backcolor quicktable',
  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt',
  contextmenu: ' copy wordcount',
  icons: 'thin',
  toolbar_mode: 'wrap',
  pagebreak_split_block: true,
  templates: [
    {
      title: 'Mục lục',
      description: 'Mẫu mục lục',
      content: `
        <ol class="toc-list" role="list">
          <li>
            <a href="#Introduction">
              <span class="title">
                Introduction
                <span class="leaders">.</span>
              </span>
              <span data-href="#Introduction" class="page">
                <span class="visually-hidden">Page&nbsp;</span>5
              </span>
            </a>
            <ol role="list">
              <li>
                <a href="#Introduction-About-This-Book">
                <span class="title">About This Book<span class="leaders">.</span></span> <span
                  data-href="#Introduction-About-This-Book" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>5</span>
                </a>
              </li>
              <li>
                <a href="#Introduction-Acknowledgments">
                <span class="title">Acknowledgments<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Introduction-Acknowledgments" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>8</span>
                </a>
              </li>
              <li>
                <a href="#Introduction-About-the-Author">
                <span class="title">About the Author<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Introduction-About-the-Author" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>8</span>
                </a>
              </li>
              <li>
                <a href="#Introduction-Disclaimer">
                <span class="title">Disclaimer<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Introduction-Disclaimer" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>8</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Promise-Basics">
            <span class="title">1. Promise Basics<span class="leaders" aria-hidden="true">.</span></span>
            <span data-href="#Promise-Basics" class="page"><span class="visually-hidden">Page&nbsp;</span>9</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Promise-Basics-The-Promise-Lifecycle">
                <span class="title">The Promise Lifecycle<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Promise-Basics-The-Promise-Lifecycle" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>17</span>
                </a>
              </li>
              <li>
                <a href="#Promise-Basics-Creating-New-Unsettled-Promises">
                <span class="title">Creating New (Unsettled) Promises<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Promise-Basics-Creating-New-Unsettled-Promises" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>21</span>
                </a>
              </li>
              <li>
                <a href="#Promise-Basics-Creating-Settled-Promises">
                <span class="title">Creating Settled Promises<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Promise-Basics-Creating-Settled-Promises" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>24</span>
                </a>
              </li>
              <li>
                <a href="#Promise-Basics-Summary">
                <span class="title">Summary<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Promise-Basics-Summary" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>27</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Chaining-Promises">
            <span class="title">2. Chaining Promises<span class="leaders" aria-hidden="true">.</span></span>
            <span data-href="#Chaining-Promises" class="page"><span class="visually-hidden">Page&nbsp;</span>28</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Chaining-Promises-Catching-Errors">
                <span class="title">Catching Errors<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Chaining-Promises-Catching-Errors" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>30</span>
                </a>
              </li>
              <li>
                <a href="#Chaining-Promises-Using-finally-in-Promise-Chains">
                <span class="title">Using finally() in Promise Chains<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Chaining-Promises-Using-finally-in-Promise-Chains" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>34</span>
                </a>
              </li>
              <li>
                <a href="#Chaining-Promises-Returning-Values-in-Promise-Chains">
                <span class="title">Returning Values in Promise Chains<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Chaining-Promises-Returning-Values-in-Promise-Chains" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>35</span>
                </a>
              </li>
              <li>
                <a href="#Chaining-Promises-Returning-Promises-in-Promise-Chains">
                <span class="title">Returning Promises in Promise Chains<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Chaining-Promises-Returning-Promises-in-Promise-Chains" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>42</span>
                </a>
              </li>
              <li>
                <a href="#Chaining-Promises-Summary">
                <span class="title">Summary<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Chaining-Promises-Summary" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>43</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Working-with-Multiple-Promises">
            <span class="title">3. Working with Multiple Promises<span class="leaders" aria-hidden="true">.</span></span>
            <span data-href="#Working-with-Multiple-Promises" class="page"><span
              class="visually-hidden">Page&nbsp;</span>43</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiseall-Method">
                <span class="title">The Promise.all() Method<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Working-with-Multiple-Promises-The-Promiseall-Method" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>51</span>
                </a>
              </li>
              <li>
                <a href="#Working-with-Multiple-Promises-The-PromiseallSettled-Method">
                <span class="title">The Promise.allSettled() Method<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Working-with-Multiple-Promises-The-PromiseallSettled-Method" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>57</span>
                </a>
              </li>
              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiseany-Method">
                <span class="title">The Promise.any() Method<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Working-with-Multiple-Promises-The-Promiseany-Method" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>61</span>
                </a>
              </li>
              <li>
                <a href="#Working-with-Multiple-Promises-The-Promiserace-Method">
                <span class="title">The Promise.race() Method<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Working-with-Multiple-Promises-The-Promiserace-Method" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>65</span>
                </a>
              </li>
              <li>
                <a href="#Working-with-Multiple-Promises-Summary">
                <span class="title">Summary<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Working-with-Multiple-Promises-Summary" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>67</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Async-Functions-and-Await-Expressions">
            <span class="title">4. Async Functions and Await Expressions<span class="leaders"
              aria-hidden="true">.</span></span>
            <span data-href="#Async-Functions-and-Await-Expressions" class="page"><span
              class="visually-hidden">Page&nbsp;</span>67</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Async-Functions-and-Await-Expressions-Defining-Async-Functions">
                <span class="title">Defining Async Functions<span class="leaders" aria-hidden="true">.</span></span>
                <span data-href="#Async-Functions-and-Await-Expressions-Defining-Async-Functions" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>69</span>
                </a>
              </li>
              <li>
                <a href="#Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different">
                <span class="title">What Makes Async Functions Different<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different"
                  class="page"><span class="visually-hidden">Page&nbsp;</span>81</span>
                </a>
              </li>
              <li>
                <a href="#Async-Functions-and-Await-Expressions-Summary">
                <span class="title">Summary<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Async-Functions-and-Await-Expressions-Summary" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>83</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Unhandled-Rejection-Tracking">
            <span class="title">5. Unhandled Rejection Tracking<span class="leaders" aria-hidden="true">.</span></span>
            <span data-href="#Unhandled-Rejection-Tracking" class="page"><span
              class="visually-hidden">Page&nbsp;</span>83</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Unhandled-Rejection-Tracking-Detecting-Unhandled-Rejections">
                <span class="title">Detecting Unhandled Rejections<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Unhandled-Rejection-Tracking-Detecting-Unhandled-Rejections" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>85</span>
                </a>
              </li>
              <li>
                <a href="#Unhandled-Rejection-Tracking-Web-Browser-Unhandled-Rejection-Tracking">
                <span class="title">Web Browser Unhandled Rejection Tracking<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Unhandled-Rejection-Tracking-Web-Browser-Unhandled-Rejection-Tracking"
                  class="page"><span class="visually-hidden">Page&nbsp;</span>90</span>
                </a>
              </li>
              <li>
                <a href="#Unhandled-Rejection-Tracking-Nodejs-Unhandled-Rejection-Tracking">
                <span class="title">Node.js Unhandled Rejection Tracking<span class="leaders"
                  aria-hidden="true">.</span></span> <span
                  data-href="#Unhandled-Rejection-Tracking-Nodejs-Unhandled-Rejection-Tracking" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>94</span>
                </a>
              </li>
              <li>
                <a href="#Unhandled-Rejection-Tracking-Summary">
                <span class="title">Summary<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Unhandled-Rejection-Tracking-Summary" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>95</span>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#Final-Thoughts">
            <span class="title">Final Thoughts<span class="leaders" aria-hidden="true">.</span></span>
            <span data-href="#Final-Thoughts" class="page"><span class="visually-hidden">Page&nbsp;</span>96</span>
            </a>
            <ol role="list">
              <li>
                <a href="#Final-Thoughts-Download-the-Extras">
                <span class="title">Download the Extras<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Final-Thoughts-Download-the-Extras" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>96</span>
                </a>
              </li>
              <li>
                <a href="#Final-Thoughts-Support-the-Author">
                <span class="title">Support the Author<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Final-Thoughts-Support-the-Author" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>96</span>
                </a>
              </li>
              <li>
                <a href="#Final-Thoughts-Help-and-Support">
                <span class="title">Help and Support<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Final-Thoughts-Help-and-Support" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>97</span>
                </a>
              </li>
              <li>
                <a href="#Final-Thoughts-Follow-the-Author">
                <span class="title">Follow the Author<span class="leaders" aria-hidden="true">.</span></span> <span
                  data-href="#Final-Thoughts-Follow-the-Author" class="page"><span
                  class="visually-hidden">Page&nbsp;</span>102</span>
                </a>
              </li>
            </ol>
          </li>
        </ol>
      `,
    },
    {
      title: 'Starting my story',
      description: 'A cure for writers block',
      content: 'Once upon a time...',
    },
    {
      title: 'New list with dates',
      description: 'New List with dates',
      content:
        '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
    },
  ],
  height: '100vh',
  content_css: 'default',
  content_style: `
    html {
        background: #eceef4;
        min-height: 100%;
        padding: 0 .5rem
    }
    body {
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, .15);
        box-sizing: border-box;
        margin: 1rem auto 0;
        max-width: 820px;
        min-height: calc(100vh - 1rem);
        padding: 2rem 3rem;
    }

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
  `,
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
