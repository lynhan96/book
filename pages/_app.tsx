import type { AppProps } from 'next/app';
import '@react-page/editor/lib/index.css';
import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-html5-video/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-video/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import 'katex/dist/katex.min.css';

import GlobalStyle from 'src/theme/styled';

function MyApp({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any;

  return (
    <>
      <GlobalStyle />
      <PageComponent {...pageProps} />
    </>
  );
}

export default MyApp;
