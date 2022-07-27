import type { AppProps } from 'next/app';
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
