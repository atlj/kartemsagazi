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
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/res/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/res/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/res/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/res/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/res/favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link rel="shortcut icon" href="/res/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta
                    name="msapplication-config"
                    content="/res/favicon/browserconfig.xml"
                />
                <title>Emsa Gazi Kart</title>
                <meta name="theme-color" content="#ffffff" />
                <meta
                    property="og:title"
                    content="Emsa Gazi Kart"
                    key="title"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="EMSA Gazi kartının anlaşmalı olduğu yerler."
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/aatlj/image/upload/c_scale,w_1175/v1636221404/emsa_gazi_logo_o1tlkf.png"
                    key="image"
                />
                <meta
                    property="url"
                    content="https://kartemsagazi.vercel.app"
                    key="url"
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
