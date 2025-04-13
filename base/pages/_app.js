'use client'
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { HashKitProvider, MANIFEST_URL, useGram, useInitApp } from "@hash3/react";
import theme from "@/theme";
import { TEST_CHAT_DATA } from "@/constants/testData";
import { AppLoader } from "@/components/AppLoader";

const API_URL = process?.env?.NEXT_PUBLIC_API_URL
const IS_PROD = process.env.NEXT_PUBLIC_ENV == 'production'

export default function App({ Component, pageProps, router }) {
  const { app, loading, onReady, gram } = useInitApp(API_URL)

  if (loading && !app) {
    return <AppLoader />
  }

  return (
    <HashKitProvider
      chatData={IS_PROD ? null : TEST_CHAT_DATA}      
      manifestUrl={MANIFEST_URL}
      gram={gram}
      router={router}
      apis={{}}
      >
      <Script src="https://telegram.org/js/telegram-web-app.js" id="telegram" onReady={onReady} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </HashKitProvider>
  )
}
