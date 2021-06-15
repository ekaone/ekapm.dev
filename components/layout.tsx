import React from "react";
import Head from "next/head";
import { Layout as PropsLayout } from "../types/layout";

function Layout({ children, title }: PropsLayout) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Garden IoT"
          href="https://ekapm.dev/site.xml"
        />
        <title>Eka Prasetia - {title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;
