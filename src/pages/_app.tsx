import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import { Provider } from 'react-redux';
import Layout from '@/components/layout/Layout';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
