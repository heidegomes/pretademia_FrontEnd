
import React from 'react';
import PretademiaProvider from '../context/pretademiaProvider';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <PretademiaProvider>
        <Component {...pageProps} />
      </PretademiaProvider>
    </>
  );
}

export default MyApp;
