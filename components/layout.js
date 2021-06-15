import React from "react";
import Head from "next/head";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Garden IoT"
          href="https://garden-iot-eka.vercel.app/site.xml"
        />
        <title>Garden IoT - {title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;
