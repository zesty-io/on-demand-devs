import React from "react";
import Head from "next/head";
import { ZestyHead } from "@/components/zesty/ZestyHead";
import type { AppProps } from "next/app";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* logic to run zesty head if it detects zesty meta data patterns in props, else load alternate head for you to edit */}
      {(pageProps?.meta?.web && <ZestyHead content={pageProps} />) || (
        <Head>
          <meta charSet="utf-8" />
          <title>Zesty.io Next.js Marketing Technology Example Starter</title>
        </Head>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
