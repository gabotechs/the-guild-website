import App, { NextWebVitalsMetric } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { extendTheme } from '@chakra-ui/react';
import { CombinedThemeProvider, AppSeoProps } from '@guild-docs/client';
import 'prism-theme-night-owl/build/no-italics.css';
import * as gtag from '../lib/gtag';
import globalStyles from '../styles/global';

import '../styles/global.css';
import '@algolia/autocomplete-theme-classic';
import '@theguild/components/dist/static/css/SearchBarV2.css';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  gtag.event({
    action: name,
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id,
    non_interaction: true,
  });
}

const accentColor = '#1cc8ee';

const theme = extendTheme({
  colors: {
    accentColor,
  },
  fonts: {
    heading: 'TGCFont, sans-serif',
    body: 'TGCFont, sans-serif',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const defaultSeo: AppSeoProps = {
  title: 'The Guild',
  description: 'Modern API Platform and Ecosystem that scales',
  logo: {
    url: 'https://guild.dev/static/logo.svg',
  },
};

export default class MyApp extends App {
  render() {
    globalStyles();
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/fav.ico" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed for the-guild.dev"
            href="/feed.xml"
          />
        </Head>
        <Script async src="/static/crisp.js" />
        <CombinedThemeProvider
          theme={theme}
          accentColor={accentColor}
          defaultSeo={defaultSeo}
        >
          <Component {...pageProps} />
        </CombinedThemeProvider>
      </>
    );
  }
}
