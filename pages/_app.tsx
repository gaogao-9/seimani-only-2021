import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Transition } from "~/components/Transition";
import { theme } from "~/foundation/theme";
import { GlobalStyle } from "~/foundation/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Transition>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <GlobalStyle />
          <Component {...pageProps} key={router.pathname} />
        </ChakraProvider>
      </Transition>
    </>
  );
};

export default MyApp;
