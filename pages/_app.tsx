import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from 'src/theme/styled';
import 'src/data/http';

function MyApp({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any;
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <GlobalStyle />
      <PageComponent {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
