import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Head from "next/head";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
