import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import client from "@services/graphql";
import { Provider } from "react-redux";
import Head from "next/head";
import store from "@redux/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Work+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ApolloProvider>
        </>
    );
}

export default MyApp;
