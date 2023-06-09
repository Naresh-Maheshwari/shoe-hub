import type { AppProps } from "next/app";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Header from "@/components/Header";

import "@/theme/global.css";
import Head from "next/head";
import Layout from "~/src/components/Layout";
import { CartProvider } from "~/src/contexts/useCartContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { footerData, ...restPageProps } = pageProps;

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
          currency: "USD",
          intent: "capture",
        }}
      >
        <CartProvider>
          <Header />
          <Layout>
            <Component {...restPageProps} />
          </Layout>
        </CartProvider>
      </PayPalScriptProvider>
    </>
  );
}
