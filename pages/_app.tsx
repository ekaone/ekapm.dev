import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { ChakraProvider, DarkMode, Box, BoxProps } from "@chakra-ui/react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import { theme } from "../theme";
import { PageWrapper } from "../components/page-wrapper";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import * as gtag from "../libs/gtag";

// pre-defined styles for motion
const MotionBox = motion<BoxProps>(Box);

const App = ({ Component, pageProps, router }: AppProps) => {
  const routerGTAG = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    routerGTAG.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      routerGTAG.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [routerGTAG.events]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <DefaultSeo {...SEO} />
      {/** lock color mode */}
      <DarkMode>
        <PageWrapper>
          <Header />
          <AnimatePresence initial={false} exitBeforeEnter>
            <MotionBox
              as="main"
              animate="enter"
              exit="exit"
              flexGrow={1}
              initial="initial"
              key={router.route}
              variants={{
                initial: { opacity: 0, y: -50 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 50 },
              }}
            >
              <Component {...pageProps} />
              <Footer />
            </MotionBox>
          </AnimatePresence>
        </PageWrapper>
      </DarkMode>
    </ChakraProvider>
  );
};

export default App;
